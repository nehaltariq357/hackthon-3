"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useAppDispatch } from "../../redux/store/slice/hooks";
import { addToCart } from "../../redux/store/slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart2 } from "react-icons/bs";

const FilterItems = () => {
  const searchParams = useSearchParams();
  const itemName = searchParams.get("itemName");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  const dispatch = useAppDispatch();

  if (!itemName || !price || !image) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-red-500">Item details not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: `${itemName}-${price}`, 
        title: itemName,
        price: parseFloat(price),
        image,
        quantity: 1,
      })
    );
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 bg-white text-black py-36">
      <div className="w-full bg-white p-10">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={image}
              alt={itemName}
              className="object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 space-y-10">
            <h1 className="text-5xl font-bold cursor-auto">{itemName}</h1>
            <p className="text-white text-sm bg-customGreen w-fit px-3 py-1 rounded-full cursor-pointer">{`$${parseFloat(price).toFixed(2)} USD`}</p>
            <hr />
            <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident esse consequuntur enim accusamus, inventore voluptate quidem quibusdam fugit ad dignissimos ab necessitatibus animi eos, nam, odio unde tempore est voluptates?</p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="text-white bg-customGreen px-5 py-2 rounded-md cursor-pointer hover:bg-green-700 flex items-center gap-2"
            >
              <span>
                <BsCart2 className="size-5" />
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default FilterItems;
