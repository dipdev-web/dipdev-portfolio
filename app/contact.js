"use client";

import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.name.length > 2 &&
    form.email.includes("@") &&
    form.message.length > 5;

  const whatsappMessage = `
Hello Dip Dev 👋
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
`;

  return (
    <section className="bg-black text-white py-28 px-6 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[160px] bottom-[-200px] right-[-200px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Build Something{" "}
            <span className="text-yellow-500">Powerful</span>
          </h2>

          <p className="text-gray-400">
            Turn your idea into a high-converting website that brings clients and revenue.
          </p>

          <div className="space-y-2 text-gray-400 text-sm">
            <p>✔ Response within 24h</p>
            <p>✔ Premium UI/UX design</p>
            <p>✔ Fast & optimized websites</p>
          </div>

        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl"
        >

          <h3 className="text-2xl font-bold text-center mb-6">
            Contact <span className="text-yellow-500">Us</span>
          </h3>

          <AnimatePresence mode="wait">

            {!sent ? (

              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >

                {/* NAME */}
                <div className="flex items-center gap-3 bg-black/40 border border-white/10 p-3 rounded-xl mb-4 focus-within:border-yellow-500">
                  <PersonIcon className="text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-transparent w-full outline-none text-white"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-3 bg-black/40 border border-white/10 p-3 rounded-xl mb-4 focus-within:border-yellow-500">
                  <EmailIcon className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-transparent w-full outline-none text-white"
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex items-start gap-3 bg-black/40 border border-white/10 p-3 rounded-xl mb-6 focus-within:border-yellow-500">
                  <MessageIcon className="text-gray-400 mt-2" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    className="bg-transparent w-full outline-none text-white resize-none"
                  />
                </div>

                {/* ONLY ONE BUTTON (WA FLOW) */}
                <a
                  href={`https://wa.me/212619831430?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                    isValid
                      ? "bg-yellow-500 text-black hover:scale-105"
                      : "bg-gray-700 text-gray-400 pointer-events-none"
                  }`}
                >
                  <WhatsAppIcon />
                  Send Message
                </a>

              </motion.div>

            ) : null}

          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}