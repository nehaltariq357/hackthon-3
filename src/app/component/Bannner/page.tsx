"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { bannerData } from "@/app/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <main className=" bg-white py-28">
      <div className="bg-customOffWhite min-h-screen text-black pt-5 pb-10 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
          {/* Left Grid */}
          <div className="flex justify-center items-center w-full h-full mb-10">
            <div className="space-y-8 md:ml-28 text-center md:text-left px-5 w-full">
              <p className="text-sm md:text-base">{bannerData.content}</p>
              <h1 className="text-6xl md:text-7xl font-bold w-full md:w-[100%]">
                {bannerData.heading}
              </h1>
              {/* button */}
              <div className="flex justify-center md:justify-start">
                <Link href={"/product"}>
                <button className="bg-customGreen text-white px-5 py-2 rounded-md text-sm cursor-pointer hover:bg-green-900 flex items-center justify-center ">
                  Shop Now
                  <span>
                    <IoIosArrowRoundForward className="size-7" />
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Grid*/}
          <div className="flex justify-center items-center pb-10 w-full">
            <Slider {...settings} className="w-[90%]">
              {bannerData.image.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden flex items-center justify-center">
                    <Image
                      src={image}
                      alt="Banner image"
                      width={450}
                      height={300}
                      style={{ objectFit: "contain" }} 
                      className="rounded-md "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
