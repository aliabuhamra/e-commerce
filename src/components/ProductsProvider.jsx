import React, { createContext } from "react";
import { products } from "../assets/index.js";

const ProductsContext = createContext();

function ProductsProvider(props) {
  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
