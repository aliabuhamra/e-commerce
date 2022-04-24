import React from "react";
import arrow from "../img/arrow.svg";
export default function Cta() {
  const [email, setEmail] = React.useState("");

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (email) {
      setEmail(email);
    }
    // remove the email text after the submit
    setEmail("");
  }

  return (
    <div className='flex bg-cta relative flex-col md:flex-row w-3/4 mx-auto'>
      <div className='cta-img'>
        <img
          className='flex-col w-full'
          src={require("../img/mailing-list-img.png")}
          alt='ss'
        />
      </div>
      <form
        onSubmit={handleEmailSubmit}
        className='w-full flex items-center justify-center p-4 my-9 md:my-0'
      >
        <div className='cta-form-wrapper text-center text-lg'>
          <label htmlFor='email'>
            Sign up for our newsletter and get 10% off your next order.
          </label>
          <br />
          <label className='relative bg-black block' htmlFor='email'>
            <input
              style={{
                backgroundImage: `url(${arrow})`,
                backgroundPositionX: "right",
                backgroundPositionY: "center",
                backgroundOrigin: "content-box",
              }}
              className='py-3 mt-4 bg-cta block w-full pl-7 pr-2 sm:text-sm border-2 border-gray outline-none bg-no-repeat'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type='submit'
              className='absolute top-0 right-0  h-full w-12'
            ></button>
          </label>
        </div>
      </form>
    </div>
  );
}
