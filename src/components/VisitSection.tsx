import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { googleMapsUrl, SHOP } from '../config'
import Reveal from './Reveal'

export default function VisitSection() {
  const mapsHref = googleMapsUrl(SHOP.address.full)

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-oolong">
                04 — Location &amp; Hours
              </p>
              <h2
                id="visit-heading"
                className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-ink sm:text-[2.85rem]"
              >
                Visit the tea bar
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Pull up a stool along the cedar counter or linger on the shaded
              courtyard patio. Walk-in only, poured fresh to order.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-12 lg:gap-16">
          {/* Structured address, hours, contact */}
          <Reveal className="md:col-span-5">
            <div className="divide-y divide-hairline border-b border-hairline">
              {/* Address */}
              <div className="pb-7">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-subtle">
                  <MapPin className="size-3.5 text-oolong" strokeWidth={1.6} aria-hidden="true" />
                  <span>Address</span>
                </div>
                <address className="mt-3 not-italic">
                  <p className="font-display text-2xl text-ink">{SHOP.address.line1}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{SHOP.address.line2}</p>
                </address>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 border-b border-ink/35 pb-0.5 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-oolong hover:text-oolong"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
                </a>
              </div>

              {/* Hours */}
              <div className="py-7">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-subtle">
                  <Clock className="size-3.5 text-oolong" strokeWidth={1.6} aria-hidden="true" />
                  <span>Opening Hours</span>
                </div>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {SHOP.hours.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <dt className="text-ink-muted">{row.days}</dt>
                      <dd className="font-medium text-ink tabular-nums">
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
                  {SHOP.hoursNote}
                </p>
              </div>

              {/* Contact */}
              <div className="py-7">
                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href={SHOP.phoneHref}
                    className="inline-flex items-center gap-3 text-ink transition-colors hover:text-oolong"
                  >
                    <Phone className="size-3.5 text-oolong" strokeWidth={1.6} aria-hidden="true" />
                    <span className="tabular-nums">{SHOP.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SHOP.email}`}
                    className="inline-flex items-center gap-3 text-ink transition-colors hover:text-oolong"
                  >
                    <Mail className="size-3.5 text-oolong" strokeWidth={1.6} aria-hidden="true" />
                    <span>{SHOP.email}</span>
                  </a>
                </div>
                <p className="mt-5 text-xs tracking-[0.04em] text-ink-subtle">
                  Courtyard seating · Bicycle rack behind shop · Dog-friendly patio
                </p>
              </div>
            </div>
          </Reveal>

          {/* Minimalist architectural street map */}
          <Reveal delay={0.1} className="md:col-span-7">
            <figure>
              <div className="border border-hairline bg-linen p-3 shadow-frame sm:p-4">
                <div className="relative aspect-[16/11] w-full overflow-hidden border border-hairline bg-[#EAE2D6]">
                  <svg
                    viewBox="0 0 640 440"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    aria-label={`Stylized neighborhood street map showing ${SHOP.name} at ${SHOP.address.full}`}
                    className="h-full w-full"
                    fill="none"
                  >
                    {/* Base paper ground */}
                    <rect width="640" height="440" fill="#ECE4D8" />

                    {/* Architectural city blocks */}
                    <rect x="28" y="24" width="194" height="156" fill="#E2D8C8" />
                    <rect x="268" y="24" width="174" height="156" fill="#E2D8C8" />
                    <rect x="482" y="24" width="134" height="156" fill="#E2D8C8" />

                    {/* Corner botanical square / park */}
                    <rect x="28" y="226" width="194" height="186" fill="#DCE3D5" />
                    <circle cx="82" cy="284" r="22" fill="#C6D2BC" />
                    <circle cx="122" cy="316" r="28" fill="#B9C8AE" />
                    <circle cx="164" cy="276" r="18" fill="#C6D2BC" />
                    <circle cx="96" cy="356" r="19" fill="#C6D2BC" />
                    <path
                      d="M54 384L198 250"
                      stroke="#ECE4D8"
                      strokeWidth="3"
                      strokeDasharray="6 6"
                    />

                    {/* Lower right city blocks */}
                    <rect x="268" y="226" width="174" height="186" fill="#E2D8C8" />
                    <rect x="482" y="226" width="134" height="186" fill="#E2D8C8" />

                    {/* Building footprint outlines for subtle architectural texture */}
                    <rect
                      x="286"
                      y="244"
                      width="72"
                      height="68"
                      stroke="#CFC3B4"
                      strokeWidth="1.2"
                    />
                    <rect
                      x="368"
                      y="244"
                      width="56"
                      height="112"
                      stroke="#CFC3B4"
                      strokeWidth="1.2"
                    />
                    <rect
                      x="286"
                      y="44"
                      width="136"
                      height="116"
                      stroke="#CFC3B4"
                      strokeWidth="1.2"
                    />

                    {/* Primary street corridors */}
                    <rect x="0" y="180" width="640" height="46" fill="#FAF7F2" />
                    <rect x="222" y="0" width="46" height="440" fill="#FAF7F2" />
                    <rect x="442" y="0" width="40" height="440" fill="#FAF7F2" />

                    {/* Quiet center hairlines */}
                    <line
                      x1="0"
                      y1="203"
                      x2="640"
                      y2="203"
                      stroke="#DFD5C7"
                      strokeWidth="1"
                      strokeDasharray="10 10"
                    />
                    <line
                      x1="245"
                      y1="0"
                      x2="245"
                      y2="440"
                      stroke="#DFD5C7"
                      strokeWidth="1"
                      strokeDasharray="10 10"
                    />

                    {/* Street labels */}
                    <text
                      x="505"
                      y="207"
                      fill="#594E45"
                      fontSize="11"
                      fontFamily="DM Sans, sans-serif"
                      letterSpacing="2.4"
                    >
                      SW MAPLE ST
                    </text>
                    <text
                      x="249"
                      y="78"
                      fill="#594E45"
                      fontSize="11"
                      fontFamily="DM Sans, sans-serif"
                      letterSpacing="2.4"
                      transform="rotate(-90 249 78)"
                    >
                      SW 5TH AVE
                    </text>
                    <text
                      x="64"
                      y="252"
                      fill="#465A3F"
                      fontSize="10"
                      fontFamily="DM Sans, sans-serif"
                      letterSpacing="2"
                    >
                      MAPLE SQUARE
                    </text>

                    {/* Cloud Nine location marker */}
                    <g transform="translate(292 178)">
                      <circle r="34" fill="#7F5534" fillOpacity="0.12" />
                      <circle r="18" fill="#1F1A17" />
                      <circle r="4.5" fill="#FAF7F2" />
                    </g>

                    {/* Connector hairline */}
                    <line
                      x1="310"
                      y1="168"
                      x2="332"
                      y2="148"
                      stroke="#1F1A17"
                      strokeOpacity="0.45"
                      strokeWidth="1.2"
                    />

                    {/* Clean map callout tag */}
                    <g transform="translate(332 116)">
                      <rect
                        width="180"
                        height="50"
                        fill="#FAF7F2"
                        stroke="#CFC3B4"
                        strokeWidth="1.2"
                      />
                      <text
                        x="14"
                        y="22"
                        fill="#1F1A17"
                        fontSize="14"
                        fontFamily="Cormorant Garamond, Georgia, serif"
                        fontWeight="600"
                      >
                        Cloud Nine Milk Tea
                      </text>
                      <text
                        x="14"
                        y="39"
                        fill="#594E45"
                        fontSize="10"
                        fontFamily="DM Sans, sans-serif"
                        letterSpacing="0.8"
                      >
                        128 Maple St · Suite 4
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              <figcaption className="mt-3.5 flex flex-wrap items-baseline justify-between gap-3 text-[11px] tracking-[0.06em] text-ink-subtle tabular-nums">
                <span>Corner of SW Maple Street &amp; SW 5th Avenue</span>
                <span>45.5202° N, 122.6765° W · Portland</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
