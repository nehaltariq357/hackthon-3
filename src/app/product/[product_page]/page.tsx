"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppDispatch } from "../../redux/store/slice/hooks";
import { addToCart } from "../../redux/store/slice/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";

interface types {
  title: string;
  price: number;
  id: number;
  image: string;
  description: string;
  detailDesc: string;
  imageUrl:string
  PricewithoutDiscount:number
  badge:string
  inventory:number
  category:{
    title:string
    CategoryImage:{
      url:string
    }
  }
}

const ProductPage = ({ params }: { params: { product_page: string } }) => {
  const [product, setProduct] = useState<types |null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "products" && slug.current=="${params.product_page}"]
{
     _id, 
          title, 
          price, 
            PricewithoutDiscount,
            badge,
            description,
            inventory,
            tags,
          "imageUrl": image.asset->url,
        category->{title,"CategoryImage":image.asset->{url}}
        }[0]`;

        const data: types = await client.fetch(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchPosts();
  }, [params.product_page]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (item: types) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      })
    );
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 bg-white text-black">
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-10 text-center">
          {product.title}
        </h1>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 space-y-5">
            <p className="text-xl font-bold text-green-600">{`$${product.price}`}</p>
            <p className="text-gray-700">{product.detailDesc}</p>
            <p className="text-sm text-gray-500">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="text-white bg-green-600 px-5 py-2 rounded-md cursor-pointer hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ProductPage;
