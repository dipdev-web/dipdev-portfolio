"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-black border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT EMPTY (BALANCE) */}
        <div className="w-1/3"></div>

        {/* LOGO (CLICKABLE HOME) */}
        <div className="w-1/3 flex justify-center">
          <button
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-xl font-bold tracking-widest cursor-pointer"
          >
            <span className="text-gray-300">Dip</span>
            <span className="text-yellow-500">Dev</span>
          </button>
        </div>

        {/* RIGHT CTA */}
        <div className="w-1/3 flex justify-end">
          <a
            href="https://wa.me/212619831430"
            target="_blank"
            className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition cursor-pointer"
          >
            Hire Me
          </a>
        </div>

      </div>
    </motion.nav>
  );
}