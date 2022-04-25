import React, { useTransition } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Order({ cart, onStripeCheckout, onProductDelete }) {
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalProducts = cart.reduce(
    (total, product) => total + totalQuantity * product.price,
    0
  );
  return (
    <div className='flex flex-col gap-6 mb-28 pt-5 px-4 sm:px-6 lg:px-8'>
      <h5 className='pb-4'>Your Cart</h5>
      {cart.length === 0 && (
        <p className='font-bold text-gray-100 animate__animated animate__backInDown'>
          You have not added any product to your cart yet.
        </p>
      )}
      {cart.length > 0 && (
        <>
          {cart.map((product) => (
            <article
              key={product.id}
              className='grid grid-cols-6 justify-items-start items-center p:4 md:p-6 border-cta border-t'
            >
              <Link to={`/products/${product.id}`}>
                <img
                  className='w-20 h-20 hover:shadow-md'
                  src={product.image}
                />
              </Link>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
              <p>
                <span>&#36;</span>
                {Number(product.quantity * product.price).toFixed(10)}
              </p>
              <Button outline onClick={() => onProductDelete(product.id)} onan>
                x
              </Button>
              <Button outline onClick={onStripeCheckout}>
                check out
              </Button>
            </article>
          ))}
          <article className='grid grid-cols-5 justify-items-start items-center p:4 md:p-6 bg-cta border-b'>
            <p>All Items</p>
            <img className='w-20 h-20 opacity-0' />
            <p>{totalQuantity}</p>
            <p>
              <span>&#36;</span>
              {totalProducts}
              {/* {product.quantity * product.price} */}
            </p>
            <Button>check out</Button>
          </article>
        </>
      )}
    </div>
  );
}
