// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './index.css';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <header className="header">
        <Link to="/" className="logo">buyA<span>-2-Z</span></Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>🔍</button>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} addToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        } />
      </Routes>

      <footer className="footer">
        <p>© 2025 buyA-2-Z | Your One-Stop Shop</p>
      </footer>
    </Router>
  );
}

export default App;