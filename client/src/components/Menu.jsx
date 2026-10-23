import { useMemo, useState } from 'react'
import { ADD_ONS, CATEGORIES, DRINKS } from '../data/menuData'
import { formatPrice } from '../config'
import MenuCard from './MenuCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/** Full menu with category filters + the add-ons row. */
export default function Menu({ onCustomize }) {
  const [category, setCategory] = useState('all')

  // useMemo: only re-filter when the category changes
  const filteredDrinks = useMemo(
    () => (category === 'all' ? DRINKS : DRINKS.filter((drink) => drink.category === category)),
    [category],
  )

  const activeLabel = CATEGORIES.find((item) => item.id === category)?.label ?? 'All'

  return (
    <section id="menu" className="scroll-mt-24 border-y border-milk/10 bg-cream-deep/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The menu"
            title="Find your new favorite"
            subtitle="Every drink is made to order — pick a size, dial in your sweetness, and add as many toppings as your heart wants."
          />
        </Reveal>

        {/* Category filter tabs */}
        <div
          role="group"
          aria-label="Filter the menu by category"
          className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1"
        >
          {CATEGORIES.map((item) => {
            const isActive = category === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition duration-200 active:scale-95 ${
                  isActive
                    ? 'border-cocoa bg-cocoa text-cream shadow-soft'
                    : 'border-milk/25 bg-white/70 text-cocoa/70 hover:border-milk/50 hover:text-cocoa'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <p className="mt-4 text-sm font-bold text-cocoa/80" aria-live="polite">
          {filteredDrinks.length} {filteredDrinks.length === 1 ? 'drink' : 'drinks'} in {activeLabel}
        </p>

        {/* Drink grid — re-keyed by category so cards animate in on every filter change */}
        <div
          key={category}
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredDrinks.map((drink, index) => (
            <div
              key={drink.id}
              className="animate-rise"
              style={{ animationDelay: `${Math.min(index, 6) * 45}ms`, animationFillMode: 'backwards' }}
            >
              <MenuCard drink={drink} onCustomize={onCustomize} />
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <Reveal>
          <div className="mt-10 rounded-[2rem] border border-dashed border-milk/40 bg-white/60 p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-cocoa">Make it yours</h3>
                <p className="mt-1 text-sm text-cocoa/70">
                  Add any extra when you customize your drink — mix and match as many as you like.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {ADD_ONS.map((addOn) => (
                  <li
                    key={addOn.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-3.5 py-2 text-xs font-bold text-cocoa"
                  >
                    {addOn.name}
                    <span className="text-cocoa/70">+{formatPrice(addOn.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
