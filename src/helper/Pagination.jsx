import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-8 md:mt-12 flex-wrap">
      <Link
        href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
          currentPage > 1
            ? "text-primary hover:bg-gray-100"
            : "text-gray-300 cursor-not-allowed"
        }`}
      >
        <ChevronLeft size={18} />
        <span className="hidden sm:inline">Previous</span>
      </Link>

      <div className="flex gap-1 flex-wrap justify-center">
        {pages.map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="px-2 py-2 text-gray-500">...</span>
            ) : (
              <Link
                href={`?page=${page}`}
                className={`px-3 py-2 rounded-lg transition-colors font-medium ${
                  currentPage === page
                    ? "bg-accent text-white"
                    : "text-primary hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            )}
          </div>
        ))}
      </div>

      <Link
        to={currentPage < totalPages ? `?page=${currentPage + 1}` : "#"}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
          currentPage < totalPages
            ? "text-primary hover:bg-gray-100"
            : "text-gray-300 cursor-not-allowed"
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={18} />
      </Link>
    </div>
  );
}
