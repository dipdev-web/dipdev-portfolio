"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  Sparkles,
  ShieldCheck,
  Lightbulb
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
 <section className="relative py-28 px-6 text-center overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] top-[-250px] left-1/2 -translate-x-1/2" />
  <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[160px] bottom-[-200px] left-10" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-4xl mx-auto"
  >

    {/* SECTION LABEL (NOT SMALL ANYMORE — PREMIUM TAG) */}
    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-yellow-500 text-xs tracking-[0.3em] uppercase mb-6">
      Who We Are
    </div>

    {/* MAIN TITLE (STRONG + BIG) */}
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
      About <span className="text-yellow-500">us</span>
    </h1>

    {/* SUB TITLE (H3 STYLE BUT MORE POWERFUL) */}
    <h3 className="mt-6 text-xl md:text-2xl font-medium text-gray-200">
      We don’t just build websites — we build digital systems that convert, scale, and perform.
    </h3>

    {/* DESCRIPTION */}
    <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
      Dip Dev is a modern web studio focused on combining strategy, design, and engineering.
      Every project is built with one goal: turning visitors into customers through speed, clarity, and precision.
    </p>

  </motion.div>
</section>

      {/* WHY DIP DEV (FLOW) */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">

  <h2 className="text-3xl md:text-4xl font-bold">
    Why <span className="text-yellow-500">Dip Dev?</span>
  </h2>
  
  <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
    We build systems that are engineered to convert, load fast, and scale.
  </p>

  <div className="mt-12 grid md:grid-cols-2 gap-4">

    {/* LEFT */}
    <div className="flex flex-col gap-4">

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-yellow-500 text-black font-medium shadow-lg">
        Conversion-focused strategy
      </div>

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-white/5 border border-white/10 text-gray-200 backdrop-blur-xl">
        Clean UI systems
      </div>

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-yellow-500 text-black font-medium shadow-lg">
        Mobile-first design
      </div>

    </div>

    {/* RIGHT */}
    <div className="flex flex-col gap-4">

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-white/5 border border-white/10 text-gray-200 backdrop-blur-xl">
        Fast performance optimization
      </div>

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-yellow-500 text-black font-medium shadow-lg">
        SEO-ready architecture
      </div>

      <div className="flex items-center justify-center text-center rounded-full px-6 py-4 bg-white/5 border border-white/10 text-gray-200 backdrop-blur-xl">
        Agency-level quality
      </div>

    </div>

  </div>
</section>
      {/* VALUE PROOF */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">

        {[
          { num: "5+", label: "Completed Projects" },
          { num: "4", label: "Industries Worked In" },
          { num: "24h", label: "Fast Communication" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-yellow-500">{item.num}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.label}</p>
          </motion.div>
        ))}

      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-14 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold">
            What Makes Us <span className="text-yellow-500">Different?</span>
          </h2>

          <p className="text-gray-400 mt-4">
            We design systems, not just websites.
          </p>

          <div className="mt-6 grid gap-2">

            <div className="flex gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
              <Lightbulb className="text-yellow-500" />
              <p className="text-sm text-gray-300">
                UX driven by real user behavior, not trends.
              </p>
            </div>

            <div className="flex gap-3 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
              <Rocket className="text-yellow-500" />
              <p className="text-sm text-gray-200">
                Engineered for speed, scalability, and real-world performance.
              </p>
            </div>

            <div className="flex gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
              <Sparkles className="text-yellow-500" />
              <p className="text-sm text-gray-300">
                Minimal but powerful UI systems.
              </p>
            </div>

            <div className="flex gap-3 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
              <ShieldCheck className="text-yellow-500" />
              <p className="text-sm text-gray-200">
                Built for trust, clarity, and conversion.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="absolute -inset-4 bg-yellow-500/10 blur-[80px] rounded-2xl" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/why-us.png"
              alt="Why Dip Dev"
              width={600}
              height={510}
              className="object-cover w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6 relative">

        <div className="absolute w-[450px] h-[450px] bg-yellow-500/10 blur-[160px] left-1/2 -translate-x-1/2 top-0" />

        <h2 className="text-3xl md:text-5xl font-bold">
          Let’s Build Something <span className="text-yellow-500">Powerful</span>
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Ready to turn your idea into a high-converting website?
        </p>

        <a
  href="https://wa.me/212619831430"
  target="_blank"
  className="relative z-50 pointer-events-auto mt-6 inline-flex px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:scale-105 transition"
>
  Start your project
</a>

      </section>

    </main>
  );
}