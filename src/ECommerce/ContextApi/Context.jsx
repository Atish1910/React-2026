import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const products = [
        {id : 1, name : "laptop", price : 100},
        {id : 2, name : "desktop", price : 200},
        {id : 3, name : "mobile", price : 300},
        {id : 4, name : "mouse", price : 400},
    ];
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const existing = cart.find((item) => item.id == product.id);
        if(!existing){
            setCart([...cart, {...product, quantity : 1}]);
            console.log(product);
        }else{
            const updatedAddItem = cart.map((item) => {
                return item.id == product.id ? 
                {...item, quantity : item.quantity + 1} : item
            });
            setCart(updatedAddItem);
        }
    }

    const handleRemoveFromCart = (productId) => {
        const updatedRemoveCart = cart.filter((item) => {
            return item.id !== productId;
        });
        setCart(updatedRemoveCart);
    }

    
    const increaseQuantity = (productId) => {
      const updateQuantity = cart.map((item) => {
        return item.id == productId ? {...item, quantity : item.quantity + 1} : item
      });

      setCart(updateQuantity); 
    }

    const decreaseQuantity = (productId) => {
        const updatedQuantity = cart.map((item) => {
            return item.id == productId ? {...item, quantity : item.quantity - 1} : item
        }).filter((item) => item.quantity > 0);
        setCart(updatedQuantity);
    }

    const inInCart = (id) => {
        return cart.some((item) => item.id == id);
    }
    

    return(
        <CartContext.Provider value={{products, inInCart, handleAddToCart, handleRemoveFromCart, increaseQuantity, decreaseQuantity, cart}}>
            {children}
        </CartContext.Provider>
    )
}