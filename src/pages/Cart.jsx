import React from "react";
import Order from "../components/Order";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Cart({ cart, onStripeCheckout, onProductDelete }) {
  return (
    <section>
      <>
        <Order
          cart={cart}
          onStripeCheckout={onStripeCheckout}
          onProductDelete={onProductDelete}
        />
        <Cta />
        <Footer />
      </>
    </section>
  );
}
