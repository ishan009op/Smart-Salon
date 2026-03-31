import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - VISUAL + MESSAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop"
            alt="Salon"
            className="rounded-4xl shadow-2xl object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 rounded-4xl flex items-end p-8">
            <div>
              <h2 className="text-white text-3xl font-bold">
                Let’s Create Your Perfect Look
              </h2>
              <p className="text-white/80 mt-2">
                Book your appointment and experience premium care.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - MINIMAL FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          {/* Heading */}
          <div>
            <h2 className="text-4xl font-bold">
              Book Appointment
            </h2>
            <p className="text-neutral-600 mt-2">
              Fill in your details and we’ll get back to you shortly.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 border-b border-neutral-300 focus:outline-none focus:border-purple-600 transition bg-transparent"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-5 py-3 border-b border-neutral-300 focus:outline-none focus:border-purple-600 transition bg-transparent"
            />

            <select className="w-full px-5 py-3 border-b border-neutral-300 focus:outline-none focus:border-purple-600 bg-transparent">
              <option>Select Service</option>
              <option>Hair Styling</option>
              <option>Skin Care</option>
              <option>Bridal Makeup</option>
            </select>

            <button
              type="submit"
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full transition"
            >
              Confirm Booking
            </button>

          </form>

          {/* ALT CTA */}
          <div className="text-center pt-4">
            <p className="text-sm text-neutral-500">
              Prefer calling?
            </p>
            <a
              href="tel:+919876543210"
              className="text-purple-600 font-medium"
            >
              +91 98765 43210
            </a>
          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Contact;