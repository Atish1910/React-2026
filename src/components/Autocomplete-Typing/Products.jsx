import React, { useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Products = ({ setSearch, filterData, search, debounce, products }) => {
  const [showSuggestion, setShowSuggestion] = useState();
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h4>create a Auto Complete Search box for products</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 py-3">
              <input
                type="text"
                placeholder="search via product name"
                className="form-control"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestion(true);
                }}
              />
              <ul className="bg-light pt-4">
                {showSuggestion &&
                  debounce &&
                  filterData.slice(0, 5).map((p) => (
                    <li
                      key={p.id}
                      onClick={() => {
                        navigate(`/products/${p._id}`);
                        setShowSuggestion(false);
                        setSearch(p.productName);
                      }}
                    >
                      {p.productName}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="row">
            {products.map((p) => (
              <Product key={p.id} p={p}></Product>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
