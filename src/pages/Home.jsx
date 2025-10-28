import React from "react";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/Products-section";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProductsSection />
    </main>
  );
};
export default Home;
