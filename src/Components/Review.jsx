import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    work: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    review:
      "The transformation was exactly what I was hoping for. The team understood my style and delivered a look that felt natural and elegant.",
  },
  {
    name: "Rohit Verma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    work: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    review:
      "Very professional service. I came in for a simple haircut and left with a completely refreshed look. Highly recommended.",
  },
  {
    name: "Simran Kaur",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    work: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    review:
      "Loved the skincare session. The results were visible instantly and the experience was extremely relaxing.",
  },
];

const Review = () => {
  return (
    <div className="bg-white text-neutral-900 px-6 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          Real Results, Real Reviews
        </h2>
        <p className="text-neutral-600 mt-4">
          See the work and hear directly from our clients.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {reviews.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >

            {/* WORK IMAGE */}
            <div className="h-55 overflow-hidden">
              <img
                src={item.work}
                alt="Client Work"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* Profile */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-sm">{item.name}</h4>

                  {/* Stars */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.review}
              </p>

              {/* Accent */}
              <div className="mt-5 h-0.5 w-8 bg-purple-600 rounded-full"></div>

            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Review;