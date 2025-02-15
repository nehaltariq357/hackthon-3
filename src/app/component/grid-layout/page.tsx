import React from "react";
import Image from "next/image";

const GridLayout = () => {
  return (
    <div className="relative p-4 flex justify-center items-center my-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {/* Left side: Large image, spans full width on mobile */}
        <div className="lg:col-span-2 flex justify-center">
          <Image
            width={600}
            height={600}
            src={"/images/grid-img-1.png"}
            alt="Orange Chair"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right side: Grid of smaller images */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <Image
            width={300}
            height={300}
            src={"/images/grid-img-2.png"}
            alt="Chair 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            width={300}
            height={300}
            src={"/images/grid-img-3.png"}
            alt="Chair 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            width={300}
            height={300}
            src={"/images/grid-img-4.png"}
            alt="Chair 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            width={300}
            height={300}
            src={"/images/grid-img-5.png"}
            alt="Chair 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
