import { shop } from '../config'
import { CloudIcon, FacebookIcon, HeartIcon, InstagramIcon, TikTokIcon } from './Icons'

/** Footer: logo, quick links, contact details and copyright. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-cocoa text-cream/75">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label={`${shop.name} — back to top`}>
              <span className="grid size-10 place-items-center rounded-2xl bg-cream text-cocoa">
                <CloudIcon className="size-5" />
              </span>
              <span className="font-display text-lg font-semibold text-cream">{shop.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Small-batch tea, chewy pearls and a little bit of magic — shaken by hand on Maple
              Street since 2019.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={shop.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label={`${shop.name} on Facebook`}
                className="grid size-9 place-items-center rounded-full bg-cream/10 text-cream/80 transition hover:bg-cream/20 hover:text-cream active:scale-95"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={shop.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${shop.name} on Instagram`}
                className="grid size-9 place-items-center rounded-full bg-cream/10 text-cream/80 transition hover:bg-cream/20 hover:text-cream active:scale-95"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={shop.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label={`${shop.name} on TikTok`}
                className="grid size-9 place-items-center rounded-full bg-cream/10 text-cream/80 transition hover:bg-cream/20 hover:text-cream active:scale-95"
              >
                <TikTokIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-cream/60">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {shop.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-bold text-cream/65 transition hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-cream/60">
              Come by
            </h2>
            <address className="mt-4 space-y-1 text-sm font-bold not-italic leading-relaxed text-cream/65">
              <p>{shop.address.line1}</p>
              <p>{shop.address.line2}</p>
            </address>
            <p className="mt-3 text-sm font-bold text-cream/65">
              <a href={shop.phoneHref} className="transition hover:text-cream">
                {shop.phone}
              </a>
            </p>
            <p className="mt-1 text-sm font-bold text-cream/65">
              <a href={`mailto:${shop.email}`} className="transition hover:text-cream">
                {shop.email}
              </a>
            </p>
            <p className="mt-3 text-xs font-bold text-cream/60">
              {shop.hours[0].days}: {shop.hours[0].time}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs font-bold text-cream/60 sm:flex-row">
          <p>
            © {year} {shop.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <HeartIcon className="size-3.5 text-blush" aria-hidden="true" /> and a lot of
            boba.
          </p>
        </div>
      </div>
    </footer>
  )
}
