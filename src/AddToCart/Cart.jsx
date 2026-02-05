import React from 'react';

const Cart = ({cart, setCart}) => {
    return (
        <>
            <div className="row">
                <p>here are data from cart</p>

                <h2>Cart</h2>
                {cart.length === 0 && <p>Cart is empty</p>}

                {cart.map((item) => (
                    <div key={item.id}>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    </div>
                ))}
            </div>   


        </>
    );
};

export default Cart;