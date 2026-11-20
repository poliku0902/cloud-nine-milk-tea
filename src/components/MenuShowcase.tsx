import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { formatPrice } from '../config'
import {
  BAR_NOTES,
  CATEGORIES,
  DRINKS,
  paletteFor,
  type CategoryId,
} from '../data/menu'
import Photo from './Photo'
import Reveal from './Reveal'

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('milk-tea')

  const visibleDrinks =
    activeCategory === 'all'
      ? DRINKS
      : DRINKS.filter((drink) => drink.category === activeCategory)

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-oolong">
                02 — The Menu
              </p>
              <h2
                id="menu-heading"
                className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-ink sm:text-[2.85rem]"
              >
                Daily Pours
              </h2>
            </div>

            <p className="text-xs uppercase tracking-[0.18em] text-ink-subtle tabular-nums">
              {DRINKS.length} house recipes · Served iced or hot
            </p>
          </div>
        </Reveal>

        {/* Minimalist hairline category filter tabs */}
        <div className="relative mt-10">
          <div
            role="tablist"
            aria-label="Drink categories"
            className="no-scrollbar flex items-center gap-7 overflow-x-auto border-b border-hairline pr-8 md:pr-0"
          >
            {CATEGORIES.map((category) => {
              const selected = activeCategory === category.id
              const count =
                category.id === 'all'
                  ? DRINKS.length
                  : DRINKS.filter((d) => d.category === category.id).length

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls="menu-panel"
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative shrink-0 cursor-pointer pb-4 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                    selected ? 'text-ink' : 'text-ink-subtle hover:text-ink'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="ml-1.5 text-[10px] opacity-70 tabular-nums">
                    ({count})
                  </span>
                  {selected && (
                    <motion.span
                      layoutId="menu-tab-underline"
                      className="absolute inset-x-0 bottom-0 h-[1.5px] bg-ink"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              )
            })}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-paper to-transparent md:hidden"
          />
        </div>

        {/* Two-column editorial menu sheet */}
        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="mt-4"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:gap-x-16"
            >
              {visibleDrinks.map((drink) => (
                <li
                  key={drink.id}
                  className="group flex items-start gap-5 border-b border-hairline py-6"
                >
                  <Photo
                    src={drink.image}
                    alt={drink.name}
                    palette={paletteFor(drink.palette)}
                    className="aspect-[4/5] w-20 shrink-0 border border-hairline sm:w-22"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-[1.42rem] font-normal leading-snug text-ink">
                        {drink.name}
                      </h3>
                      <span className="shrink-0 text-sm font-medium text-ink tabular-nums">
                        {formatPrice(drink.price)}
                      </span>
                    </div>

                    <p className="mt-1 text-[11.5px] tracking-[0.02em] text-oolong">
                      {drink.notes}
                    </p>

                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                      {drink.description}
                    </p>
                  </div>
                </li>
              ))}

              {visibleDrinks.length % 2 === 1 && (
                <li
                  aria-hidden="true"
                  className="hidden flex-col justify-center border-b border-hairline py-6 md:flex"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-oolong">
                    Seasonal Note
                  </p>
                  <p className="mt-2 max-w-sm font-display text-2xl italic leading-snug text-ink">
                    Ask at the cedar counter for today’s rotating single-origin
                    steep and small-batch fruit compote.
                  </p>
                  <p className="mt-2 text-xs tracking-[0.06em] text-ink-subtle">
                    All teas brewed loose-leaf · Never from powder
                  </p>
                </li>
              )}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* At the bar reference notes */}
        <Reveal>
          <div className="mt-14 border-t border-hairline-strong pt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-subtle">
              At the Bar
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {BAR_NOTES.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-lg font-medium text-ink">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
