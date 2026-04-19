// src/pages/CartPage.jsx
import React from 'react';

function CartPage({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container" style={{ textAlign: 'center', padding: '60px' }}>
        <h2>Your cart is empty 🛒</h2>
        <p>Add some items from the homepage!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">{item.image}</div>
            <div className="cart-item-details">
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
              <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <div style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Subtotal: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;