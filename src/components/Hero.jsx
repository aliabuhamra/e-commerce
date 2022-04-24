import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/img/hero.png";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <main className='flex flex-col lg:flex-row'>
        <div className='-z-0 md:relative md:basis-1/2 -top-16 left-0'>
          <img
            className='hero-image max-w-full w-full'
            src={heroImg}
            alt='Te - shirt shoes hat glasses'
          />
        </div>

        <section className='md:basis-1/2 self-center '>
          <div className='text-center lg:text-left px-2 lg:px-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl my-7 font-bold'>
              Lorem ipsum dolor sit amet
            </h1>
            <p className='lead pb-4 text-lg md:text-2xl my-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper ultrices magna mauris pellentesque dignissim ante
              varius diam elit.
            </p>
            <Link to='/cart'>
              <Button>our products</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
