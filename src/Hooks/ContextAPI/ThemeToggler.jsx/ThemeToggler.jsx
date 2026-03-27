import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const products = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Orange", price: 60 },
  ];

  return (
    <>
      <section>
        <div
          className={`container ${theme == "light" ? "bg-dark text-white" : "bg-white text-dark"} `}
        >
          <div className="row">
            <h4>Create a button to toggle a Theme when user click on button</h4>
          </div>
          <div className="row">
            <h4>Click Below button to toggle theme </h4>
            {products.map((product) => (
              <div className="mb-4 col border py-4">
                <p
                  className="mb-0"
                  key={product.id}
                >{`${product.name} : ${product.price}`}</p>
                <button
                  className={`btn ${theme == "light" ? "btn-outline-warning" : "btn-outline-secondary"}`}
                >
                  add to cart
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={toggleTheme}
              className={`btn ${theme == "light" ? "btn-warning " : "btn-primary"}`}
            >
              Change to light
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThemeToggler;
