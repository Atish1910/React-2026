import { BrowserRouter, Route, Routes } from "react-router-dom";
import ECommerceUseState from "./components/eCommerce/ECommerceUseState";
import AutoCompleteParent from "./components/Autocomplete-Typing/AutoCompleteParent";

function App() {
  return (
    <>
      <BrowserRouter>
        <AutoCompleteParent></AutoCompleteParent>
        <ECommerceUseState></ECommerceUseState>
      </BrowserRouter>
    </>
  );
}

export default App;
