import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const removeProduct = (productToRemove) => {
        setProducts(products.filter(product => product.id !== productToRemove.id))
    }

    const clearCart = () => {
        setProducts([]);
    }

    return(
        <CartContext.Provider value={{ products, addProduct, removeProduct, clearCart, total: products.length }}>
            {children}
        </CartContext.Provider>
    )
}