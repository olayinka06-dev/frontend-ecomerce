"use client";
import { useState } from 'react';
const Notification = ({ message }) => {
    return (
      <div className="fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-md shadow">
        {message}
      </div>
    );
  };
  
//   export default Notification;

//   import { useState } from 'react';
// import ProductCard from '../components/ProductCard';
// import Notification from '../components/Notification';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
  { id: 4, name: 'Product 4', price: 25 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product, quantity) => {
    const item = { ...product, quantity };
    setCart([...cart, item]);
    setNotification(`${quantity} ${product.name}(s) added to cart.`);
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">E-Commerce Store</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {notification && <Notification message={notification} />}
    </div>
  );
}




const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="border p-4 m-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-16 p-1 border rounded-md mt-2"
      />
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

// export default ProductCard;
