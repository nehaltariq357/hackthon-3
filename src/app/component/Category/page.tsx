// /pages/Category/page.tsx
import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ICategory {
  title: string;
  image: string;
  products: number;
}

const CategoryPage = async () => {
  const query = `*[_type == "categories"]{title, products, "image": image.asset->url}`;
  const data = await client.fetch(query);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-5">
        {data.map((category: ICategory, index: number) => (
          <div
            key={index}
            className="text-[#272343] rounded-md overflow-hidden relative group"
          >
          <Link href={`/Category/${encodeURIComponent(category.title)}`}>
  <Image
    src={category.image}
    alt={category.title}
    width={424}
    height={424}
    className="h-[424px] w-[424px] object-cover"
  />
</Link>

            <div className="absolute bottom-0 left-0 w-full h-0 bg-black/85 transition-all duration-300 ease-in-out group-hover:h-[85px]">
              <div className="text-white font-semibold pl-3 pt-2">
                <ul>
                  <li className="text-white text-[20px]">{category.title}</li>
                  <li className="text-slate-500 text-xs">
                    {category.products} Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
