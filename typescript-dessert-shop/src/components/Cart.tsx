import type { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onConfirmOrder: () => void;
}

export default function Cart({ cartItems, onRemoveFromCart, onConfirmOrder }: CartProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart ({totalItems})</h2>
        <div className="empty-cart">
          <img src="./asserts/illustration-empty-cart.svg" alt="Empty cart" />
          <p>Your added items will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart ({totalItems})</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h4>{item.name}</h4>
              <div className="item-details">
                <span className="quantity">{item.quantity}x</span>
                <span className="unit-price">@ ${item.price.toFixed(2)}</span>
                <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            <button 
              className="remove-item"
              onClick={() => onRemoveFromCart(item.id)}
              type="button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="order-total">
        <span>Order Total</span>
        <span className="total-amount">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="carbon-neutral">
        <span>🌱 This is a carbon-neutral delivery</span>
      </div>
      <button className="confirm-order" onClick={onConfirmOrder} type="button">
        Confirm Order
      </button>
    </div>
  );
}