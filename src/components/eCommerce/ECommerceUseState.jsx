import React, { useState } from "react";

const ECommerceUseState = () => {
  const products = [
    { id: 1, name: "laptop", price: 1030 },
    { id: 2, name: "desktop", price: 1300 },
    { id: 3, name: "macOs", price: 1200 },
    { id: 4, name: "iPhone17", price: 1100 },
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => {
      return item.id == product.id;
    });
    if (!existing) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => {
      return item.id != productId;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      return item.id == productId
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((item) => {
        return item.id == productId
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const isInCart = (productdId) => {
    cart.some((item) => {
      return item.id != productdId;
    });
  };

  return (
    <>
      <section>
        <div className="container">
          <h5>01 : Create a E Commerce Application</h5>
          <div className="row pt-3">
            {products.map((p) => (
              <div className="col py-3 border mb-4 text-center">
                <div className="">
                  <p>{p.name}</p>
                  <p className="">
                    <b>{p.price}</b>
                  </p>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => addToCart(p)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="row pt-3">
            {cart.length <= 0 ? (
              <p className="text-danger text-center">No data added in cart</p>
            ) : (
              cart.map((p) => (
                <div className="col py-3 border mb-4 text-center">
                  <div className="border">
                    <p>{p.name}</p>
                    <p className="">
                      <b>{p.price}</b>
                    </p>
                    <p>
                      <b>{p.quantity}</b>
                    </p>
                    <p>price : {p.quantity * p.price}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => decreaseQuantity(p.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => increaseQuantity(p.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ECommerceUseState;
