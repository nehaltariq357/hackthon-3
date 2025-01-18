"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";

const NavBar = () => {
  const [isopen, setopen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 text-black">
      <div className="flex items-center justify-between h-20 ">
        {/* Desktop Menu */}
        <div className="w-[100%] items-center">
          {/* new navbar */}
          <ul className="hidden md:flex gap-8 bg-customOffWhite w-[100%] h-28 items-center justify-around">
            {/* Logo and Brand Name */}
            <ul className="flex items-center gap-4 ">
              <li>
                <Image
                  src={`/images/logo.png`}
                  alt="logo"
                  width={40}
                  height={50}
                />
              </li>
              <Link href={`/`}>
                <li className="font-bold text-xl md:text-2xl cursor-pointer">
                  Comforty
                </li>
              </Link>
            
              
              
            </ul>
              {/* cart icon */}
              <div>
              <Link href={`/component/Cart`}>
                <li className="hover:text-purple-600 cursor-pointer flex items-center gap-2 bg-white px-3 py-1 rounded-md">
                  <span>
                    <BsCart2 className="size-6" />
                  </span>
                  <span>cart</span>
                </li>
              </Link>
              </div>
          </ul>

          {/* previous navbar */}
          <div className="flex">
            <ul className="hidden md:flex items-center gap-8 bg-white">
              <Link href={`/`}>
                <li className="hover:text-purple-600 cursor-pointer">Home</li>
              </Link>
              <Link href={`/product`}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href={`/component/About`}>
                <li className="hover:text-purple-600 cursor-pointer">About</li>
              </Link>

              <Link href={`/component/Contact`}>
                <li className=" px-6 py-2 rounded-md text-sm cursor-pointer ">
                  Contact
                </li>
              </Link>
            </ul>
            {/* contact button */}

            <ul className="flex items-center bg-white w-[100%]">
              <li className="text-slate-500">Contact:(808) 555-0111</li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setopen(!isopen)}
            className="md:hidden cursor-pointer text-2xl flex items-center list-none gap-10"
          >
            <Link href={`/component/Cart`} onClick={() => setopen(false)}>
              <li className="hover:text-purple-600 cursor-pointer">
                <BsCart2 />
              </li>
            </Link>
            <GiHamburgerMenu />
          </div>
        </div>

        {/* Mobile Menu */}
        {isopen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40">
            <ul className="flex flex-col items-start gap-4 px-6 py-4">
              <Link href={`/`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">Home</li>
              </Link>
              <Link href={`/product`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href={`/component/About`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">About</li>
              </Link>

              <Link href={`/component/Contact`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
