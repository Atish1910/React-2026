import "./App.css";
import ECommerceUseContextApi from "./ECommerce/ContextApi/ECommerceUseContextApi";
import CartItem from "./ECommerce/ContextApi/CartItem";
import { CartProvider } from "./ECommerce/ContextApi/Context";
import AutoCompleteParent from "./components/Autocomplete-Typing/AutoCompleteParent";
import NavbarComponent from "./components/NavbarComponent";
import Pagination from "./components/Pagination/Pagination";
import { Route, Routes } from "react-router-dom";
import ECommerceUseState from "./components/eCommerce/ECommerceUseState";
import ECommerceParentUseContextApi from "./ECommerce/ContextApi/ECommerceParentUseContextApi";
import CurrencyConvert from "./Currency/CurrencyConvert";
import UseStateAllQuestions from "./useState/UseStateAllQuestions";
import PerformenceOptimization from "./performenceOptimization/performenceOptimization";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <PerformenceOptimization></PerformenceOptimization>
      <UseStateAllQuestions></UseStateAllQuestions>
      <Routes>
        <Route
          path="/"
          element={<AccordionUseState></AccordionUseState>}
        ></Route>
        <Route
          path="/autoCompleteComponent"
          element={<AutoCompleteParent></AutoCompleteParent>}
        ></Route>
        <Route path="/pagination" element={<Pagination></Pagination>}></Route>
        <Route
          path="/eCommerceUseSTate"
          element={<ECommerceUseState></ECommerceUseState>}
        ></Route>
        <Route
          path="/eCommerceContextApi"
          element={
            <ECommerceParentUseContextApi></ECommerceParentUseContextApi>
          }
        ></Route>
        <Route
          path="/currency-converter"
          element={<CurrencyConvert></CurrencyConvert>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
