import React from "react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blogs/blog1.jpg";

const BlogCard = ({ id, image, date, title, excerpt }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative w-full h-48 md:h-64 lg:h-72">
        <img
          src={blog1 || "/placeholder.svg"}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 md:px-2 md:py-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg md:text-xl font-bold text-[#262626] mb-3 line-clamp-2">
          {title}
        </h3>
        {!excerpt && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        )}
        <Link
          to={`/blog/${id}`}
          className="text-[#2F6130] font-semibold underline mt-auto"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
