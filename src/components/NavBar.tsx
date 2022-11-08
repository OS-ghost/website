/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#353535]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    className="block h-8 w-auto lg:hidden hover:-translate-y-1 hover:rotate-360 duration-300"
                    src="https://i.postimg.cc/zf8ZDycV/ghost.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block hover:-translate-y-1 hover:rotate-360 duration-300"
                    src="https://i.postimg.cc/zf8ZDycV/ghost.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    
                    <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#9cb59d] hover:text-white">
                      Home
                    </Link>
                    <Link
                      to="/docs"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#9cb59d] hover:text-white"
                    >
                      Docs
                    </Link>
                    <a
                      href="https://github.com/oslabs-beta/ghost"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#9cb59d] hover:text-white"
                    >
                      GitHub
                    </a>
                    <Link
                      to="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#9cb59d] hover:text-white"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-[#656565] py-2 pl-10 pr-3 leading-5 text-[#353535] placeholder-[#ebebeb] focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  <a href="https://github.com/oslabs-beta/ghost/releases">
                  <button
                    type="button"
                    className="rounded-md bg-[#9cb59d] px-3 py-2 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  hover:bg-[#798f7a]"
                  >
                    <span className="sr-only">Download</span>
                    Download
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#9cb59d] hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#9cb59d] hover:text-white"
              >
                GitHub
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#9cb59d] hover:text-white"
              >
                Docs
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#9cb59d] hover:text-white"
              >
                Download
              </Disclosure.Button>

            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
