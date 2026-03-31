import React, { useState } from "react";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Reviews", href: "/reviews" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-6 md:px-10 py-4 bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50"
    >
      {/* Logo */}
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
        Smart Salon
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <li
            key={index}
            className="relative text-neutral-800 font-medium cursor-pointer group"
          >
            <a href={link.href} className="hover:text-purple-600 transition">
              {link.title}
            </a>

            {/* underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-sm font-medium text-neutral-800 hover:text-purple-600 border border-neutral-200 transition">
          <Phone size={16} />
          Call Now
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full shadow-md transition"
        >
          <Calendar size={18} />
          Book Now
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 md:hidden"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-neutral-800 text-lg hover:text-purple-600 transition"
              >
                {link.title}
              </a>
            ))}

            {/* Mobile Buttons */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium border border-neutral-200">
              <Phone size={16} />
              Call Now
            </button>

            <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full">
              <Calendar size={18} />
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;