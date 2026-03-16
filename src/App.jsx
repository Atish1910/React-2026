import "./App.css";
import Five from "./components/Five";
import Four from "./components/Four";
import One from "./components/One";
import Six from "./components/Six";
import Three from "./components/Three";
import Two from "./components/Two";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/CustomeHook/Ten";
import Practice from "./Practice";
import { useState } from "react";
import ElevenParent from "./components/callBack/ElevenParent";
import Ecommerce from "./ECommerce/Ecommerce";
import ECommerceUseContextApi from "./ECommerce/ContextApi/ECommerceUseContextApi";
import CartItem from "./ECommerce/ContextApi/CartItem";
import { CartProvider} from "./ECommerce/ContextApi/Context";
import Autocomplete from "./AutoComplete/Autocomplete";

const API = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [data, seData] = useState("Atishhh");

  function onUpdate(data){
    seData(data)
  }

  return (
    <>
    <Autocomplete></Autocomplete>
    <CartProvider>

    <div className="">
        <ECommerceUseContextApi></ECommerceUseContextApi>
        <CartItem></CartItem>
      </div>
    </CartProvider>
    <Ecommerce></Ecommerce>
    <ElevenParent></ElevenParent>
      <Ten></Ten>
      <Practice data={data} onUpdate={onUpdate}></Practice>
      <Ten></Ten>
      <Nine API={API}></Nine>
      <One></One>
      <Two></Two>
      <Three></Three>
      <Four></Four>
      <Five></Five>
      <Six></Six>
      <Seven></Seven>
      <Eight></Eight>
    </>
  );
}

export default App;
