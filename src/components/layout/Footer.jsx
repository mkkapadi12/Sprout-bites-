import React from "react";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Music2,
  Youtube,
  Linkedin,
  Pin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import whitelogo from "../../assets/white-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F6130] text-white">
      {/* CTA Section */}
      <div className="bg-[#2F6130] px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Section - CTA */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Start your health journey with a free diet consultation
              </h2>
              <div>
                <button className="bg-[#F4A259] hover:bg-[#F4A259]/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Section - Links and Contact */}
            <div className="md:grid md:grid-cols-2 gap-8 md:gap-12 flex">
              {/* Links Column */}
              <div>
                <h3 className="font-semibold mb-4 text-lg">Menu</h3>
                <nav className="space-y-3">
                  <Link
                    to="/menu"
                    className="block hover:text-accent transition-colors"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/about"
                    className="block hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/blog"
                    className="block hover:text-accent transition-colors"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/contact"
                    className="block hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* Contact Column */}
              <div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-lg">Call Us :</h3>
                  <a
                    to="tel:+919429488145"
                    className="hover:text-accent transition-colors"
                  >
                    +91 9429488145
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Mail Us :</h3>
                  <a
                    to="mailto:thesproutbites@gmail.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    thesproutbites@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-8 md:mt-12">
            <a
              href="https://wa.me/919429488145"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Spotify"
            >
              <Music2 className="w-6 h-6" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Pinterest"
            >
              <Pin className="w-6 h-6" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="px-4 py-8 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-24">
                <img src={whitelogo} alt="Sprout Bites Logo" className="w-32" />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white/80 md:text-right">
              <p>
                Copyright © {currentYear} Sprout bites (Pty) Ltd - All Rights
                Reserved!
              </p>
              <p>
                Design & Developed by{" "}
                <a
                  to="https://hkinfoway.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  HKinfoway Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
