import { DRINKS, paletteFor } from '../data/menuData'
import { formatPrice } from '../config'
import { PlusIcon, StarIcon } from './Icons'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/** Four highlighted drinks, pulled from menuData by `bestSeller: true`. */
export default function BestSellers({ onCustomize }) {
  const bestSellers = DRINKS.filter((drink) => drink.bestSeller).slice(0, 4)

  return (
    <section id="bestsellers" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Fan favorites"
            title="The ones everyone orders"
            subtitle="If it's your first time, start here. These four cups leave the counter faster than we can shake them."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((drink, index) => (
            <Reveal key={drink.id} delay={index * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-milk/15 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-milk/30 hover:shadow-lift">
                <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-blush px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cocoa shadow-sm">
                  <StarIcon className="size-3" />
                  Best seller
                </span>

                <div className="relative overflow-hidden rounded-[1.5rem] bg-cream-deep">
                  <Photo
                    src={drink.image}
                    alt={`${drink.name} in a cup`}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    fallback={
                      <MilkTeaCup
                        palette={paletteFor(drink.color)}
                        className="w-28"
                        showSteam={false}
                        label=""
                      />
                    }
                  />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-cocoa">
                  {drink.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cocoa/70">
                  {drink.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-cocoa">
                    {formatPrice(drink.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => onCustomize(drink)}
                    aria-label={`Add ${drink.name} to your order`}
                    className="grid size-10 place-items-center rounded-full bg-cocoa text-cream transition duration-200 hover:scale-105 hover:bg-[#3b2a20] active:scale-95"
                  >
                    <PlusIcon className="size-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
