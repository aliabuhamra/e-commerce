import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home({ onProductsMore }) {
  return (
    <>
      <Hero />
      <Products />
      <Cta />
      <Footer />
    </>
  );
}
