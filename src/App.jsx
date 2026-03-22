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
import AccordionUseState from "./components/Accordion/AccordionUseState";
import TextareaWithCharCount from "./UseRef/TextareaWithCharCount";
import UseReducerComponent from "./UseReducer/UseReducerComponent";
import CustomHooks from "./CostumHooks/CustomHooks";
import UseMemoParent from "./UseMemo/UseMemoParent";
import ParentContext from "./ContextAPI/ParentContext";
import UseCallbackComponent from "./UseCallback/UseCallbackComponent";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/UseCallbackComponent" element={<UseCallbackComponent></UseCallbackComponent>}></Route>
        <Route path="/ParentContext" element={<ParentContext></ParentContext>}></Route>
        <Route path="/UseMemoParent" element={<UseMemoParent></UseMemoParent>}></Route>
        <Route path="/customHooks" element={<CustomHooks></CustomHooks>}></Route>
        <Route path="/useReducerAllQuestion" element={<UseReducerComponent></UseReducerComponent>}></Route>
        <Route path="/useRefAllQuestions" element={<TextareaWithCharCount></TextareaWithCharCount>}></Route>
        <Route path="/performenceoptimization" element={<PerformenceOptimization></PerformenceOptimization>}></Route>
        <Route path="/usestateallquestion" element={<UseStateAllQuestions></UseStateAllQuestions>}></Route>
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
