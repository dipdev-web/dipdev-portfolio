"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Beauty Brand",
      desc: "Luxury Beauty website with elegant UI.",
      img: "/1.png",
    },
    {
      title: "Real Estate Dashboard",
      desc: "Manage properties, clients, and real estate insights in a single dashboard.",
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
      img: "/5.png",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-300">Featured</span>{" "}
          <span className="text-yellow-500">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Premium websites designed with modern UI/UX and conversion focus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group perspective-[1200px]">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 transform transition duration-500 group-hover:rotate-x-6 group-hover:rotate-y-[-6deg] group-hover:scale-[1.03]" style={{transformStyle: "preserve-3d",}}>
              <Image src={p.img} alt={p.title} width={800} height={500} className="w-full h-[320px] object-contain object-center group-hover:scale-110 transition duration-700 p-2" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
              <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500/40 rounded-2xl transition" />
              <div className="absolute bottom-0 p-6">

                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
            </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}