import { useMemo, useRef, useState } from 'react'
import { ADD_ONS, ICE_LEVELS, SIZES, SUGAR_LEVELS } from '../data/menuData'
import { formatPrice } from '../config'
import { useCart } from '../context/CartContext'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { CheckIcon, CloseIcon, MinusIcon, PlusIcon } from './Icons'

/**
 * Customize modal: size, sugar, ice, add-ons and quantity.
 * The price updates live; Esc closes it and focus stays inside.
 */
export default function CustomizeModal({ drink, onClose, onAdded }) {
  const { addItem } = useCart()
  const dialogRef = useRef(null)
  useFocusTrap(dialogRef, onClose)

  const [size, setSize] = useState('Medium')
  const [sugar, setSugar] = useState('50%')
  const [ice, setIce] = useState('Normal')
  const [addOnIds, setAddOnIds] = useState([])
  const [qty, setQty] = useState(1)

  const selectedAddOns = useMemo(
    () => ADD_ONS.filter((addOn) => addOnIds.includes(addOn.id)),
    [addOnIds],
  )

  // Live price: base + size upcharge + add-ons, multiplied by quantity
  const unitPrice = useMemo(() => {
    const sizeExtra = SIZES.find((option) => option.id === size)?.extra ?? 0
    return selectedAddOns.reduce((sum, addOn) => sum + addOn.price, drink.price + sizeExtra)
  }, [drink.price, size, selectedAddOns])

  const total = unitPrice * qty

  const toggleAddOn = (id) => {
    setAddOnIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleAdd = () => {
    addItem({ drink, size, sugar, ice, addOns: selectedAddOns, qty, unitPrice })
    onAdded(drink)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 animate-fade-in bg-cocoa/45 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="customize-title"
        tabIndex={-1}
        className="relative flex max-h-[92dvh] w-full animate-rise flex-col overflow-hidden rounded-t-[2rem] bg-cream shadow-lift sm:max-w-lg sm:rounded-[2rem]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-milk/15 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-milk">
              Make it yours
            </p>
            <h2 id="customize-title" className="mt-1 font-display text-xl font-semibold text-cocoa">
              {drink.name}
            </h2>
            <p className="mt-0.5 text-xs font-bold text-cocoa/70">
              Base {formatPrice(drink.price)} · {drink.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close customization"
            data-autofocus
            className="grid size-9 shrink-0 place-items-center rounded-full bg-cocoa/5 text-cocoa transition hover:bg-cocoa/10 active:scale-95"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        {/* Options */}
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
          {/* Size */}
          <fieldset>
            <legend className="text-sm font-extrabold text-cocoa">Size</legend>
            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {SIZES.map((option) => {
                const isActive = size === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSize(option.id)}
                    className={`rounded-2xl border-2 px-4 py-3 text-left transition duration-200 active:scale-[0.98] ${
                      isActive
                        ? 'border-cocoa bg-cocoa text-cream'
                        : 'border-milk/25 bg-white text-cocoa hover:border-milk/50'
                    }`}
                  >
                    <span className="block text-sm font-bold">{option.label}</span>
                    <span className={`text-[11px] font-bold ${isActive ? 'text-cream/70' : 'text-cocoa/70'}`}>
                      {option.note} · {option.extra ? `+${formatPrice(option.extra)}` : 'no extra'}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Sugar */}
          <fieldset>
            <legend className="text-sm font-extrabold text-cocoa">Sugar level</legend>
            <div className="mt-2.5 grid grid-cols-5 gap-2">
              {SUGAR_LEVELS.map((level) => {
                const isActive = sugar === level
                return (
                  <button
                    key={level}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSugar(level)}
                    className={`rounded-full border px-1 py-2 text-sm font-bold transition duration-200 active:scale-95 ${
                      isActive
                        ? 'border-cocoa bg-cocoa text-cream'
                        : 'border-milk/25 bg-white text-cocoa/70 hover:border-milk/50 hover:text-cocoa'
                    }`}
                  >
                    {level}
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Ice */}
          <fieldset>
            <legend className="text-sm font-extrabold text-cocoa">Ice level</legend>
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              {ICE_LEVELS.map((level) => {
                const isActive = ice === level.id
                return (
                  <button
                    key={level.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setIce(level.id)}
                    className={`rounded-full border px-3 py-2 text-sm font-bold transition duration-200 active:scale-95 ${
                      isActive
                        ? 'border-cocoa bg-cocoa text-cream'
                        : 'border-milk/25 bg-white text-cocoa/70 hover:border-milk/50 hover:text-cocoa'
                    }`}
                  >
                    {level.label}
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Add-ons */}
          <fieldset>
            <legend className="text-sm font-extrabold text-cocoa">
              Add-ons <span className="font-bold text-cocoa/60">(optional)</span>
            </legend>
            <div className="mt-2.5 space-y-2">
              {ADD_ONS.map((addOn) => {
                const checked = addOnIds.includes(addOn.id)
                return (
                  <label
                    key={addOn.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2.5 transition ${
                      checked ? 'border-cocoa/40 bg-white' : 'border-milk/20 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={checked}
                      onChange={() => toggleAddOn(addOn.id)}
                    />
                    <span className="grid size-5 shrink-0 place-items-center rounded-md border-2 border-milk/50 text-transparent transition peer-checked:border-cocoa peer-checked:bg-cocoa peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cocoa">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="flex-1 text-sm font-bold text-cocoa">{addOn.name}</span>
                    <span className="text-xs font-extrabold text-cocoa/70">+{formatPrice(addOn.price)}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        </div>

        {/* Footer: quantity + live total */}
        <div className="border-t border-milk/15 bg-cream/95 px-5 py-3.5 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-1 rounded-full border border-milk/25 bg-white p-1">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                disabled={qty <= 1}
                aria-label="Decrease quantity"
                className="grid size-8 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 disabled:opacity-30 active:scale-95"
              >
                <MinusIcon className="size-4" />
              </button>
              <span className="w-7 text-center text-sm font-extrabold text-cocoa" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((value) => value + 1)}
                aria-label="Increase quantity"
                className="grid size-8 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 active:scale-95"
              >
                <PlusIcon className="size-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-cocoa/60">Total</p>
              <p className="font-display text-xl font-semibold text-cocoa" aria-live="polite">
                {formatPrice(total)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 w-full rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-cream shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#3b2a20] active:translate-y-0 active:scale-[0.99]"
          >
            Add to Order · {formatPrice(total)}
          </button>
        </div>
      </div>
    </div>
  )
}
