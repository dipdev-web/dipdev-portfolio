"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/logo.png"   
          alt="hero"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* CONTENT */}
      <div className="text-center z-10 px-6">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-widest"
        >
          <span className="text-gray-300">Dip</span>
          <span className="text-yellow-500">Dev</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-4 max-w-xl mx-auto"
        >
          We design & build high-end websites that convert ideas into money.
          Premium, fast, and conversion-focused digital experiences.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >

         <a
  href="https://github.com/dipdev-web"
  target="_blank"
  className="group px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2"
>
  View Projects
</a>

          <a
            href="https://wa.me/212619831430"
            target="_blank"
            className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
          >
            Hire Me
          </a>

        </motion.div>

        {/* SMALL TRUST LINE */}
        <p className="text-xs text-gray-500 mt-6">
          Trusted for premium websites & digital brands
        </p>

      </div>
    </section>
  );
}