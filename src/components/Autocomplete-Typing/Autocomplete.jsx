import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const API = "https://staging.velouraworld.com/api/api/v1/products";
const Autocomplete = ({ setSearch, filterData }) => {
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
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            {filterData.map((p) => (
              <AllProducts key={p.id} p={p}></AllProducts>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Autocomplete;
