// src/pages/HomePage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Apple iPhone 15 Pro", price: 999, rating: 4.8, image: "📱", category: "Electronics" },
  { id: 2, name: "Sony WH-1000XM5", price: 398, rating: 4.9, image: "🎧", category: "Audio" },
  { id: 3, name: "Samsung 4K Smart TV", price: 699, rating: 4.7, image: "📺", category: "Electronics" },
  { id: 4, name: "Nike Air Max", price: 120, rating: 4.6, image: "👟", category: "Fashion" },
  { id: 5, name: "Instant Pot Duo", price: 89, rating: 4.8, image: "🍲", category: "Home" },
  { id: 6, name: "The Midnight Library", price: 15, rating: 4.9, image: "📚", category: "Books" },
  { id: 7, name: "Dyson V15 Vacuum", price: 749, rating: 4.7, image: "🧹", category: "Home" },
  { id: 8, name: "LEGO Star Wars Set", price: 79, rating: 4.9, image: "🧩", category: "Toys" },
];

function HomePage({ searchTerm, addToCart }) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="banner">
        <h1>Welcome to buyA-2-Z</h1>
        <p>Everything you need, from A to Z ✨</p>
      </div>
      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default HomePage;