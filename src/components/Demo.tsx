import React, { useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';

export default function Demo() {

  return (
    <div>
      <NavBar />
      <div className="flex items-center bg-[#686868] pt-[150px] h-screen flex-col">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Spam click the button for your cohort below!</h1>
      <br />
      <div>
        <img
        src="https://media.tenor.com/7gUwUBvlgqAAAAAC/red-button-spam.gif"
        className="rounded-md shadow-lg"
        alt="animated image of someone spam pressing a button" />
      </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow ">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#9cb59d] px-8 py-3 text-base font-medium text-white hover:bg-[#798f7a] md:py-4 md:px-10 md:text-lg"
            >
              WCRI 53
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#bdbdbd] px-8 py-3 text-base font-medium text-[#ffffff] hover:bg-[#a6a6a6] md:py-4 md:px-10 md:text-lg"
            >
              WCRI 54
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}