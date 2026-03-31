import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Hair Styling",
    desc: "A great hairstyle is more than just a look — it's a reflection of your personality. Our expert stylists craft styles that suit you perfectly.",
    price: "₹300 – ₹1500",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Skin Care",
    desc: "Relaxing treatments that nourish your skin, restore glow, and leave you refreshed with a radiant appearance.",
    price: "₹500 – ₹2500",
    img: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bridal Makeup",
    desc: "Flawless, long-lasting bridal makeup tailored to make your special day unforgettable.",
    price: "₹5000+",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  },
];

const Services = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  // smoother auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-neutral-900 flex flex-col items-center justify-center py-16 px-6 md:px-20">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Our Services
      </h1>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="h-[250px] sm:h-[350px] md:h-[420px]">
                <img
                  src={services[index].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {services[index].title}
                </h2>

                <p className="text-neutral-600 mb-3 text-sm md:text-base leading-relaxed">
                  {services[index].desc}
                </p>

                <p className="text-purple-600 font-medium mb-5">
                  {services[index].price}
                </p>

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full w-fit transition">
                  Book Now
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-6">

        <button
          onClick={prev}
          className="px-4 py-2 border border-neutral-300 rounded-full text-sm hover:border-purple-500 hover:text-purple-600 transition"
        >
          Prev
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "bg-purple-600 w-5" : "bg-neutral-300 w-2"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-4 py-2 border border-neutral-300 rounded-full text-sm hover:border-purple-500 hover:text-purple-600 transition"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default Services;