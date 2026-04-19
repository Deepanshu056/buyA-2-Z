import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 99,
    rating: 4.5,
    image: '📱'
  }

  it('renders product name', () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('renders product price', () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />)
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('calls addToCart on button click', () => {
    const mockAddToCart = vi.fn()
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />)
    
    const button = screen.getByText('Add to Cart')
    fireEvent.click(button)
    
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct)
  })
})