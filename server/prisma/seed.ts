/* Loads the starting menu into the database. Safe to run more than once:
   rows are matched by slug and updated in place, never duplicated.
   Run with `npm run db:seed`. */
import { prisma } from '../src/db'
import { addOns, categories, drinks, sizes } from './seed-data'

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({ where: { slug: category.slug }, create: category, update: category })
  }

  const categoryIds = new Map(
    (await prisma.category.findMany({ select: { id: true, slug: true } })).map((c) => [c.slug, c.id]),
  )

  for (const { category, ...drink } of drinks) {
    const categoryId = categoryIds.get(category)
    if (!categoryId) throw new Error(`Drink "${drink.slug}" uses unknown category "${category}"`)
    const data = { ...drink, categoryId }
    await prisma.drink.upsert({ where: { slug: drink.slug }, create: data, update: data })
  }

  for (const size of sizes) {
    await prisma.size.upsert({ where: { slug: size.slug }, create: size, update: size })
  }

  for (const addOn of addOns) {
    await prisma.addOn.upsert({ where: { slug: addOn.slug }, create: addOn, update: addOn })
  }

  console.log(
    `Seeded ${categories.length} categories, ${drinks.length} drinks, ${sizes.length} sizes, ${addOns.length} add-ons.`,
  )
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
