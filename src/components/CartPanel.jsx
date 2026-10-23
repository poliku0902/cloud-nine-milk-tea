import { useRef, useState } from 'react'
import { formatPrice, shop } from '../config'
import { useCart } from '../context/CartContext'
import { paletteFor } from '../data/menuData'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { CheckIcon, CloseIcon, CupIcon, MinusIcon, PlusIcon } from './Icons'
import MilkTeaCup from './MilkTeaCup'
import Photo from './Photo'

/** Slide-in cart panel with quantities, remove buttons and a fake "Place Order". */
export default function CartPanel({ onClose }) {
  const { items, count, subtotal, updateQty, removeItem, clearCart } = useCart()
  const panelRef = useRef(null)
  const [placed, setPlaced] = useState(false)
  const [orderNumber] = useState(() => Math.floor(1000 + Math.random() * 9000))

  useFocusTrap(panelRef, onClose)

  const handlePlaceOrder = () => {
    setPlaced(true)
    clearCart()
  }

  const browseMenu = () => {
    onClose()
    window.setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }, 160)
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 animate-fade-in bg-cocoa/45 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-md animate-slide-in flex-col bg-cream shadow-lift"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-milk/15 px-5 py-4">
          <div>
            <h2 id="cart-title" className="font-display text-xl font-semibold text-cocoa">
              Your order
            </h2>
            <p className="mt-0.5 text-xs font-bold text-cocoa/70">
              {placed
                ? 'Thanks for stopping by'
                : count === 0
                  ? 'Nothing here yet'
                  : `${count} ${count === 1 ? 'drink' : 'drinks'}`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            data-autofocus
            className="grid size-9 place-items-center rounded-full bg-cocoa/5 text-cocoa transition hover:bg-cocoa/10 active:scale-95"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        {placed ? (
          /* ── Confirmation ─────────────────────────────────────── */
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
            <div className="grid size-16 animate-pop place-items-center rounded-full bg-matcha/35 text-matcha-deep">
              <CheckIcon className="size-8" />
            </div>
            <h3 className="mt-1 font-display text-2xl font-semibold text-cocoa">Order placed!</h3>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa/70">
              Thanks for sipping with us! We&apos;re shaking your drinks now — they&apos;ll be ready
              at the counter in about 10 minutes.
            </p>
            <p className="rounded-full bg-cream-deep px-3 py-1 text-xs font-extrabold text-cocoa/70">
              Order #{orderNumber}
            </p>
            <p className="text-xs font-bold text-cocoa/60">{shop.orderNote}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 rounded-full bg-cocoa px-6 py-3 text-sm font-bold text-cream transition hover:bg-[#3b2a20] active:scale-95"
            >
              Back to browsing
            </button>
          </div>
        ) : items.length === 0 ? (
          /* ── Empty state ──────────────────────────────────────── */
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
            <div className="grid size-16 place-items-center rounded-full bg-cream-deep text-milk">
              <CupIcon className="size-8" />
            </div>
            <h3 className="font-display text-xl font-semibold text-cocoa">Your cup is empty</h3>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa/70">
              Pick a drink, choose your sweetness, and we&apos;ll take it from there.
            </p>
            <button
              type="button"
              onClick={browseMenu}
              className="mt-2 rounded-full bg-cocoa px-6 py-3 text-sm font-bold text-cream transition hover:bg-[#3b2a20] active:scale-95"
            >
              Browse the menu
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {items.map((line) => (
                <li
                  key={line.lineId}
                  className="flex gap-3 rounded-2xl border border-milk/15 bg-white/75 p-3"
                >
                  <Photo
                    src={line.image}
                    alt=""
                    className="size-14 shrink-0 rounded-xl object-cover"
                    fallback={
                      <MilkTeaCup
                        palette={paletteFor(line.color)}
                        className="w-9"
                        showSteam={false}
                        label=""
                      />
                    }
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold leading-snug text-cocoa">{line.name}</h3>
                      <button
                        type="button"
                        onClick={() => removeItem(line.lineId)}
                        aria-label={`Remove ${line.name} from your order`}
                        className="grid size-6 shrink-0 place-items-center rounded-full text-cocoa/60 transition hover:bg-cocoa/5 hover:text-cocoa active:scale-95"
                      >
                        <CloseIcon className="size-3.5" />
                      </button>
                    </div>

                    <p className="mt-0.5 text-[12px] font-bold leading-relaxed text-cocoa/70">
                      {line.size} · {line.sugar} sugar · {line.ice}
                      {line.addOns.length > 0 && ` · ${line.addOns.map((a) => a.name).join(', ')}`}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-0.5 rounded-full border border-milk/25 bg-cream p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQty(line.lineId, -1)}
                          aria-label={`Decrease quantity of ${line.name}`}
                          className="grid size-7 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 active:scale-95"
                        >
                          <MinusIcon className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-extrabold text-cocoa">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(line.lineId, 1)}
                          aria-label={`Increase quantity of ${line.name}`}
                          className="grid size-7 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 active:scale-95"
                        >
                          <PlusIcon className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-extrabold text-cocoa">
                        {formatPrice(line.unitPrice * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-milk/15 bg-cream px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cocoa/70">Subtotal</span>
                <span className="font-display text-2xl font-semibold text-cocoa" aria-live="polite">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-bold text-cocoa/70">{shop.orderNote}</p>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-3 w-full rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-cream shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#3b2a20] active:translate-y-0 active:scale-[0.99]"
              >
                Place Order
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-2 w-full rounded-full py-2 text-xs font-bold text-cocoa/60 transition hover:text-cocoa"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
