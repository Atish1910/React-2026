import "./App.css";
import AutoCompleteParent from "./Questions/Autocomplete-Typing/AutoCompleteParent";
import NavbarComponent from "./Navbar/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import ECommerceUseState from "./Questions/eCommerce/ECommerceUseState";
import Pagination from "./Questions/Pagination/Pagination";
import ECommerceParentUseContextApi from "./Questions/ECommerceContext/ContextApi/ECommerceParentUseContextApi";
import CurrencyConvert from "./Questions/Currency/CurrencyConvert";
import UseStateAllQuestions from "./Hooks/useState/UseStateAllQuestions";
import PerformenceOptimization from "./performenceOptimization/performenceOptimization";
import AccordionUseState from "./Questions/Accordion/AccordionUseState";
import TextareaWithCharCount from "./Hooks/UseRef/TextareaWithCharCount";
import UseReducerComponent from "./Hooks/UseReducer/UseReducerComponent";
import CustomHooks from "./Hooks/CostumHooks/CustomHooks";
import UseMemoParent from "./Hooks/UseMemo/UseMemoParent";
import UseCallbackComponent from "./Hooks/UseCallback/UseCallbackComponent";
import ParentContextPage from "./Hooks/ContextAPI/ParentContextPage";
import FormsPage from "./Questions/Form-Handelling/FormsPage";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route
          path="/"
          element={<UseStateAllQuestions></UseStateAllQuestions>}
        ></Route>
        <Route
          path="/UseCallbackComponent"
          element={<UseCallbackComponent></UseCallbackComponent>}
        ></Route>
        <Route
          path="/ParentContextPage"
          element={<ParentContextPage></ParentContextPage>}
        ></Route>
        <Route
          path="/UseMemoParent"
          element={<UseMemoParent></UseMemoParent>}
        ></Route>
        <Route
          path="/customHooks"
          element={<CustomHooks></CustomHooks>}
        ></Route>
        <Route
          path="/useReducerAllQuestion"
          element={<UseReducerComponent></UseReducerComponent>}
        ></Route>
        <Route
          path="/useRefAllQuestions"
          element={<TextareaWithCharCount></TextareaWithCharCount>}
        ></Route>
        <Route
          path="/performenceoptimization"
          element={<PerformenceOptimization></PerformenceOptimization>}
        ></Route>
        <Route
          path="/usestateallquestion"
          element={<UseStateAllQuestions></UseStateAllQuestions>}
        ></Route>
        <Route
          path="/accordionusestate"
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

        <Route path="/FormsPage" element={<FormsPage></FormsPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
