"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">

      <div className="absolute inset-0">
        <img src="/logo.png" alt="hero" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="text-center z-10 px-6">

        {/* BADGE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-block px-4 py-1 border border-white/20 rounded-full text-xs text-gray-300">
          Web Developer & UI Designer
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-white">We build websites that</span><br />
          <span className="text-yellow-500">convert visitors into clients</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 mt-6 max-w-xl mx-auto">
          High-end, fast, and modern websites designed to grow your business and elevate your brand.
        </motion.p>

        {/* BUTTONS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex gap-4 justify-center">
          
          <a href="https://github.com/dipdev-web" target="_blank" className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </a>

          <a href="https://wa.me/212619831430" target="_blank" className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition">
            Start Now
          </a>

        </motion.div>

        {/* STATS (NEW) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex justify-center gap-8 text-sm text-gray-400">
          <div><span className="text-white font-bold">5+</span> Projects</div>
          <div><span className="text-white font-bold">100%</span> Responsive</div>
          <div><span className="text-white font-bold">Fast</span> Performance</div>
        </motion.div>

      </div>
    </section>
  );
}