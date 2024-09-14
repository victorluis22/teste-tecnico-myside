import { fireEvent, render, screen } from '@testing-library/react';
import { CartContext } from '@/context/cart';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import Cart from '@/pages/cart';
import theme from '@/config/theme';
import "@testing-library/jest-dom";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Testing Cart component', () => {
  const mockRouter = jest.fn();

  useRouter.mockImplementation(() => ({
    pathname: "/",
    push: mockRouter
  }));


  it('Should display message when cart is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ products: [], total: 0, clearCart: jest.fn() }}>
            <Cart />
        </CartContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText("You don't have products in your shopping cart")).toBeInTheDocument();
    expect(screen.getByText('Continue shopping')).toBeInTheDocument();
    expect(screen.queryByText('Complete purchase')).not.toBeInTheDocument();
  });

  it('Should display products when cart has items', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', image: "/image1.png", price: 10 },
      { id: 2, title: 'Product 2', image: "/image2.png", price: 20 },
    ];

    render(
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ products: mockProducts, total: 2, clearCart: jest.fn() }}>
            <Cart />
        </CartContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    expect(screen.getByText('Continue shopping')).toBeInTheDocument();
    expect(screen.getByText('Complete purchase')).toBeInTheDocument();
  });

  it('Should navigate to home when "Continue shopping" is clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={{ products: [], total: 0, clearCart: jest.fn() }}>
                <Cart />
            </CartContext.Provider>
        </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Continue shopping'));

    expect(mockRouter).toHaveBeenCalledWith('/');
  });

  it('Should complete purchase, clear the cart and navigate to home', () => {
    const clearCart = jest.fn();
    const mockProducts = [{ id: 1, title: 'Product 1', image: "/image1.png", price: 10 }];
    window.alert = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ products: mockProducts, total: 1, clearCart }}>
            <Cart />
        </CartContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Complete purchase'));

    expect(window.alert).toHaveBeenCalled();
    expect(clearCart).toHaveBeenCalled();
    expect(mockRouter).toHaveBeenCalledWith('/');
  });
});
