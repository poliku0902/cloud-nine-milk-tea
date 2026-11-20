import { ArrowDownRight } from 'lucide-react'
import { motion } from 'motion/react'
import { SHOP } from '../config'
import { CUP_PALETTES } from '../data/menu'
import Photo from './Photo'

const HERO_PILLARS = [
  { index: '01', title: 'Loose-Leaf Only', note: 'Steeped fresh each morning' },
  { index: '02', title: 'Warm Tapioca', note: 'Simmered in small batches' },
  { index: '03', title: 'Walk-In Bar', note: 'Maple & 5th · Open daily' },
] as const

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          {/* Editorial copy column */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-oolong"
            >
              <span className="h-px w-8 bg-oolong/60" aria-hidden="true" />
              <span>
                {SHOP.city} · Tea Bar · {SHOP.established}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[2.85rem] font-normal leading-[1.03] tracking-[-0.02em] text-ink sm:text-[3.75rem] md:text-[3.35rem] lg:text-[4.6rem]"
            >
              Whole-leaf tea,
              <br />
              <em className="font-normal italic text-oolong">steeped slow</em> &amp;
              <br />
              shaken to order.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-lg text-[15.5px] leading-[1.7] text-ink-muted sm:text-base"
            >
              {SHOP.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-oolong"
              >
                <span>Explore the Menu</span>
                <ArrowDownRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#story"
                className="border-b border-ink/35 pb-1 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-oolong hover:text-oolong"
              >
                Our Craft
              </a>
            </motion.div>

            {/* Quiet architectural pillars */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.34 }}
              className="mt-12 grid grid-cols-1 gap-4 border-t border-hairline pt-7 sm:grid-cols-3 sm:gap-6 lg:mt-16"
            >
              {HERO_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="grid grid-cols-[1.75rem_1fr] items-baseline gap-x-3 sm:block"
                >
                  <dt className="row-span-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-subtle tabular-nums">
                    {pillar.index}
                  </dt>
                  <dd className="font-display text-lg font-medium leading-snug text-ink sm:mt-1.5 sm:text-xl">
                    {pillar.title}
                  </dd>
                  <dd className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                    {pillar.note}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Framed gallery photograph */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="border border-hairline bg-linen p-3 shadow-frame sm:p-4">
              <Photo
                src={SHOP.heroImage}
                alt="Ceremonial matcha being poured into a chilled glass on a marble plinth beside a bamboo chasen whisk"
                palette={CUP_PALETTES.matcha}
                priority
                className="aspect-[4/5] w-full"
                imgClassName="object-center"
              />
            </div>
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4 text-[11px] tracking-[0.06em] text-ink-subtle">
              <span>{SHOP.heroCaption}</span>
              <span className="shrink-0 uppercase tracking-[0.18em]">Fig. 01</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
