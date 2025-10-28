import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Protein-Packed Salad",
    image: "/protein-salad-with-chicken-and-vegetables.jpg",
    rating: 5,
    reviews: 50,
    description:
      "A hearty blend of spinach, grilled chicken, chickpeas, and fresh vegetables.",
  },
  {
    id: "2",
    name: "Chakra Crunch",
    image: "/colorful-salad-with-rainbow-vegetables.jpg",
    rating: 5,
    reviews: 45,
    description:
      "A dazzling rainbow salad with crisp vegetables, nuts, and tangy dressing.",
    badge: "BESTSELLER",
    badgeColor: "bg-[#2d5016]",
  },
  {
    id: "3",
    name: "Skin Glow Salad",
    image: "/fresh-salad-with-berries-and-greens.jpg",
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "4",
    name: "Swaggy Paneer",
    image: "/paneer-salad-with-indian-spices.jpg",
    rating: 5,
    reviews: 50,
    description:
      "Soft paneer cubes with fresh greens, tomatoes, and Indian spices.",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d5016] mb-2">
            The bowls that keep our happy customers coming back
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <button className="w-2 h-2 rounded-full bg-[#2d5016]" />
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400" />
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
