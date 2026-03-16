import React, { useContext } from 'react';
import { CartContext} from './Context';

const ECommerceUseContextApi = () => {
    const {products, decreaseQuantity, inInCart, handleRemoveFromCart, handleAddToCart, increaseQuantity} = useContext(CartContext);
    return (
        <>
            <div className='row'>
                <h4> i am All Product</h4>
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
        </>
    );
};

export default ECommerceUseContextApi;