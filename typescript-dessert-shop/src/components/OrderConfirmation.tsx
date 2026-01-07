import type { CartItem } from '../types';

interface OrderConfirmationProps {
  cartItems: CartItem[];
  onStartNewOrder: () => void;
}

export default function OrderConfirmation({ cartItems, onStartNewOrder }: OrderConfirmationProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <img src="/asserts/icon-order-confirmed.svg" alt="Order confirmed" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        
        <div className="order-summary">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="item-thumbnail" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <div className="item-pricing">
                  <span className="quantity">{item.quantity}x</span>
                  <span className="unit-price">@ ${item.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          
          <div className="order-total">
            <span>Order Total</span>
            <span className="total-amount">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button className="start-new-order" onClick={onStartNewOrder} type="button">
          Start New Order
        </button>
      </div>
    </div>
  );
}