/* Integration tests: these hit a real, seeded database (run `npm run db:seed` first). */
import request from 'supertest'
import { afterAll, describe, expect, it } from 'vitest'
import { createApp } from '../src/app'
import { prisma } from '../src/db'
import { addOns, categories, drinks, sizes } from '../prisma/seed-data'

const app = createApp()

afterAll(async () => {
  await prisma.$disconnect()
})

describe('GET /api/health', () => {
  it('reports ok when the database is reachable', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ status: 'ok' })
  })
})

describe('GET /api/menu', () => {
  it('returns the full seeded menu', async () => {
    const res = await request(app).get('/api/menu')

    expect(res.status).toBe(200)
    expect(res.body.categories).toHaveLength(categories.length)
    expect(res.body.drinks).toHaveLength(drinks.length)
    expect(res.body.sizes).toHaveLength(sizes.length)
    expect(res.body.addOns).toHaveLength(addOns.length)
    expect(res.body.sugarLevels).toEqual(['0%', '25%', '50%', '75%', '100%'])
    expect(res.body.iceLevels.map((i: { id: string }) => i.id)).toEqual(['No ice', 'Less', 'Normal'])
  })

  it('keeps the menu order and maps each drink to its category slug', async () => {
    const res = await request(app).get('/api/menu')

    expect(res.body.drinks.map((d: { slug: string }) => d.slug)).toEqual(drinks.map((d) => d.slug))
    expect(res.body.drinks[0]).toMatchObject({
      slug: 'brown-sugar-pearl',
      category: 'milk-tea',
      priceCents: 650,
      bestSeller: true,
    })
  })

  it('stores every price as a whole number of cents', async () => {
    const res = await request(app).get('/api/menu')
    const prices = [
      ...res.body.drinks.map((d: { priceCents: number }) => d.priceCents),
      ...res.body.addOns.map((a: { priceCents: number }) => a.priceCents),
      ...res.body.sizes.map((s: { extraCents: number }) => s.extraCents),
    ]
    for (const price of prices) expect(Number.isInteger(price)).toBe(true)
  })

  it('hides sold-out drinks', async () => {
    const slug = drinks[0].slug
    await prisma.drink.update({ where: { slug }, data: { available: false } })
    try {
      const res = await request(app).get('/api/menu')
      expect(res.body.drinks).toHaveLength(drinks.length - 1)
      expect(res.body.drinks.some((d: { slug: string }) => d.slug === slug)).toBe(false)
    } finally {
      await prisma.drink.update({ where: { slug }, data: { available: true } })
    }
  })

  it('allows the configured frontend origin', async () => {
    const res = await request(app).get('/api/menu').set('Origin', 'http://localhost:5173')
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:5173')
  })
})

describe('unknown routes', () => {
  it('return a JSON 404', async () => {
    const res = await request(app).get('/api/nope')
    expect(res.status).toBe(404)
    expect(res.body).toEqual({ error: 'Not found' })
  })
})
