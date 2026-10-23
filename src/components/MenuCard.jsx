import { formatPrice } from '../config'
import { paletteFor } from '../data/menuData'
import { PlusIcon } from './Icons'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'

/** One drink on the menu grid: photo on top, details + add button below. */
export default function MenuCard({ drink, onCustomize }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-milk/15 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-milk/35 hover:shadow-lift">
      <div className="relative overflow-hidden bg-cream-deep">
        <Photo
          src={drink.image}
          alt={`${drink.name} served in a cup`}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          fallback={
            <MilkTeaCup
              palette={paletteFor(drink.color)}
              className="w-28"
              showSteam={false}
              label=""
            />
          }
        />
        {drink.bestSeller && (
          <span className="absolute left-4 top-4 rounded-full bg-blush px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cocoa shadow-sm">
            Best seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-cocoa">{drink.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cocoa/70">{drink.description}</p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-display text-lg font-semibold text-cocoa">
            {formatPrice(drink.price)}
          </span>
          <button
            type="button"
            onClick={() => onCustomize(drink)}
            aria-label={`Add ${drink.name} to your order`}
            className="inline-flex items-center gap-1.5 rounded-full bg-cocoa px-3.5 py-2 text-xs font-bold text-cream transition duration-200 hover:bg-[#3b2a20] active:scale-95"
          >
            <PlusIcon className="size-3.5" />
            Add to Order
          </button>
        </div>
      </div>
    </article>
  )
}
