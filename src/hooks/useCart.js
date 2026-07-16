import { useCart } from '../context/CartContext'

export function useCartActions() {
  const { addToCart, removeFromCart, updateQuantity, cartItems } = useCart()

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    cartItems,
  }
}