import React from "react";
import happyMascot from "@/assets/happyMascot.png";
import contact from "@/assets/contact.jpg";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import whitelogo from "@/assets/white-logo.png";

const Contact = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="py-8 md:py-12">
        <div className="hidden md:block max-w-7xl mx-auto px-2">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          />
        </div>

        <div className="mt-8 md:mt-12">
          <h1 className="text-[26px] px-1 tracking-tighter md:text-4xl lg:text-5xl font-bold text-[#2F6130] text-center mb-4">
            We'd Love to Hear From You! <br />
            Get in Touch!
          </h1>

          <p className="text-center px-4 text-gray-600 mb-12 max-w-3xl mx-auto text-sm md:text-base">
            Have a question about our protein-packed salads? Need help with your
            order? Or you could tell us how much you loved your Swaggy Paneer.
            We're all ears! Our team is committed to delivering prompt and
            helpful service to you.
          </p>

          <div className="flex gap-8 items-start relative justify-center flex-wrap">
            {/* Left Column - Contact Image */}
            <div className="md:w-[60%] md:h-auto w-full">
              <div className="relative w-full h-64 md:h-80 lg:h-[30rem] md:rounded-r-2xl overflow-hidden">
                <img
                  src={contact}
                  alt="Sprout Bites Contact Us"
                  fill
                  className="object-cover h-full w-full"
                />
                {/* Logo overlay */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24">
                      <img
                        src={whitelogo}
                        alt="Sprout Bites Logo"
                        className="w-32"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form with Mascot */}
            <div className="relative md:w-[35%] md:pr-10 w-full p-4">
              {/* Mascot Character */}
              <div className="absolute -top-24 md:-top-8 -right-0 md:-right-12 lg:-right-4 w-32 h-36 md:w-40 md:h-40">
                <img
                  src={happyMascot}
                  alt="Sprout Bites Mascot"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
