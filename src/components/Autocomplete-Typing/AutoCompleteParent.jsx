import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import { useEffect, useState } from "react";

const API = "https://staging.velouraworld.com/api/api/v1/products";
const AutoCompleteParent = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const result = await res.json();
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = products.filter((item) => {
    return item.productName.toLowerCase().includes(debounce.toLowerCase());
  });

  useEffect(() => {
    const iResult = setTimeout(() => {
      setDebounce(search);
    }, 500);

    return () => {
      clearTimeout(iResult);
    };
  });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products setSearch={setSearch} filterData={filterData}></Products>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={<ProductDetails products={products}></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default AutoCompleteParent;
