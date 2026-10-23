import { shop } from '../config'
import { CUP_PALETTES } from '../data/menuData'
import { HeartIcon, LeafIcon, SparkleIcon } from './Icons'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const HIGHLIGHTS = [
  {
    icon: LeafIcon,
    title: "Fresh-brewed tea daily",
    text: "We steep loose-leaf tea every morning and throw out whatever isn't sold by closing.",
    tint: 'bg-matcha/25 text-matcha-deep',
  },
  {
    icon: HeartIcon,
    title: "Real ingredients",
    text: "Real fruit, real taro, real cocoa. No powders, no shortcuts, no artificial aftertaste.",
    tint: 'bg-blush/45 text-blush-deep',
  },
  {
    icon: SparkleIcon,
    title: "Made to your taste",
    text: "Five sugar levels, three ice levels and a mountain of toppings. Your cup, your rules.",
    tint: 'bg-milk/15 text-milk',
  },
]

/** Warm little story + three icon highlights. */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="A tiny shop with a very big sweet tooth"
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-cocoa/70">
            <p>
              Cloud Nine started in 2019 as a two-person counter with one blender, a secondhand tea
              kettle and a stubborn belief that boba should taste like something.
            </p>
            <p>
              Seven years later we&apos;re still on the same corner of Maple Street — still brewing
              in small batches, still shaking every cup by hand, and still arguing about whether
              pearls belong in matcha. (They do. Come try it.)
            </p>
            <p>
              Whether you&apos;re here for a 3pm pick-me-up or a long catch-up with a friend, we
              saved you a seat by the window.
            </p>
          </div>

          <p className="mt-6 font-display text-lg font-semibold text-cocoa">
            — Mia &amp; the Cloud Nine crew
          </p>
          <p className="mt-1 text-sm font-bold text-cocoa/70">Owners &amp; chief pearl testers</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2.5rem] border border-milk/15 bg-white shadow-soft">
            {/* shop photo — falls back to the drawn cup if the file is missing */}
            <Photo
              src={shop.aboutImage}
              alt="The warm, wood-panelled inside of our little Maple Street shop"
              className="aspect-[16/10] w-full object-cover"
              fallback={
                <div className="grid aspect-[16/10] w-full place-items-center bg-gradient-to-br from-blush/40 to-cream-deep">
                  <MilkTeaCup palette={CUP_PALETTES.matcha} className="w-32" label="" />
                </div>
              }
            />

            <div className="p-6 sm:p-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-milk">
                  Since 2019
                </p>
                <p className="mt-1 font-display text-2xl font-semibold leading-tight text-cocoa">
                  A little shop, a lot of tea.
                </p>
                <p className="mt-1 text-sm font-bold text-cocoa/70">Maple Street, Portland</p>
              </div>

              <ul className="mt-6 space-y-3">
                {HIGHLIGHTS.map(({ icon: Icon, title, text, tint }) => (
                  <li key={title} className="flex items-start gap-3.5 rounded-2xl bg-cream/70 p-4">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tint}`}>
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-cocoa">{title}</h3>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-cocoa/70">{text}</p>
                    </div>
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
