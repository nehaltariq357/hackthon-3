import { client } from "@/sanity/lib/client";
import Image from "next/image";
// /pages/Category/[Category]/page.tsx
const CategoryDetailPage = async ({ params }: { params: { Category: string } }) => {
  const category = decodeURIComponent(params.Category);

  // Fetch the products based on category name
  const products = await client.fetch(
    `*[_type == "products" && category->title == $category] | order(_createdAt asc) {
      _id,
      title,
      tags,
      price,
      inventory,
      description,
      'imageurl': image.asset->url,
      'category': category->title,
      'slug': slug.current
    }`,
    { category }
  );

  return (
    <div>
      <h1>Products in {category}</h1>
      {/* Render products */}
      {
        products.map((product: any) => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Image src={product.imageurl} width={200} height={200} alt={product.title} />
          </div>
        ))
      }
    </div>
  );
};

export default CategoryDetailPage;
