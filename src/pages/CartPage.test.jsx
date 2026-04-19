import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CartPage from './CartPage';

describe('CartPage', () => {
  const mockCart = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2, image: '📱' },
    { id: 2, name: 'Product 2', price: 50, quantity: 1, image: '💻' }
  ];

  it('should display cart items', () => {
    render(<CartPage cart={mockCart} updateQuantity={() => {}} removeFromCart={() => {}} />);
    
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    // ✅ Total amount check karo (regex se)
    expect(screen.getByText(/\$250\.00/)).toBeInTheDocument();
  });

  it('should show empty cart message when cart is empty', () => {
    render(<CartPage cart={[]} updateQuantity={() => {}} removeFromCart={() => {}} />);
    
    expect(screen.getByText(/empty/i)).toBeInTheDocument();
  });

  it('should call updateQuantity when + button is clicked', () => {
    const mockUpdate = vi.fn();
    render(<CartPage cart={mockCart} updateQuantity={mockUpdate} removeFromCart={() => {}} />);
    
    const plusButtons = screen.getAllByText('+');
    fireEvent.click(plusButtons[0]);
    
    expect(mockUpdate).toHaveBeenCalled();
  });
});