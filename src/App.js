import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Home from './pages/Home';
import Products from '../src/components/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from "../src/components/Header";

const stripeLoadedPromise = loadStripe('pk_test_51KqteRFQuLTkPY8NFeLHTc6hYxQfxIpGjguQ5Z8LpoHX4hOZwF6oB50ER8QXldWOrB1aR3mJG27OEKW3YjJp8ZQK00AQTYSrvI')

export default function App() {
  // restore the product from the local storage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('product')) ?? []
  })
  let [quantity, setQuantity] = useState(1)

  useEffect(() => {

    // Store after JSON stringifying (is this a verb?) it
    localStorage.setItem('product', JSON.stringify(cart))
  }, [cart])

  // Add Stripe to the cart for checkout
  async function handleStripeCheckout() {
    const stripe = await stripeLoadedPromise
    try {
      const result = await stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1KrBmNFQuLTkPY8NNNBAIEBl',
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: 'http://localhost:3000/',
        cancelUrl: 'http://localhost:3000/',
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleProductAdd(newProduct) {
    // find the product that has already
    const existingProduct = cart.find(product => product.id === newProduct.id)
    // If the product already exists increase quantity
    if (existingProduct) {
      const updatedProduct = cart.map(product => {
        if (product.id === newProduct.id) {
          // update product quantity
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product
      })
      // add updatedProduct opject to cart array
      setCart(updatedProduct)
    }
    // product is new to the cart
    else {
      setCart([...cart, {
        ...newProduct, quantity: 1
      }])
    }
  }

  function handleProductDelete(id) {
    // Delete the product from the cart by spread syntax
    const updateCart = cart.filter(product => product.id !== id)
    setCart(updateCart)
  }

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />} />
        <Route path="/cart" element={<Cart cart={cart} onStripeCheckout={handleStripeCheckout} onProductDelete={handleProductDelete} />} />
      </Routes>
    </>
  );
}

