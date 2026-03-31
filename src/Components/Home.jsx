import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white text-neutral-900 overflow-hidden">

      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-16">

        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 md:w-[400px] md:h-[400px] bg-purple-300/20 blur-[100px] rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Tag */}
            <span className="text-xs md:text-sm text-purple-600 font-medium tracking-widest">
              ✨ LUXURY SALON
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
              Redefining Your
              <span className="block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Beauty & Style
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 md:mt-6 text-neutral-600 text-base md:text-lg">
              Experience elegance, precision, and transformation crafted by experts.
              Because you deserve nothing but the best.
            </p>

            {/* CTA */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition"
              >
                Book Appointment
                <ArrowRight size={18} />
              </motion.button>

              <button className="px-6 py-3 rounded-full border border-neutral-300 hover:border-purple-400 hover:text-purple-600 transition">
                View Work
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6 md:mt-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-neutral-600">
                Rated 4.9 by 500+ happy clients
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
              alt="Salon"
              className="rounded-3xl shadow-2xl object-cover w-full h-[350px] sm:h-[450px] md:h-[500px]"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg"
            >
              <p className="text-xs md:text-sm text-neutral-500">
                Premium Care
              </p>
              <h4 className="text-sm md:text-base font-semibold text-purple-600">
                100% Satisfaction
              </h4>
            </motion.div>

            {/* Small Image */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=400&auto=format&fit=crop"
                alt="Makeup"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;