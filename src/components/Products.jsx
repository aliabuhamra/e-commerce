import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Product from "./Product";
import Button from "./Button";
import { ProductsContext } from "./ProductsProvider";

export default function Products() {
  const products = useContext(ProductsContext);
  const location = useLocation(); // run a piece of code on location change
  const [limit, setLimit] = useState(4);

  const limitProduct = products.slice(0, limit);

  function handleProductLimit() {
    setLimit((limit) => limit + limit);
  }

  useEffect(() => {
    // if products in homepage limited 8 products
    if (location.pathname === "/") {
      setLimit(8);
    } else if (location.pathname === "/products") {
      setLimit(8);
    }
  }, [location]);

  return (
    <>
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div
            className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 scroll-mt-20'
            id='collection'
          >
            {[
              limitProduct.map((product, index) => (
                <Product key={index} details={product} />
              )),
            ]}
          </div>
        </div>

        <div className='flex justify-center mb-28'>
          {console.log("p ", products.length)}
          {console.log("lim ", limit)}
          {products.length <= limit ? null : (
            <Button outline onClick={handleProductLimit}>
              More products
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
