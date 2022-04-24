import React from "react";

export default function Footer() {
  return (
    <footer className='py-12'>
      <ul className='flex gap-6 relative px-4 sm:px-6 lg:px-8'>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Customer Care</li>
        <li className='nav-item'>Instagram</li>
        <li className='absolute right-6 top-0 nav-item pretend'>
          © Pretend Store
        </li>
      </ul>
    </footer>
  );
}
