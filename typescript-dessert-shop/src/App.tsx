import { useState } from 'react'
import './App.css'
import { desserts } from './data'
import type { CartItem, Dessert } from './types'
import DessertCard from './components/DessertCard'
import Cart from './components/Cart'
import OrderConfirmation from './components/OrderConfirmation'

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)

  const addToCart = (dessert: Dessert) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === dessert.id)
      if (existing) {
        return prev.map(item => 
          item.id === dessert.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...dessert, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const confirmOrder = () => {
    setShowOrderConfirmation(true)
  }

  const startNewOrder = () => {
    setCartItems([])
    setShowOrderConfirmation(false)
  }

  const getCartQuantity = (dessertId: number) => {
    return cartItems.find(item => item.id === dessertId)?.quantity || 0
  }

  return (
    <div className="app">
      <div className="container">
        <main className="main-content">
          <h1>Desserts</h1>
          <div className="desserts-grid">
            {desserts.map(dessert => (
              <DessertCard
                key={dessert.id}
                dessert={dessert}
                onAddToCart={addToCart}
                cartQuantity={getCartQuantity(dessert.id)}
              />
            ))}
          </div>
        </main>
        
        <aside className="sidebar">
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={removeFromCart}
            onConfirmOrder={confirmOrder}
          />
        </aside>
      </div>
      
      {showOrderConfirmation && (
        <OrderConfirmation
          cartItems={cartItems}
          onStartNewOrder={startNewOrder}
        />
      )}
    </div>
  )
}

export default App
