"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    {name: "TeckStack", href: "#tackstack"}
  ];

  return (
    <>
      <motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
>
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

    {/* LOGO (LEFT) */}
    <div className="flex items-center">
      <a href="#home">
        <Image
          src="/logo1.png"
          alt="Dip Dev Logo"
          width={80}
          height={22}
          className="object-contain"
          priority
        />
      </a>
    </div>

    {/* DESKTOP LINKS (CENTER) */}
    <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="hover:text-yellow-500 transition"
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      {/* CTA (DESKTOP ONLY) */}
      <a
        href="https://wa.me/212619831430"
        target="_blank"
        className="hidden md:inline-flex bg-yellow-500 text-black px-4 py-1.5 text-sm rounded-lg font-medium hover:scale-105 transition"
      >
        Start your project
      </a>

      {/* HAMBURGER (ALWAYS RIGHT) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white ml-auto cursor-pointer"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

    </div>

  </div>
</motion.nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <>
            {/* dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            {/* MENU */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 w-full z-50 md:hidden bg-black border-t border-white/10"
            >
              <div className="flex flex-col items-center gap-6 py-8 text-gray-300">

                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-500 transition text-lg"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="https://wa.me/212619831430"
                  target="_blank"
                  className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
                >
                  Start your project
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}