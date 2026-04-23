"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMysql } from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Technologies We Use
      </motion.h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        We use modern tools and technologies to build fast, scalable and high-performing websites.
      </p>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">

        {tech.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-yellow-500 transition"
          >
            <div className="text-3xl text-yellow-500">
              {item.icon}
            </div>

            <p className="text-sm font-medium">
              {item.name}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}