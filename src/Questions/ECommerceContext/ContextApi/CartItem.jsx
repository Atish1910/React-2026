import React, { useContext } from 'react';
import { CartContext } from './Context';

const CartItem = () => {
    const {cart} = useContext(CartContext);
    return (
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
    );
};

export default CartItem;