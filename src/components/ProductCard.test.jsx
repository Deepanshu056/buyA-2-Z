import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 99,
    rating: 4.5,
    image: '📱'
  };

  it('should render product details correctly', () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByText('★★★★☆')).toBeInTheDocument();
  });

  it('should call addToCart when button is clicked', () => {
    const mockAddToCart = vi.fn();
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
    
    const button = screen.getByText('Add to Cart');
    fireEvent.click(button);
    
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});