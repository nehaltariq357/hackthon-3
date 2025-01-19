import React from "react";
import FeaturedProduct from "../component/FeaturedProduct/page";

const product = () => {
  return (
    <div className=" bg-white">
      <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Featured Products</h1>
      <FeaturedProduct />
    </div>
  );
};

export default product;
