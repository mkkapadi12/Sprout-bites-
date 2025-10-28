import React from "react";
import heroBowl from "../assets/hero-salad-bowl.png";
import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#FDFDFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* ============ LEFT CONTENT ============ */}
        <div className="relative z-20">
          <h1 className="text-4xl md:text-7xl font-bold text-[#2d5016]">
            Hungry for health and taste?
          </h1>
          <p className="text-4xl md:text-7xl font-bold mb-6">
            <span className="text-[#f59e0b]">We've got you!</span>
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Freshly picked, thoughtfully prepared, and served with care —
            because health should always taste this good.
          </p>

          <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d97706] transition">
            Explore Food
          </button>
        </div>

        {/* ============ RIGHT IMAGE ============ */}
        <div className="relative flex justify-center md:justify-end z-10">
          <img
            src={heroBowl}
            alt="Fresh Salad Bowl"
            className="w-[90%] md:w-[85%] lg:w-[80%] object-contain drop-shadow-xl"
          />
        </div>

        {/* Decorative Leaves */}
        <img
          src={leaf1}
          alt="Leaf decoration"
          className="absolute top-12 left-[50%] w-16 md:w-32 rotate-90"
        />
        <img
          src={leaf2}
          alt="Leaf decoration"
          className="absolute bottom-[-6%] left-[22%] w-20 md:w-28 -rotate-12"
        />
        <img
          src={leaf3}
          alt="Leaf decoration"
          className="absolute top-[8%] right-[20%] w-20 md:w-32 rotate-[12deg]"
        />
      </div>

      {/* Background soft green swirls (optional aesthetic layer) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] bg-[#E5F4E3] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-[#EAF8E6] rounded-full blur-3xl opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;
