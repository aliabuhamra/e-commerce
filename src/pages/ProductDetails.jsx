import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";
import { useParams } from "react-router-dom";
import ProductDetailInfo from "../components/ProductDetailInfo";
import Products from "../components/Products";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function ProducDetails({ cart, onProductAdd, onProductDelete }) {
  const products = useContext(ProductsContext);
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    products.find((product) => {
      if (product.id === params.id) {
        setProduct(product);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 200);
      }
      // The easiest way only if you don't need return something it'ts just (return null) and avoid error expects a return value from arrow function
      return null;
    });
  }, [params]);

  if (!product) {
    return null;
  }

  return (
    <>
      <section className='px-4 sm:px-6 lg:px-8 lg:py-2'>
        <ProductDetailInfo
          product={product}
          cart={cart}
          onProductAdd={onProductAdd}
          onProductDelete={onProductDelete}
        />
        <Products />
        <Cta />
        <Footer />
      </section>
    </>
  );
}
