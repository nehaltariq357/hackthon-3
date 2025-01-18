import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <main className="bg-white ">
      <div className="py-10 bg-customGreen h-auto md:h-96 text-white flex flex-col justify-center items-center space-y-7 px-10 md:px-8">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl w-full md:w-[60%] lg:w-[40%] text-center">
          Get our stories delivered From us to your inbox weekly.
        </h1>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-center">
          <input
            type="text"
            placeholder="Your Email"
            className="py-3 px-4 md:px-12 rounded-lg flex-1"
          />
          <button className="border-2 border-white py-3 px-5 rounded-lg hover:bg-white hover:text-customGreen">
            Get Started
          </button>
        </div>
        <p className="text-slate-300 text-sm md:text-base text-center w-full md:w-[80%] lg:w-[30%]">
          Get a response tomorrow if you submit by 9pm today. If we receive it
          after 9pm, you will get a response the following day.
        </p>
      </div>
      {/* 2nd div */}
      <div className="py-10 flex flex-col justify-center items-center h-auto md:h-96 space-y-10 px-5 md:px-10">
        {/* Logo and Name */}
        <ul className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
          <li>
            <Image src={`/images/logo.png`} alt="logo" width={40} height={50} />
          </li>
          <li className="font-bold text-xl md:text-2xl text-customGreen">E-Commerce</li>
        </ul>
        <div className="list-none flex flex-col md:flex-row gap-5 md:gap-16 text-center text-black">
          <li className="hover:underline cursor-pointer ">Home</li>
          <li className="hover:underline cursor-pointer">Product</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </div>
        <div className="list-none flex gap-3 md:gap-5 text-white text-sm">
          <li className="bg-customGreen rounded-full py-2 px-3 md:py-3 md:px-4">
            FB
          </li>
          <li className="bg-customGreen rounded-full py-2 px-3 md:py-3 md:px-4">
            IG
          </li>
          <li className="bg-customGreen rounded-full py-2 px-3 md:py-3 md:px-4">
            LN
          </li>
          <li className="bg-customGreen rounded-full py-2 px-3 md:py-3 md:px-4">
            YT
          </li>
        </div>
        <hr className="w-full md:w-[80%] border-t-[1px] border-customGreen mt-5" />
        <p className="text-xs md:text-sm text-center text-black">
          Copyright Ideapeel Inc © 2024. All Rights Reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
