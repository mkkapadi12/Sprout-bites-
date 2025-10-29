import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import menuitem from "../assets/menuitem.png";

export function ProductCard({
  id,
  name,
  image,
  rating,
  reviews,
  description,
  badge,
  badgeColor = "bg-[#2d5016]",
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Image Container */}
      <div className="relative flex items-center justify-center top-12">
        <img
          src={menuitem}
          alt={name}
          className="w-[85%] h-full object-cover rotate-[65deg]"
        />
        {badge && (
          <div
            className={`absolute top-3 right-3 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {badge}
          </div>
        )}
        {/* Favorite Badge */}
        <div className="absolute  bottom-6 right-16 bg-[#f59e0b] text-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
          <span className="text-xl font-bold">50</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 bg-[#f9f9f9] py-12 rounded-xl">
        <h3 className="font-bold text-lg text-[#2d5016] mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(rating)
                    ? "fill-[#f59e0b] text-[#f59e0b]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviews})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <button className="bg-[#f59e0b] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#d97706] transition">
            Order Now
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <Heart
              size={20}
              className={
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
