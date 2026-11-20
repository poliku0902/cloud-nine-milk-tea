import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { SHOP } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-roast text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-block">
              <span className="font-display text-3xl font-normal tracking-[-0.01em] text-paper">
                {SHOP.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-roast-muted">
              {SHOP.tagline} Whole-leaf teas, hand-simmered pearls, and
              ceremonial matcha on the corner of {SHOP.neighborhood}.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-roast-muted/80">
              {SHOP.address.line1} · {SHOP.city}
            </p>
          </div>

          {/* Explore column */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-roast-muted/75">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SHOP.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-paper/85 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-roast-muted/75">
              Connect · {SHOP.handle}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
              {SHOP.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-paper/85 transition-colors hover:text-paper"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-60" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-roast-muted">
              Open daily from 11:00 AM (Noon Sundays).
              <br />
              <a
                href={`mailto:${SHOP.email}`}
                className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-paper"
              >
                {SHOP.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom hairline bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-7 text-xs text-roast-muted sm:flex-row sm:items-center">
          <p>
            © {year} {SHOP.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 uppercase tracking-[0.18em] text-paper/80 transition-colors hover:text-paper"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
