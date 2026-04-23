"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "Discover", text: "We understand your idea" },
    { title: "Design", text: "We create clean UI/UX" },
    { title: "Develop", text: "We build fast websites" },
    { title: "Test", text: "We optimize everything" },
    { title: "Launch", text: "We deliver & support" }
  ];

  return (
    <section className="py-24 bg-black text-white text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Our Process
      </h2>

      <div className="max-w-6xl mx-auto px-6">

        {/* LINE */}
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-[2px] bg-yellow-500/30"></div>

          <div className="flex justify-between">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center w-1/5"
              >

                {/* NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold z-10">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-yellow-500 font-semibold">
                  {step.title}
                </h3>

                {/* TEXT */}
                <p className="text-gray-400 text-sm mt-2 px-2">
                  {step.text}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}