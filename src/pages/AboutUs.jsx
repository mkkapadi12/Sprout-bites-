import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import aboutMission from "../assets/aboutMission.jpg";
import whitelogo from "../assets/white-logo.png";
import arrow from "../assets/arrow.jpg";

const About = () => {
  return (
    <main>
      <section className="py-12">
        <div className=" mx-auto">
          <div className="max-w-7xl mx-auto p-2 md:block hidden">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            />
          </div>

          {/* Hero Section */}
          <div className="mb-16 max-w-7xl mx-auto p-2">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2d5016] text-center mb-8">
              More Than a Salad, It's a Mission for Health
            </h1>

            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
              <img
                src={aboutMission}
                alt="Sprout Bites Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <div className="w-28">
                      <img
                        src={whitelogo}
                        alt="Sprout Bites Logo"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Content */}
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our journey began with a simple yet powerful mission: to make
                  health accessible and delicious. We started as a small team of
                  health enthusiasts who believed that eating well shouldn't be
                  complicated or boring.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, Sprout Bites has become the only healthy option a wide
                  source of proteins, minerals, and essential nutrients. We're
                  committed to changing that perception. Our mission is to prove
                  that nutritious food can be exciting, satisfying, and
                  absolutely delicious.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className=" overflow-hidden w-full mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Vision Image */}
              <div className="w-full md:h-auto">
                <img
                  src={arrow}
                  alt="Our Vision"
                  className="w-full h-full object-cover md:rounded-r-2xl"
                />
              </div>

              {/* Vision Content */}
              <div className="p-3 md:p-12 text-gray-700">
                <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#2F6130] md:text-start text-center">
                  Our Vision
                </h2>
                <p className="md:text-lg leading-relaxed mb-6 md:text-start text-center">
                  We envision a future where healthy eating is not a luxury but
                  a lifestyle choice accessible to everyone. Our vision is to
                  transform the way people think about food and wellness.
                </p>
                <p className="md:text-lg leading-relaxed mb-6 md:text-start text-center">
                  We are determined to change that perception. Our mission is to
                  prove that nutritious food can be exciting, satisfying, and
                  absolutely delicious. We believe that when you nourish your
                  body with wholesome ingredients, you're investing in your
                  future.
                </p>
                <p className="md:text-lg leading-relaxed mb-6 md:text-start text-center">
                  We are determined to change that perception. Our mission is to
                  prove that nutritious food can be exciting, satisfying, and
                  absolutely delicious. We believe that when you nourish your
                  body with wholesome ingredients, you're investing in your
                  future.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#2d5016] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🥗</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d5016] mb-3">Quality</h3>
              <p className="text-gray-700">
                We source only the freshest, highest-quality ingredients to
                ensure every bowl is nutritious and delicious.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d5016] mb-3">Health</h3>
              <p className="text-gray-700">
                Your wellness is our priority. Every bowl is crafted to nourish
                your body and support your health goals.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#2d5016] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d5016] mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to eco-friendly practices and reducing our
                environmental impact for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
