import "./App.css";
import ECommerceUseContextApi from "./ECommerce/ContextApi/ECommerceUseContextApi";
import CartItem from "./ECommerce/ContextApi/CartItem";
import { CartProvider } from "./ECommerce/ContextApi/Context";
import AutoCompleteParent from "./components/Autocomplete-Typing/AutoCompleteParent";

function App() {
  return (
    <>
      <AutoCompleteParent></AutoCompleteParent>
      <CartProvider>
        <div className="">
          <ECommerceUseContextApi></ECommerceUseContextApi>
          <CartItem></CartItem>
        </div>
      </CartProvider>

    </>
  );
}

export default App;
