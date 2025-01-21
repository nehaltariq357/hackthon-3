import React from "react";
import FeaturedProduct from "../component/FeaturedProduct/page";
import Category from "../component/category/page"
import GridLayout from "../component/grid-layout/page";
import OurProduct from "../component/OurProduct/page";



const product = () => {
  
  return (
    <div className=" bg-white">
      <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Featured Products</h1>
      <FeaturedProduct />
      {/* category */}
      <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Top Categories</h1>
      <Category/>
      {/* grid layout */}
      <GridLayout/>
     {/* our product */}
     <h1 className="text-3xl font-bold py-5 text-black pl-[85px]">Our Product</h1>
     <OurProduct/>
  
    </div>
  );
};

export default product;
