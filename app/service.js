"use client";

import { motion } from "framer-motion";

import LanguageIcon from "@mui/icons-material/Language";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function Services() {
  const services = [
    {
      icon: <LanguageIcon fontSize="large" />,
      title: "Business Websites",
      desc: "Professional websites for companies, agencies & brands.",
    },
    {
      icon: <StorefrontIcon fontSize="large" />,
      title: "Restaurants & Shops",
      desc: "Modern websites for restaurants, cafés & local businesses.",
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: "Custom Design",
      desc: "Unique UI/UX design tailored to your brand identity.",
    },
    {
      icon: <RocketLaunchIcon fontSize="large" />,
      title: "High Conversion",
      desc: "Websites optimized to turn visitors into clients.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-300">Our</span>{" "}
          <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          We build powerful digital experiences for every type of business.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.07,
              rotateX: 6,
              rotateY: -6,
            }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-yellow-500/30 to-white/10"
          >

            {/* INNER CARD */}
            <div className="bg-black rounded-2xl p-6 text-center h-full hover:bg-white/5 transition">

              {/* ICON */}
              <div className="text-yellow-500 mb-4 flex justify-center animate-pulse">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}