export interface Dessert {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface CartItem extends Dessert {
  quantity: number;
}