import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { SHOP } from '../config'

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2.5 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled || mobileOpen
            ? 'border-b border-hairline bg-paper/92 backdrop-blur-md'
            : 'border-b border-transparent bg-paper/75 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 sm:px-8 lg:h-20">
          {/* Brand mark */}
          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-ink"
            aria-label={`${SHOP.name} — Home`}
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center border border-hairline-strong bg-surface transition-colors duration-300 group-hover:border-ink"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none">
                <path
                  d="M14.2 3.8L12.8 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.8 9H17.2L15.9 18.6C15.7 19.8 14.7 20.6 13.5 20.6H10.5C9.3 20.6 8.3 19.8 8.1 18.6L6.8 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8.8H18.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-medium tracking-[-0.01em] text-ink">
                {SHOP.shortName}
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Milk Tea
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {SHOP.nav.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 text-[13px] tracking-[0.06em] transition-colors ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-ink"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right location link & mobile trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#visit"
              className="hidden items-center gap-1.5 border border-ink/20 px-4 py-2 text-xs tracking-[0.12em] uppercase text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper md:inline-flex"
            >
              <span>{SHOP.neighborhood}</span>
              <ArrowUpRight className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid size-10 place-items-center border border-hairline text-ink transition-colors hover:border-ink md:hidden"
            >
              {mobileOpen ? (
                <X className="size-4" strokeWidth={1.6} />
              ) : (
                <MenuIcon className="size-4" strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-hairline bg-paper md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col px-6 py-5">
                {SHOP.nav.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-hairline py-3.5 font-display text-2xl text-ink last:border-b-0"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-4 text-ink-subtle" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                ))}
                <p className="mt-4 text-xs tracking-[0.12em] uppercase text-ink-subtle">
                  {SHOP.address.line1} · {SHOP.city}
                </p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
