import { Router } from 'express'
import { prisma } from '../db'
import { ICE_LEVELS, SUGAR_LEVELS } from '../menu-options'

export const menuRouter = Router()

/**
 * GET /api/menu
 * Everything the storefront needs to render the menu and the customize modal.
 * Sold-out drinks and add-ons (available = false) are left out.
 */
menuRouter.get('/', async (_req, res) => {
  const [categories, drinks, sizes, addOns] = await Promise.all([
    prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      select: { slug: true, label: true },
    }),
    prisma.drink.findMany({
      where: { available: true },
      orderBy: { sortOrder: 'asc' },
      include: { category: { select: { slug: true } } },
    }),
    prisma.size.findMany({ orderBy: { sortOrder: 'asc' } }),
    prisma.addOn.findMany({
      where: { available: true },
      orderBy: { sortOrder: 'asc' },
    }),
  ])

  // Browsers and CDNs may reuse the menu for a minute; it changes rarely.
  res.set('Cache-Control', 'public, max-age=60')

  res.json({
    categories,
    drinks: drinks.map((d) => ({
      id: d.id,
      slug: d.slug,
      name: d.name,
      description: d.description,
      category: d.category.slug,
      priceCents: d.priceCents,
      bestSeller: d.bestSeller,
      color: d.color,
      image: d.imageUrl,
    })),
    sizes: sizes.map((s) => ({
      id: s.id,
      slug: s.slug,
      label: s.label,
      note: s.note,
      extraCents: s.extraCents,
    })),
    sugarLevels: SUGAR_LEVELS,
    iceLevels: ICE_LEVELS,
    addOns: addOns.map((a) => ({
      id: a.id,
      slug: a.slug,
      name: a.name,
      priceCents: a.priceCents,
    })),
  })
})
