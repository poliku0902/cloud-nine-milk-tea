import { useEffect, useState } from 'react'
import { shop } from '../config'
import { useCart } from '../context/CartContext'
import { BagIcon, CloseIcon, CloudIcon, MenuIcon } from './Icons'

/** Sticky header: logo, nav links, order button with a cart-count badge, mobile menu. */
export default function Header({ activeSection, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

  // Add a soft shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-milk/20 bg-cream/90 shadow-soft' : 'border-transparent bg-cream/75'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5 rounded-2xl" aria-label={`${shop.name} — back to top`}>
          <span className="grid size-10 place-items-center rounded-2xl bg-cocoa text-cream transition-transform duration-300 group-hover:-rotate-6">
            <CloudIcon className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold text-cocoa">{shop.shortName}</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.24em] text-milk">
              Milk Tea
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {shop.nav.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-cocoa/8 text-cocoa'
                    : 'text-cocoa/70 hover:bg-cocoa/5 hover:text-cocoa'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-sm font-bold text-cream shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#3b2a20] active:translate-y-0 active:scale-95"
          >
            <BagIcon className="size-4" />
            <span className="hidden sm:inline">Order Now</span>
            <span className="sm:hidden">Cart</span>
            {count > 0 && (
              <span
                key={count}
                className="absolute -right-1.5 -top-1.5 grid size-5 animate-pop place-items-center rounded-full bg-blush text-[11px] font-extrabold text-cocoa ring-2 ring-cream"
                aria-label={`${count} items in cart`}
              >
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-milk/25 bg-white/70 text-cocoa transition hover:bg-white active:scale-95 md:hidden"
          >
            {mobileOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav — animates open/closed with max-height */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-milk/15 bg-cream/95 transition-[max-height,opacity] duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {shop.nav.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                  isActive ? 'bg-cocoa/8 text-cocoa' : 'text-cocoa/70 hover:bg-cocoa/5'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
