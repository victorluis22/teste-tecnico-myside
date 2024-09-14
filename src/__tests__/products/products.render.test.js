import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from '@/context/cart';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import Product from '@/pages/products/[id]';
import theme from '@/config/theme';
import "@testing-library/jest-dom";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockAddProduct = jest.fn();

describe('Testing Product Page', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    category: 'electronics',
    image: '/test-image.jpg',
    price: 100,
    discount: 10,
    brand: 'test brand',
    model: 'test model',
    color: 'blue'
  };

  useRouter.mockReturnValue({
    push: jest.fn(),
  });

  it('Should render the product information correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ addProduct: mockAddProduct }}>
            <Product product={product} />
        </CartContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('Test brand')).toBeInTheDocument();
    expect(screen.getByText('Test model')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });

  it('Should call addProduct and redirect to cart page when "Add to cart" button is clicked', () => {
    const mockRouter = useRouter();

    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={{ addProduct: mockAddProduct }}>
                <Product product={product} />
            </CartContext.Provider>
        </ThemeProvider>
    );

    const addToCartButton = screen.getByText('Add to cart');
    expect(addToCartButton).toBeInTheDocument();

    fireEvent.click(addToCartButton);

    expect(mockAddProduct).toHaveBeenCalledWith(product);

    expect(mockRouter.push).toHaveBeenCalledWith('/cart');
  });
});
