import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({ details }) {
  const [product, setProduct] = useState();
  const { id, image, name, price } = details;
  return (
    <Link
      to={`/products/${id}`}
      className='group relative cursor-pointer'
      onClick={() => setProduct(id)}
    >
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-center object-cover lg:w-full lg:h-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <div>
              <span aria-hidden='true' className='absolute inset-0' />
              {name}
            </div>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          {" "}
          <span>&#36;</span>
          {price}
        </p>
      </div>
    </Link>
  );
}
