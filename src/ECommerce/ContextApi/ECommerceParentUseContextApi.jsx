import React from "react";
import { CartProvider } from "./Context";
import ECommerceUseState from "../../components/eCommerce/ECommerceUseState";
import CartItem from "./CartItem";

const ECommerceParentUseContextApi = () => {
  return (
    <>
      <CartProvider>
        <div className="">
          <ECommerceUseState></ECommerceUseState>
          <CartItem></CartItem>
        </div>
      </CartProvider>
    </>
  );
};

export default ECommerceParentUseContextApi;
