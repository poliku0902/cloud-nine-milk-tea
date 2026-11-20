import { formatPrice } from '../config'
import { paletteFor, SIGNATURE_DRINKS } from '../data/menu'
import Photo from './Photo'
import Reveal from './Reveal'

export default function SignatureShowcase() {
  return (
    <section
      id="signatures"
      aria-labelledby="signatures-heading"
      className="border-y border-hairline bg-linen/55 py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-oolong">
                01 — House Signatures
              </p>
              <h2
                id="signatures-heading"
                className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-ink sm:text-[2.85rem]"
              >
                Four pours that define the bar
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Balanced around tea leaf first, sweetness second. Each cup is
              steeped, layered, and finished by hand at our cedar counter.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_DRINKS.map((drink, index) => (
            <Reveal key={drink.id} delay={index * 0.06}>
              <article className="group flex h-full flex-col">
                <div className="border border-hairline bg-surface p-2 transition-colors duration-500 group-hover:border-hairline-strong">
                  <Photo
                    src={drink.image}
                    alt={drink.name}
                    palette={paletteFor(drink.palette)}
                    className="aspect-[4/5] w-full"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle tabular-nums">
                  <span>No. {drink.signatureNumber ?? `0${index + 1}`}</span>
                  <span className="text-ink">{formatPrice(drink.price)}</span>
                </div>

                <h3 className="mt-2 font-display text-[1.55rem] font-normal leading-tight text-ink">
                  {drink.name}
                </h3>

                <p className="mt-1.5 text-xs tracking-[0.02em] text-oolong">
                  {drink.notes}
                </p>

                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-muted">
                  {drink.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
