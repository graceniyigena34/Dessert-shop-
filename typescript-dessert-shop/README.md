#  TypeScript Dessert Shop

A modern, responsive dessert shop built with React, TypeScript, and Vite. Browse delicious desserts, add them to your cart, and place orders with a beautiful user interface.

##  Features

- **Product Catalog**: Browse 9 different desserts with images and prices
- **Shopping Cart**: Add/remove items with real-time quantity updates
- **Order Management**: Complete checkout process with order confirmation
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, intuitive interface with smooth animations

##  Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with Grid and Flexbox
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/graceniyigena34/Dessert-shop-.git
cd typescript-dessert-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

##  Build for Production


npm run build
```

The built files will be in the `dist` directory.

##  Usage

1. **Browse Desserts**: View the collection of available desserts
2. **Add to Cart**: Click the cart button on any dessert to add it
3. **Manage Cart**: View items in the sidebar cart, adjust quantities, or remove items
4. **Place Order**: Click "Confirm Order" to complete your purchase
5. **Order Confirmation**: Review your order and start a new one

##  Project Structure

```
src/
├── components/          # React components
│   ├── Cart.tsx        # Shopping cart component
│   ├── DessertCard.tsx # Individual dessert display
│   └── OrderConfirmation.tsx # Order success modal
├── data.ts             # Dessert data
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main application component
├── App.css             # Application styles
└── main.tsx            # Application entry point
```

## Available Desserts

- Waffle with Berries - $6.50
- Vanilla Bean Crème Brûlée - $7.00
- Macaron Mix of Five - $8.00
- Classic Tiramisu - $5.50
- Pistachio Baklava - $4.00
- Lemon Meringue Pie - $5.00
- Red Velvet Cake - $4.50
- Salted Caramel Brownie - $5.50
- Vanilla Panna Cotta - $6.50

## Deployment


1. Build the project: `npm run build`


### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Surge.sh
```bash
npm install -g surge
npm run build
surge dist
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request


## 👨‍💻 Author

**Grace Niyigena**
- GitHub: [@graceniyigena34](https://github.com/graceniyigena34)

#  Acknowledgments

- Design inspiration from modern e-commerce interfaces
- React and TypeScript communities for excellent documentation
- Vite team for the amazing build tool