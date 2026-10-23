import { shop } from '../config'
import { ArrowRightIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/** Address, hours, contact details and a styled map placeholder. */
export default function VisitUs() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address.full)}`

  return (
    <section id="visit" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Visit us"
            title="Come say hi (and stay a while)"
            subtitle="We're the little shop with the pink awning, right across from the bookshop."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* ── Details ──────────────────────────────────────────── */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-5 rounded-[2rem] border border-milk/15 bg-white p-6 shadow-soft sm:p-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush/45 text-blush-deep">
                  <MapPinIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-cocoa">Find us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cocoa/70">
                    {shop.address.line1}
                    <br />
                    {shop.address.line2}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-matcha/25 text-matcha-deep">
                  <ClockIcon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold text-cocoa">Opening hours</h3>
                  <table className="mt-2 w-full text-sm">
                    <caption className="sr-only">Opening hours for {shop.name}</caption>
                    <tbody>
                      {shop.hours.map((row) => (
                        <tr key={row.days} className="border-b border-dashed border-milk/25 last:border-0">
                          <th scope="row" className="py-2 pr-3 text-left font-bold text-cocoa/70">
                            {row.days}
                          </th>
                          <td className="py-2 text-right font-bold text-cocoa/70">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2 text-[11px] font-bold text-cocoa/60">{shop.hoursNote}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-milk/15 text-milk">
                  <PhoneIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-cocoa">Call or email</h3>
                  <div className="mt-1 space-y-1">
                    <a
                      href={shop.phoneHref}
                      className="block text-sm font-bold text-cocoa/70 underline-offset-4 transition hover:text-cocoa hover:underline"
                    >
                      {shop.phone}
                    </a>
                    <a
                      href={`mailto:${shop.email}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-cocoa/70 underline-offset-4 transition hover:text-cocoa hover:underline"
                    >
                      <MailIcon className="size-3.5" />
                      {shop.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Little extras, fills the card nicely */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-dashed border-milk/25 pt-4">
                <span className="rounded-full bg-cream-deep px-3 py-1.5 text-[11px] font-extrabold text-cocoa/70">
                  Free parking behind the shop
                </span>
                <span className="rounded-full bg-cream-deep px-3 py-1.5 text-[11px] font-extrabold text-cocoa/70">
                  Dog-friendly patio
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Map placeholder ──────────────────────────────────── */}
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-milk/20 bg-[#EFE2D1] shadow-soft">
                {/* drawn map */}
                <svg
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                >
                  <rect width="400" height="300" fill="#EFE2D1" />
                  <rect x="18" y="24" width="120" height="86" rx="8" fill="#E4D4BF" />
                  <rect x="252" y="18" width="132" height="92" rx="8" fill="#E4D4BF" />
                  <rect x="26" y="196" width="112" height="84" rx="8" fill="#DCE7CF" />
                  <rect x="272" y="200" width="112" height="80" rx="8" fill="#E4D4BF" />
                  <rect x="170" y="200" width="70" height="52" rx="6" fill="#E4D4BF" />

                  {/* roads */}
                  <path d="M0 150h400" stroke="#FFF8F0" strokeWidth="30" />
                  <path d="M162 0v300" stroke="#FFF8F0" strokeWidth="26" />
                  <path d="M0 150h400" stroke="#D9C0A8" strokeWidth="2" strokeDasharray="10 12" />
                  <path d="M162 0v300" stroke="#D9C0A8" strokeWidth="2" strokeDasharray="10 12" />

                  {/* little trees in the park */}
                  <g fill="#9CAF88" opacity="0.65">
                    <circle cx="52" cy="226" r="9" />
                    <circle cx="78" cy="252" r="11" />
                    <circle cx="104" cy="222" r="8" />
                    <circle cx="116" cy="258" r="7" />
                  </g>
                </svg>

                {/* street labels */}
                <span className="absolute left-[35%] top-[8%] text-[10px] font-extrabold uppercase tracking-[0.18em] text-cocoa/35" aria-hidden="true">
                  5th Ave
                </span>
                <span className="absolute right-[5%] top-[53%] text-[10px] font-extrabold uppercase tracking-[0.18em] text-cocoa/35" aria-hidden="true">
                  Maple St
                </span>

                {/* pin */}
                <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-2 rounded-full border-4 border-blush/45"
                  />
                  <span className="relative grid size-12 place-items-center rounded-full bg-cocoa text-cream shadow-lift">
                    <MapPinIcon className="size-6" />
                  </span>
                </div>

                {/* label chip */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-xl bg-cream/95 px-3 py-2 text-xs font-extrabold text-cocoa shadow-soft">
                  <span className="size-2 rounded-full bg-cocoa/60" aria-hidden="true" />
                  {shop.shortName} · {shop.address.line1}
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa/15 bg-white px-5 py-3 text-sm font-bold text-cocoa transition hover:-translate-y-0.5 hover:border-cocoa/30 active:translate-y-0 active:scale-95"
              >
                Open in Google Maps
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
