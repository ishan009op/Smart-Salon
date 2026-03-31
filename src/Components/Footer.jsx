import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-6 md:px-16 py-16">

      <div className="grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
            Smart Salon
          </h2>
          <p className="text-neutral-400 mt-4 max-w-sm">
            Premium salon experience focused on style, comfort, and confidence.
            We believe beauty is not just seen — it’s felt.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/reviews" className="hover:text-white transition">Reviews</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-neutral-400">
            <p>📍 Karimpur, Punjab</p>
            <p>📞 +91 98765 43210</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="p-2 bg-neutral-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 bg-neutral-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://wa.me/919876543210"
              className="p-2 bg-neutral-800 rounded-full hover:bg-green-500 transition"
            >
              <FaWhatsapp size={18} />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Smart Salon. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;