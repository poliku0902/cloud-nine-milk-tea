import { shop, formatPrice } from '../config'
import { ArrowRightIcon, CloudIcon, SparkleIcon, StarIcon } from './Icons'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'
import { CUP_PALETTES } from '../data/menuData'

/** Hero — headline, tagline, two buttons, and the drawn milk tea cup. */
export default function Hero({ onOpenCart }) {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      {/* Soft background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-28 size-80 rounded-full bg-blush/35 blur-3xl sm:size-[26rem]" />
        <div className="absolute -left-32 top-40 size-72 rounded-full bg-matcha/25 blur-3xl sm:size-96" />
        <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-cream-deep blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-6 sm:px-6 sm:pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pb-24 md:pt-16">
        {/* ── Copy ─────────────────────────────────────────────── */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-milk/25 bg-white/70 px-3.5 py-1.5 text-xs font-bold text-cocoa shadow-soft">
            <SparkleIcon className="size-3.5 text-blush-deep" />
            {shop.heroBadge}
          </span>

          <h1 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-cocoa sm:mt-5 sm:text-5xl lg:text-[4.25rem]">
            Sip Happy.
            <br />
            Sip{" "}
            <span className="relative inline-block text-milk">
              Cloud Nine.
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-2 w-full text-blush"
              >
                <path
                  d="M3 8.5c46-5 98-6 194-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cocoa/70 sm:mt-6 sm:text-lg">
            Small-batch tea, chewy pearls and a little bit of magic — shaken by hand in our cozy
            corner shop. Come for the boba, stay for the good mood.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-cream shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#3b2a20] hover:shadow-lift active:translate-y-0 active:scale-95"
            >
              View Menu
              <ArrowRightIcon className="size-4" />
            </a>
            <button
              type="button"
              onClick={onOpenCart}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa/15 bg-white/70 px-6 py-3.5 text-sm font-bold text-cocoa transition duration-200 hover:-translate-y-0.5 hover:border-cocoa/30 hover:bg-white active:translate-y-0 active:scale-95"
            >
              Order Now
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3 sm:mt-8">
            <div className="flex -space-x-2" aria-hidden="true">
              {['bg-blush', 'bg-matcha', 'bg-milk-soft', 'bg-cream-deep'].map((tone) => (
                <span
                  key={tone}
                  className={`grid size-8 place-items-center rounded-full ring-2 ring-cream ${tone}`}
                >
                  <span className="size-2.5 rounded-full bg-cocoa/55" />
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-milk" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold text-cocoa/70">
                {shop.rating.score} from {shop.rating.count} happy sippers
              </p>
            </div>
          </div>
        </div>

        {/* ── Cup illustration ─────────────────────────────────── */}
        <div className="relative mx-auto w-full max-w-[18rem] md:max-w-[19rem] lg:max-w-[24rem]">
          {/* backdrop cards */}
          <div
            aria-hidden="true"
            className="absolute inset-x-3 bottom-1 top-6 rotate-3 rounded-[3rem] bg-gradient-to-b from-blush/60 to-cream-deep"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-5 top-12 -rotate-2 rounded-[3rem] bg-white/55"
          />

          {/* floating boba pearls */}
          <span aria-hidden="true" className="pearl absolute -left-10 top-20 z-10 size-5 animate-float" />
          <span
            aria-hidden="true"
            className="pearl absolute -right-6 bottom-12 z-10 size-4 animate-float-slow"
            style={{ animationDelay: '-2s' }}
          />
          <span
            aria-hidden="true"
            className="pearl absolute -left-8 bottom-32 z-10 size-3 animate-float"
            style={{ animationDelay: '-4s' }}
          />
          <span
            aria-hidden="true"
            className="pearl absolute -bottom-5 left-1/3 z-10 size-4 animate-float-slow"
            style={{ animationDelay: '-1s' }}
          />

          {/* hero photo */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-cream-deep shadow-lift">
            <Photo
              src={shop.heroImage}
              alt="Three freshly shaken Cloud Nine drinks on a wooden board"
              loading="eager"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover sepia-[0.12] saturate-[1.05]"
              fallback={
                <div className="grid aspect-[4/5] w-full place-items-center bg-gradient-to-b from-blush/50 to-cream-deep">
                  <MilkTeaCup palette={CUP_PALETTES.brownsugar} className="w-3/4" label="" />
                </div>
              }
            />
          </div>

          {/* price sticker */}
          <div className="absolute left-0 top-1/3 -rotate-6 rounded-2xl border border-milk/15 bg-white px-3 py-1.5 shadow-soft sm:-left-6 sm:px-3.5 sm:py-2">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-cocoa/60">from</p>
            <p className="font-display text-lg font-semibold leading-none text-cocoa sm:text-xl">
              {formatPrice(5.5)}
            </p>
          </div>

          {/* little round badge */}
          <div className="absolute -right-1 top-6 hidden size-20 animate-wiggle place-items-center rounded-full border border-milk/20 bg-cream text-center shadow-soft sm:-right-3 sm:grid">
            <div>
              <p className="text-[9px] font-extrabold uppercase leading-tight tracking-[0.14em] text-milk">
                Hand
                <br />
                shaken
              </p>
              <CloudIcon className="mx-auto mt-1 size-3.5 text-blush-deep" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
