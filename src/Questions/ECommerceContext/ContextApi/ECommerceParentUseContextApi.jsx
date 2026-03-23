import React from "react";
import { CartProvider } from "./Context";
import CartItem from "./CartItem";
import ECommerceUseContextApi from "./ECommerceUseContextApi";

const ECommerceParentUseContextApi = () => {
  return (
    <>
      <CartProvider>
        <div className="">
          <ECommerceUseContextApi></ECommerceUseContextApi>
          <CartItem></CartItem>
        </div>
      </CartProvider>
    </>
  );
};

export default ECommerceParentUseContextApi;
