import type { Dessert } from '../types';

interface DessertCardProps {
  dessert: Dessert;
  onAddToCart: (dessert: Dessert) => void;
  cartQuantity: number;
}

export default function DessertCard({ dessert, onAddToCart, cartQuantity }: DessertCardProps) {
  return (
    <div className="dessert-card">
      <div className="dessert-image">
        <img src={dessert.image} alt={dessert.name} />
        <button 
          className={`add-to-cart ${cartQuantity > 0 ? 'in-cart' : ''}`}
          onClick={() => onAddToCart(dessert)}
          type="button"
        >
          {cartQuantity > 0 ? (
            <span>🛒 {cartQuantity}</span>
          ) : (
            <span>🛒 Add to Cart</span>
          )}
        </button>
      </div>
      <div className="dessert-info">
        <p className="category">{dessert.category}</p>
        <h3 className="name">{dessert.name}</h3>
        <p className="price">${dessert.price.toFixed(2)}</p>
      </div>
    </div>
  );
}