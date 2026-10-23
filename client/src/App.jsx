import { useCallback, useEffect, useRef, useState } from 'react'
import { shop } from './config'
import { CartProvider } from './context/CartContext'
import { useActiveSection } from './hooks/useActiveSection'

import Header from './components/Header'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import Menu from './components/Menu'
import CustomizeModal from './components/CustomizeModal'
import CartPanel from './components/CartPanel'
import About from './components/About'
import Reviews from './components/Reviews'
import VisitUs from './components/VisitUs'
import SocialContact from './components/SocialContact'
import Footer from './components/Footer'
import { CheckIcon } from './components/Icons'

// Section ids used for the nav highlight (must match config.js `nav`)
const SECTION_IDS = shop.nav.map((item) => item.href.replace('#', ''))

function Site() {
  const [cartOpen, setCartOpen] = useState(false)
  const [customizing, setCustomizing] = useState(null) // the drink being customized
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const activeSection = useActiveSection(SECTION_IDS)

  const openCart = useCallback(() => {
    setCustomizing(null)
    setCartOpen(true)
  }, [])

  const closeCart = useCallback(() => setCartOpen(false), [])
  const closeModal = useCallback(() => setCustomizing(null), [])

  const openCustomize = useCallback((drink) => {
    setCartOpen(false)
    setCustomizing(drink)
  }, [])

  const showToast = useCallback((message) => {
    setToast({ message, id: Date.now() })
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 2600)
  }, [])

  const handleAdded = useCallback(
    (drink) => {
      setCustomizing(null)
      showToast(`${drink.name} added to your order`)
    },
    [showToast],
  )

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  return (
    <div className="min-h-dvh bg-cream">
      {/* Skip link for keyboard + screen-reader users */}
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to the menu
      </a>

      <Header activeSection={activeSection} onOpenCart={openCart} />

      <main>
        <Hero onOpenCart={openCart} />
        <BestSellers onCustomize={openCustomize} />
        <Menu onCustomize={openCustomize} />
        <About />
        <Reviews />
        <VisitUs />
        <SocialContact />
      </main>

      <Footer />

      {/* Modals are only mounted while open, so their focus traps start fresh */}
      {customizing && (
        <CustomizeModal
          key={customizing.id}
          drink={customizing}
          onClose={closeModal}
          onAdded={handleAdded}
        />
      )}

      {cartOpen && <CartPanel onClose={closeCart} />}

      {/* Toast */}
      {toast && (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center px-4"
        >
          <div className="flex animate-rise items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-cream shadow-lift">
            <CheckIcon className="size-4 text-matcha" />
            {toast.message}
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Site />
    </CartProvider>
  )
}
