import { createContext, useCallback, useContext, useMemo, useState } from 'react'

/* Cart state lives here — in React state only (no localStorage, no backend). */

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  /**
   * Add a drink. Two identical configurations merge into one line.
   * `addOns` is an array of { id, name, price }.
   */
  const addItem = useCallback(({ drink, size, sugar, ice, addOns, qty, unitPrice }) => {
    const signature = [drink.id, size, sugar, ice, addOns.map((a) => a.id).sort().join('+')].join('|')

    setItems((prev) => {
      const existing = prev.find((line) => line.signature === signature)
      if (existing) {
        return prev.map((line) =>
          line.signature === signature ? { ...line, qty: line.qty + qty } : line,
        )
      }
      return [
        ...prev,
        {
          lineId: signature,
          signature,
          id: drink.id,
          name: drink.name,
          color: drink.color,
          image: drink.image,
          size,
          sugar,
          ice,
          addOns,
          qty,
          unitPrice,
        },
      ]
    })
  }, [])

  const updateQty = useCallback((lineId, delta) => {
    setItems((prev) =>
      prev
        .map((line) => (line.lineId === lineId ? { ...line, qty: line.qty + delta } : line))
        .filter((line) => line.qty > 0),
    )
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((prev) => prev.filter((line) => line.lineId !== lineId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.unitPrice * line.qty, 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, addItem, updateQty, removeItem, clearCart, count, subtotal }),
    [items, addItem, updateQty, removeItem, clearCart, count, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/** Custom hook: const { items, addItem, count } = useCart() */
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside a <CartProvider>')
  return context
}
