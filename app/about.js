"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 px-6 text-center">

        {/* 3D GLOW BACKGROUND */}
        <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] top-[-250px] left-1/2 -translate-x-1/2" />
        <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[160px] bottom-[-200px] left-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            About <span className="text-yellow-500">Dip Dev</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            We craft high-performance digital experiences that turn ideas into
            real business results — fast, modern, and conversion-focused.
          </p>

        </motion.div>
      </section>

      {/* STORY (3D LAYOUT) */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-bold">
            Our <span className="text-yellow-500">Story</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Dip Dev was created with one goal: build websites that don't just
            look good — but actually convert visitors into clients.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            We combine design, speed, and strategy to help businesses grow
            online and stand out in a competitive digital world.
          </p>

        </motion.div>

        {/* IMAGE 3D CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.03]">

            <Image
              src="/about.png"
              alt="About Dip Dev"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />

            {/* overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          </div>

        </motion.div>
      </section>

      {/* STATS 3D CARDS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {[
          { num: "5+", label: "Projects" },
          { num: "4", label: "Industries" },
          { num: "Fast", label: "Delivery" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold text-yellow-500">
              {item.num}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}

      </section>

      {/* WHY US */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2 className="text-4xl font-bold">
            Why <span className="text-yellow-500">Choose Us?</span>
          </h2>

          <ul className="mt-6 space-y-4 text-gray-300">
            {[
              "Modern UI/UX design",
              "Fast performance optimization",
              "Mobile responsive layouts",
              "Conversion-focused structure",
              "Agency-level quality"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> {item}
              </li>
            ))}
          </ul>

        </motion.div>

        {/* 3D IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: -1 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >

          <Image
            src="/why-us.png"
            alt="Why Us"
            width={600}
            height={500}
            className="object-cover w-full"
          />

        </motion.div>

      </section>

      {/* CTA FINAL */}
      <section className="py-28 text-center px-6 relative">

        <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] left-1/2 -translate-x-1/2 top-0" />

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to build your <span className="text-yellow-500">website?</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Let’s turn your idea into a high-converting digital product.
        </p>

      

      </section>

    </main>
  );
}