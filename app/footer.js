"use client";

import Link from "next/link";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest">
            <span className="text-gray-300">Dip</span>
            <span className="text-yellow-500">Dev</span>
          </h2>

          <p className="mt-3 text-sm">
            We build high-end websites that convert ideas into money.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>

          <Link href="/" className="hover:text-white transition">Home</Link>
          
        </div>

        {/* SOCIALS + EMAIL */}
        <div className="flex flex-col items-center md:items-start gap-4">

          <h3 className="text-white font-semibold">Connect</h3>

          <div className="flex gap-4 text-2xl justify-center md:justify-start">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dip.dev.contact@gmail.com&su=Website%20Project%20Request"
              target="_blank"
              title="Email"
              className="hover:text-yellow-500 transition hover:scale-110"
            >
              <EmailIcon fontSize="inherit" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dipdev.web/"
              target="_blank"
              title="Instagram"
              className="hover:text-pink-500 transition hover:scale-110"
            >
              <InstagramIcon fontSize="inherit" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dip-dev-1432b4402/"
              target="_blank"
              title="LinkedIn"
              className="hover:text-blue-500 transition hover:scale-110"
            >
              <LinkedInIcon fontSize="inherit" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dipdev-web"
              target="_blank"
              title="GitHub"
              className="hover:text-white transition hover:scale-110"
            >
              <GitHubIcon fontSize="inherit" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212619831430"
              target="_blank"
              title="WhatsApp"
              className="hover:text-green-500 transition hover:scale-110"
            >
              <WhatsAppIcon fontSize="inherit" />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-4 text-xs">
        © 2026 <span className="text-yellow-500">Dip Dev</span>. All rights reserved.
      </div>

    </footer>
  );
}