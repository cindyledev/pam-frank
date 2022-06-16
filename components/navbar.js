import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-red-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between sm:justify-center h-16">
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/">
                      <a className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        HOME
                      </a>
                    </Link>
                    <Link href="/events">
                      <a className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        EVENTS
                      </a>
                    </Link>
                    <Link href="/travel">
                      <a className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        TRAVEL
                      </a>
                    </Link>
                    <Link href="/gift-registry">
                      <a className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        GIFT REGISTRY
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="text-white hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/events"
                className="text-white hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                EVENTS
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/travel"
                className="text-white hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                TRAVEL
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/gift-registry"
                className="text-white hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                GIFT REGISTRY
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
