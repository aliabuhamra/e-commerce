import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Logo() {
  return (
    <Link to='/' className='navbar-brand'>
      <div className='flex-shrink-0'>
        <img className='h-8 w-8' src={logo} alt='l&b' />
      </div>
    </Link>
  );
}
