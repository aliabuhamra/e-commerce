import React from "react";
import Button from "../components/Button";

export default function ProductDetailInfo({
  product,
  onProductAdd,
  onProductDelete,
}) {
  const [thumbanil, setThambanil] = React.useState(null);

  function handleThambanilChange(e) {
    setThambanil(e.target.src);
  }

  return (
    <div className='flex flex-col md:flex-row gap-8'>
      {/* Left Side */}
      <div className='md:basis-1/2 '>
        <div className='relative  gallery'>
          <img
            className='max-w-full w-3/4 ml-auto'
            src={thumbanil ?? product.image}
            alt={product.name}
          />
          <div className='absolute top-0 left-0 flex lg:flex-col gap-3 w-1/4 h-full justify-center'>
            <img
              onClick={handleThambanilChange}
              src={product.image}
              className='w-36'
              id='1'
            />
            <img
              onClick={handleThambanilChange}
              src={product.image}
              className='w-36'
              id='2'
            />
            <img
              onClick={handleThambanilChange}
              src={product.image}
              className='w-36'
              id='3'
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='md:basis-1/2 py-3 px-4 lg:px-6 self-center'>
        <h1 className='text-2x1 md:text-4xl font-bold pb-3'>{product.price}</h1>
        <h2 className='text-2x1 md:text-4xl pb-3'>{product.name}</h2>
        <p className='text-base tracking-wide mb-8'>{product.description}</p>
        {/* <CheckColor color={color} onColorChange={handleColorChange} /> */}
        <div className='flex gap-3'>
          <Button onClick={() => onProductAdd(product)}>add to cart</Button>
          <Button onClick={() => onProductDelete(product.id)}>x</Button>
        </div>
      </div>
    </div>
  );
}
