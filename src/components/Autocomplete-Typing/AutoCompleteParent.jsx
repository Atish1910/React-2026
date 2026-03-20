import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import { useEffect, useState } from "react";

const API = "https://staging.velouraworld.com/api/api/v1/products";
const AutoCompleteParent = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const result = await res.json();
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])


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

  const handleKeyDown = (e) => {
    if(!showSuggestion) return;

    if(e.key == "ArrowDown"){
      setActiveIndex((prev) => {
        return prev < filterData.slice(0, 5).length -1 ? prev + 1 : prev;
      })
    }
    
    if(e.key == "ArrowDown"){
      setActiveIndex((prev) => {
        return prev > 0 ? prev -1 : prev;
      })
    }

    if(e.key == "Enter" && activeIndex >= 0){
      const selected = filterData[activeIndex];
      navigate(`/products/${selected._id}`);
      setSearch(selected.productName);
      setShowSuggestion(false);
      setActiveIndex(-1);
    }
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Products handleKeyDown={handleKeyDown} search={search} products={products} setSearch={setSearch} filterData={filterData} showSuggestion={showSuggestion} setShowSuggestion={setShowSuggestion} debounce={debounce}></Products>}
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
