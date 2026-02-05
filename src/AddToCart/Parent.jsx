import React, { useState } from 'react';
import Cart from './Cart';
import products from './product';

const Parent = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id == product.id);

        if(existingItem){
            setCart(
                cart.map((item) => 
                    item.id == product.id ? {...item} : item
                )
            )
        }else{
            setCart([...cart, {...product, qty: 1}])
        }
    }


    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Add to cart </h4>
                            {
                                products.map((product) => (
                                    <div className="mb-4">
                                        <p className='mb-0' key={product.id}>{`${product.name} : ${product.price}`}</p>
                                        <button className='btn btn-success' onClick={() => addToCart(product)}>add to cart</button>
                                    </div>
                                ))
                            }
                            <Cart cart={cart} setCart={setCart}></Cart>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Parent;