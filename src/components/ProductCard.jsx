// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-title">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-rating">
        {'★'.repeat(Math.floor(product.rating))}
        {'☆'.repeat(5 - Math.floor(product.rating))}
        <span style={{ marginLeft: '5px', color: '#555' }}>({product.rating})</span>
      </div>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;