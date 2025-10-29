import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import whitelogo from "../../assets/white-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#2F6130] text-white text-sm py-2 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0">
          <span>
            Har Bite Tasty, Har Bowl Healthy, Ne Har Order Par Kindness.
          </span>
          <span>Order now (+91) 9429488145</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Sprout Bites"
              className="w-[92px] h-[72px] object-contain"
            />
          </Link>
          <div className="flex gap-6 items-center justify-center">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#2d5016] transition font-medium"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-gray-700 hover:text-[#2d5016] transition font-medium"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#2d5016] transition font-medium"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-[#2d5016] transition font-medium"
              >
                Blog
              </Link>
            </nav>

            {/* Contact Button (Desktop) */}
            <Link to="/contact">
              <button className="hidden md:block bg-[#F59E0B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d97706] transition">
                Contact Us
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#2F6130]"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#2F6130] text-white z-50 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <img
              src={whitelogo}
              alt="Sprout Bites"
              className="w-[92px] h-[72px] object-contain"
            />
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col mt-4">
            {["Home", "Menu", "About Us", "Blog", "Contact Us"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  to={`/${
                    item === "Home" ? "" : item.toLowerCase().replace(" ", "")
                  }`}
                  className="px-6 py-4 text-lg hover:bg-white hover:text-[#2F6130] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
