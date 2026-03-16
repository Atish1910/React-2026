import React, { useState } from 'react';

const Ecommerce = () => {
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
    

    return (
        <>
         <section>
                <div className="container">
                    <div className="row py-5 border">
                        <div className="col-8 text-start">
                            <h4>create a E-Commerce Application</h4>
                            <ul>
                                <li>1 : fetch data from costom array which contain (product name, price & id)</li>
                                <li>create add to cart button & shift data into cart component </li>
                                <li>fetch cart data in same component</li>
                                <li>user can add quanity & price should be increases</li>
                                <li>user can decrese items</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row py-5 mt-5">
                        {
                            products.map((p) =>(
                                <div className="col-lg-3">
                                    <div className="" key={p.id}>
                                        <h6>{p.name}</h6>
                                        <p>{p.price}</p>
                                        <button className='btn btn-outline-danger' onClick={() => decreaseQuantity(p.id)}>-</button>
                                        {
                                            inInCart(p.id) ? 
                                            <button className='btn btn-outline-danger' onClick={() => handleRemoveFromCart(p.id)}>Remove From cart</button>
                                            : 
                                            <button className='btn btn-outline-primary' onClick={() => handleAddToCart(p)}>Add To Cart</button> 
                                        }
                                        <button className='btn btn-outline-success' onClick={() => increaseQuantity(p.id)}>+</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    
                    <div className="row py-5 mt-5">
                        {
                            cart.map((p) =>(
                                <div className="col-lg-3">
                                    <div className="border mb-3 pt-3 rounded-3">
                                        <h6>{p.name}</h6>
                                        <p>{p.price}</p>
                                        <p>{p.quantity}</p>
                                        <p>Total Price : {p.price * p.quantity}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>   
        </>
    );
};

export default Ecommerce;