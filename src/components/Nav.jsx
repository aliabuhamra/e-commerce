/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Collection", href: "products", current: true },
  { name: "Contact", href: "cart", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ cart }) {
  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav'>
          {({ open }) => (
            <>
              <div className='px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <Logo />

                    {/* Nav Menu */}
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? " text-gray-100"
                                : "text-gray hover:text-gray-100 pointer-events-none opacity-40",
                              " text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {/* Profile dropdown */}
                      <Menu as='div' className='ml-3 relative'>
                        <Link to='/cart'>Cart ({cart.length})</Link>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        ></Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='inline-flex items-center justify-center p-2  text-gray hover:text-gray-100 focus:outline-none focus:ring-offset-2'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-gray-100"
                          : "text-gray hover:text-gray-100",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='pt-4 pb-3 border-t border-gray-700'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <Link to='/cart'>Cart {cart.length}</Link>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
