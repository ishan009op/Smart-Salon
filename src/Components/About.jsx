import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-neutral-900 px-6 md:px-20 py-16 md:py-20">

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop"
            alt="Salon"
            className="rounded-3xl shadow-2xl w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover"
          />

          {/* Small Overlay Image */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=400&auto=format&fit=crop"
              alt="Work"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg">
            <p className="text-xs md:text-sm text-neutral-500">Since</p>
            <h4 className="text-sm md:text-base font-semibold text-purple-600">
              2018
            </h4>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <span className="text-xs md:text-sm text-purple-600 font-medium tracking-widest">
            ABOUT US
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Crafting Beauty With
            <span className="block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Passion & Precision
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 md:mt-6 text-neutral-600 text-base md:text-lg">
            At Smart Salon, we believe beauty is an art. Our team of experts
            combines creativity with precision to deliver exceptional results.
            From styling to skincare, every service is designed to elevate your
            confidence.
          </p>

          {/* Features */}
          <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                <Award size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  Certified Professionals
                </h4>
                <p className="text-xs md:text-sm text-neutral-600">
                  Highly trained experts delivering top-tier service.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                <Users size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  500+ Happy Clients
                </h4>
                <p className="text-xs md:text-sm text-neutral-600">
                  Trusted by hundreds for quality and care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  Premium Products
                </h4>
                <p className="text-xs md:text-sm text-neutral-600">
                  We use only high-quality, skin-safe products.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;