"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "../../redux/store/slice/hooks";
import { addToCart } from "../../redux/store/slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";
import { BsCart2 } from "react-icons/bs";
interface types {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  slug: string;
}

const OurProduct = () => {
  const [product, setProduct] = useState<types[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "products"]{
          _id, 
          title, 
          price, 
          "imageUrl": image.asset->url, 
          "slug":slug.current
        }[3..18]`;
       
        const data: types[] = await client.fetch(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleAddToCart = (item: types) => {
    dispatch(
      addToCart({
        id:item._id,
        title: item.title,
        price: item.price,
        image: item.imageUrl,
        quantity: 1,
        
      })
    );
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <main
      className="px-4 md:px-10 lg:px-20 bg-white min-h-screen pb-24"
      style={{ backgroundColor: "white" }}
    >
      {/* <h1 className="text-3xl font-bold py-5 text-black">Featured Products</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-black">
        {product.map((post) => (
          <div key={post._id} className="my-10">
            <div className="space-y-5 w-full md:w-[90%] rounded-md">
              <Link href={`/product/${post.slug}`}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  width={500}
                  height={200}
                />
                <h1 className="font-bold mt-5 text-lg md:text-2xl">
                  {post.title}
                </h1>
                {/* price and add to cart */}
                <div className="flex justify-between">
                  <p className="md:text-base font-bold text-2xl mt-4">{`$${post.price}`}</p>
                  <button
                    onClick={() => handleAddToCart(post)}
                    className="text-black border-2 bg-customOffWhite px-5 py-2 rounded-md cursor-pointer hover:bg-customGreen hover:text-white w-fit"
                  >
                    <BsCart2 />
                  </button>
                </div>
              </Link>
              {/* add to cart */}
            </div>
          </div>
        ))}
      </div>
        <hr />
      <ToastContainer />
    </main>
  );
};

export default OurProduct;
