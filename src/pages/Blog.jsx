import React, { useState } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BlogCard from "@/components/BlogCard";
import { Pagination } from "@/helper/Pagination";

const BLOGS_PER_PAGE = 6;

const blogPosts = [
  {
    id: "1",
    image: "/crisp-colorful-garden-fresh-salad.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt:
      "Discover the perfect blend of fresh vegetables and healthy ingredients.",
  },
  {
    id: "2",
    image: "/fresh-tomato-salad-bowl.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "Experience the taste of freshly picked vegetables in every bite.",
  },
  {
    id: "3",
    image: "/berry-fruit-salad-with-cream.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "A delightful mix of berries and fresh fruits for your health.",
  },
  {
    id: "4",
    image: "/crisp-colorful-garden-fresh-salad.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt:
      "Discover the perfect blend of fresh vegetables and healthy ingredients.",
  },
  {
    id: "5",
    image: "/fresh-tomato-salad-bowl.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "Experience the taste of freshly picked vegetables in every bite.",
  },
  {
    id: "6",
    image: "/berry-fruit-salad-with-cream.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "A delightful mix of berries and fresh fruits for your health.",
  },
  {
    id: "7",
    image: "/crisp-colorful-garden-fresh-salad.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt:
      "Discover the perfect blend of fresh vegetables and healthy ingredients.",
  },
  {
    id: "8",
    image: "/fresh-tomato-salad-bowl.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "Experience the taste of freshly picked vegetables in every bite.",
  },
  {
    id: "9",
    image: "/berry-fruit-salad-with-cream.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt: "A delightful mix of berries and fresh fruits for your health.",
  },
  {
    id: "10",
    image: "/crisp-colorful-garden-fresh-salad.jpg",
    date: "27 August 2025",
    title: "Crisp & Colorful Garden Fresh Delight - A Bowl of Goodness",
    excerpt:
      "Discover the perfect blend of fresh vegetables and healthy ingredients.",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = blogPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="md:block hidden">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
        </div>

        <div className="mt-8 md:mt-12">
          <h1 className="text-4xl md:text-[60px] font-bold text-[#2F6130] text-center mb-12">
            Healthy Reads, Freshly Served
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default Blog;
