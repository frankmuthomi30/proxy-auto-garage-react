import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'Home', href: 'herosection', current: true },
  { name: 'Services', href: 'servicessection', current: false },
  { name: 'Contacts', href: 'contacts', current: false },
  { name: 'About Us', href: 'aboutus', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GarageNavbar() {
  return (
    <Disclosure as="nav" className="bg-red-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo (left) */}
              <img
                className="h-10 w-auto lg:h-16"
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="Your Garage Logo"
              />

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" role="button">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Navigation links */}
              <div className="hidden lg:flex space-x-4 items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset based on your layout
                    duration={500}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray'
                        : 'text-white hover:bg-gray-200 hover:text-gray-900',
                      'rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset based on your layout
                  duration={500}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-white hover:bg-gray-200 hover:text-gray-900',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
