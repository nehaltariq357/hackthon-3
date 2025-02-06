import React from 'react';
import Image from 'next/image';

const GridLayout = () => {
  return (
    <div className="relative p-4 flex justify-center items-center my-10">
      <div className="grid grid-cols-4 gap-4 items-center">
        {/* Left side: Large image */}
        <div className="col-span-2 flex justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/grid-img-1.png"}
            alt="Orange Chair"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side: Grid of smaller images */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <Image
            width={200}
            height={200}
            src={"/images/grid-img-2.png"}
            alt="Chair 1"
            className="w-full h-auto object-cover"
          />
          <Image
            width={200}
            height={200}
            src={"/images/grid-img-3.png"}
            alt="Chair 2"
            className="w-full h-auto object-cover"
          />
          <Image
            width={200}
            height={200}
            src={"/images/grid-img-4.png"}
            alt="Chair 3"
            className="w-full h-auto object-cover"
          />
          <Image
            width={200}
            height={200}
            src={"/images/grid-img-5.png"}
            alt="Chair 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
