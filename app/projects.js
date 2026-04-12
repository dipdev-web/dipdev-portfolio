"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Skin Care Brand",
      desc: "Luxury skincare website with elegant UI.",
      img: "/1.png",
    },
    {
      title: "Natural Honey Store",
      desc: "Organic honey e-commerce website.",
      img: "/3.png",
    },
    {
      title: "Medical Clinic",
      desc: "Modern clinic with booking system.",
      img: "/2.png",
    },
    {
      title: "Natural Products Store",
      desc: "Eco-friendly online shop.",
      img: "/4.jfif",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-300">Featured</span>{" "}
          <span className="text-yellow-500">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Premium websites designed with modern UI/UX and conversion focus.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group perspective-[1200px]"
          >

            {/* 3D CARD */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 transform transition duration-500 group-hover:rotate-x-6 group-hover:rotate-y-[-6deg] group-hover:scale-[1.03]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* IMAGE */}
              <Image
                src={p.img}
                alt={p.title}
                width={800}
                height={500}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK LAYER */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

              {/* GLOW BORDER */}
              <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500/40 rounded-2xl transition" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">

                <h3 className="text-2xl font-semibold">
                  {p.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  {p.desc}
                </p>

                

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}