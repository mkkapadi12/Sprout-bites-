import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link to={item.href} className="hover:text-[#2d5016] transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#2d5016] font-semibold">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight size={16} />}
        </div>
      ))}
    </nav>
  );
}
