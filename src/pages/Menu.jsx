import React from "react";

import ProductCard from "@/components/ProductCard";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import menuitem from "../assets/menuitem.png";

const allProducts = [
  {
    id: "1",
    name: "Protein-Packed Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "A hearty blend of spinach, grilled chicken, chickpeas, and fresh vegetables.",
  },
  {
    id: "2",
    name: "Chakra Crunch",
    image: menuitem,
    rating: 5,
    reviews: 45,
    description:
      "A dazzling rainbow salad with crisp vegetables, nuts, and tangy dressing.",
    badge: "NEW",
    badgeColor: "bg-[#2d5016]",
  },
  {
    id: "3",
    name: "Skin Glow Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "4",
    name: "Swaggy Paneer",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Soft paneer cubes with fresh greens, tomatoes, and Indian spices.",
  },
  {
    id: "5",
    name: "Protein-Packed Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "A hearty blend of spinach, grilled chicken, chickpeas, and fresh vegetables.",
  },
  {
    id: "6",
    name: "Skin Glow Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "7",
    name: "Skin Glow Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "8",
    name: "Swaggy Paneer",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Soft paneer cubes with fresh greens, tomatoes, and Indian spices.",
  },
  {
    id: "9",
    name: "Protein-Packed Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "A hearty blend of spinach, grilled chicken, chickpeas, and fresh vegetables.",
  },
  {
    id: "10",
    name: "Skin Glow Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "11",
    name: "Skin Glow Salad",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Antioxidant-rich salad with berries, leafy greens, and superfoods.",
  },
  {
    id: "12",
    name: "Swaggy Paneer",
    image: menuitem,
    rating: 5,
    reviews: 50,
    description:
      "Soft paneer cubes with fresh greens, tomatoes, and Indian spices.",
  },
];

const Menu = () => {
  return (
    <main>
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Menu" }]}
          />

          {/* Section Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">
              See Everything We Serve
            </h1>
            <p className="text-lg text-gray-600">
              Explore our complete menu of fresh, healthy salad bowls
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
