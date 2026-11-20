import { useState } from 'react'
import { SHOP } from '../config'
import { CUP_PALETTES, type CupPaletteKey } from '../data/menu'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'
import Reveal from './Reveal'

const CRAFT_PILLARS = [
  {
    index: '01',
    title: 'Single-Estate Leaves',
    body: 'We brew Alishan oolong, Assam black, and Fujian jasmine in small batches every morning — never concentrates, never powders, never yesterday’s steep.',
  },
  {
    index: '02',
    title: 'Simmered Every Two Hours',
    body: 'Tapioca pearls rest in warm Okinawa dark brown sugar syrup in small copper pots so every scoop is glossy, tender, and fragrant.',
  },
  {
    index: '03',
    title: 'Whisked & Layered to Order',
    body: 'Ceremonial Uji matcha is sifted and hand-whisked with a bamboo chasen, and our salted cheese cloud is whipped cold each afternoon.',
  },
] as const

interface TastingProfile {
  readonly key: CupPaletteKey
  readonly name: string
  readonly swatch: string
  readonly topLayer: string
  readonly middleLayer: string
  readonly baseLayer: string
}

const CUP_PROFILES: readonly TastingProfile[] = [
  {
    key: 'brownsugar',
    name: 'Brown Sugar',
    swatch: '#A67249',
    topLayer: 'Lightly salted cream float',
    middleLayer: 'Cold pasture milk & dark cane glaze',
    baseLayer: 'Warm Okinawa brown sugar pearls',
  },
  {
    key: 'matcha',
    name: 'Uji Matcha',
    swatch: '#5F744F',
    topLayer: 'Whipped mascarpone cheese cloud',
    middleLayer: 'Stone-ground ceremonial matcha & oat milk',
    baseLayer: 'Crystal boba or warm pearls',
  },
  {
    key: 'taro',
    name: 'Taro Cloud',
    swatch: '#9B82B3',
    topLayer: 'Sea-salt cream finish',
    middleLayer: 'Freshly steamed purple taro purée',
    baseLayer: 'Silky egg pudding or pearls',
  },
  {
    key: 'oolong',
    name: 'Roasted Oolong',
    swatch: '#9E6E46',
    topLayer: 'Dense house salted cheese cap',
    middleLayer: 'Charcoal-roasted high-mountain oolong',
    baseLayer: 'Clean finish, no pearls required',
  },
]

export default function StorySection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const profile = CUP_PROFILES[selectedIndex] ?? CUP_PROFILES[0]!

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="border-y border-hairline bg-linen/55 py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Editorial narrative + interior photo */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 lg:gap-16">
          <Reveal className="md:col-span-6">
            <figure>
              <div className="border border-hairline bg-surface p-3 shadow-frame">
                <Photo
                  src={SHOP.aboutImage}
                  alt="Warm wood-paneled interior of Cloud Nine Milk Tea with sunlit tables and botanical accents"
                  palette={CUP_PALETTES.classic}
                  className="aspect-[4/3] w-full"
                />
              </div>
              <figcaption className="mt-3 text-[11px] tracking-[0.06em] text-ink-subtle">
                {SHOP.aboutCaption}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-oolong">
              03 — Our Story
            </p>
            <h2
              id="story-heading"
              className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-ink sm:text-[2.85rem]"
            >
              Steeped with patience,{' '}
              <em className="font-normal italic text-oolong">served without rush.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-muted">
              Cloud Nine began as a simple counter on the corner of Maple &amp;
              5th with one belief: milk tea deserves the same quiet respect as
              specialty coffee and fine loose-leaf tea.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-muted">
              We source single-harvest leaves directly from family gardens in
              Taiwan and Uji, steam real taro root in-house, and balance every
              recipe so the aroma of roasted tea lingers long after the last
              sip.
            </p>
            <blockquote className="mt-8 border-l border-oolong pl-5 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
              “Tea first, milk second, sweetness only as a quiet harmony.”
            </blockquote>
          </Reveal>
        </div>

        {/* Craft pillars + Upgraded MilkTeaCup anatomy diagram */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 border-t border-hairline pt-16 md:grid-cols-12 lg:gap-14">
          <div className="md:col-span-6 lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-subtle">
                House Craft
              </p>
            </Reveal>
            <ol className="mt-6 divide-y divide-hairline border-y border-hairline">
              {CRAFT_PILLARS.map((pillar, idx) => (
                <Reveal key={pillar.index} delay={idx * 0.06}>
                  <li className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-4">
                    <span className="text-xs font-medium tracking-[0.18em] text-oolong tabular-nums sm:col-span-2 sm:pt-1">
                      {pillar.index}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-2xl font-normal text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1} className="md:col-span-6 lg:col-span-5">
            <div className="border border-hairline bg-paper p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-subtle">
                    Anatomy of a Pour
                  </p>
                  <p className="mt-0.5 font-display text-2xl text-ink">
                    {profile.name}
                  </p>
                </div>

                {/* Tactile tea-tint swatches */}
                <div
                  role="group"
                  aria-label="Preview cup flavor palette"
                  className="flex items-center gap-2"
                >
                  {CUP_PROFILES.map((item, idx) => {
                    const active = idx === selectedIndex
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        aria-label={`Preview ${item.name} layers`}
                        aria-pressed={active}
                        className={`grid size-6 cursor-pointer place-items-center rounded-full border transition-all ${
                          active
                            ? 'scale-110 border-ink'
                            : 'border-transparent hover:border-hairline-strong'
                        }`}
                      >
                        <span
                          className="size-4 rounded-full"
                          style={{ backgroundColor: item.swatch }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12 items-center gap-4">
                <div className="col-span-5 flex justify-center">
                  <MilkTeaCup
                    palette={CUP_PALETTES[profile.key]}
                    showSteam
                    className="h-56 w-auto sm:h-60"
                    label={`Illustrated layers of ${profile.name} milk tea`}
                  />
                </div>

                <dl className="col-span-7 space-y-4 text-left">
                  <div className="border-l border-hairline-strong pl-3.5">
                    <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-oolong">
                      Crown
                    </dt>
                    <dd className="mt-0.5 text-[13px] leading-snug text-ink">
                      {profile.topLayer}
                    </dd>
                  </div>
                  <div className="border-l border-hairline-strong pl-3.5">
                    <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-oolong">
                      Infusion
                    </dt>
                    <dd className="mt-0.5 text-[13px] leading-snug text-ink">
                      {profile.middleLayer}
                    </dd>
                  </div>
                  <div className="border-l border-hairline-strong pl-3.5">
                    <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-oolong">
                      Base
                    </dt>
                    <dd className="mt-0.5 text-[13px] leading-snug text-ink">
                      {profile.baseLayer}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
