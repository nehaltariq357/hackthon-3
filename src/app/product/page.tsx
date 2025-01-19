import React from "react";
import FeaturedProduct from "../component/FeaturedProduct/page";
import Category from "../component/Category/page";



const product = () => {
  return (
    <div className=" bg-white">
      <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Featured Products</h1>
      <FeaturedProduct />
      {/* category */}
      <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Top Categories</h1>
      
      <Category />
    
    </div>
  );
};

export default product;
