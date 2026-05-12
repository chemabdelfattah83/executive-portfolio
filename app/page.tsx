"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative text-white min-h-screen overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black animate-pulse opacity-90"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/profile.jpg"
            className="w-56 h-56 rounded-full border-4 border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.4)] object-cover"
          />
          <div className="absolute -inset-2 rounded-full blur-2xl bg-yellow-500 opacity-20"></div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold mt-8 tracking-tight bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text"
        >
          Abdelfattah Ali Eliwa
        </motion.h1>

        {/* TITLE (SPECIALIST) */}
        <div className="mt-5 space-y-2">
          <p className="text-yellow-400 tracking-[4px] uppercase text-lg md:text-xl font-semibold">
            Senior Operations & Commissioning Specialist
          </p>

          <p className="text-gray-400 tracking-[3px] uppercase text-sm md:text-base">
            Refinery • Gas Processing • Petrochemical Plants
          </p>
        </div>

        {/* Summary */}
        <p className="max-w-3xl text-gray-300 mt-8 leading-8 text-lg">
          Senior Oil & Gas professional with 20+ years of experience in refinery,
          gas processing, petrochemical plants, commissioning, startup, and
          operational excellence across international mega projects.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <a
            href="/CV.pdf"
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition shadow-lg shadow-yellow-500/30"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition backdrop-blur-md bg-white/5"
          >
            Contact
          </a>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-6 mt-14 text-center text-sm text-gray-400">
          <div>
            <p className="text-yellow-400 text-2xl font-bold">20+</p>
            Years
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">15+</p>
            Projects
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">5</p>
            Countries
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="px-8 md:px-24 py-24 relative">

        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-10">
          Executive Profile
        </h2>

        <div className="backdrop-blur-md bg-white/5 border border-zinc-800 p-10 rounded-3xl shadow-2xl">
          <p className="text-gray-300 leading-9 text-lg">
            Proven leader in upstream and downstream operations with strong expertise
            in commissioning, troubleshooting, plant optimization, shutdown/startup
            management, and operational excellence. Recognized for delivering safe,
            reliable, and high-performance plant operations across global projects.
          </p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-8 md:px-24 py-24">

        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-14">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Operations Leadership",
              desc: "Refinery & gas processing operations with focus on safety, reliability & optimization."
            },
            {
              title: "Commissioning & Start-Up",
              desc: "Pre-commissioning, commissioning, performance testing and operational readiness."
            },
            {
              title: "EPC Mega Projects",
              desc: "Large-scale refinery, utilities and petrochemical project execution."
            },
            {
              title: "Team Leadership",
              desc: "Leading multinational teams and building operational excellence culture."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-md hover:border-yellow-500 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-24 py-24 text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-10">
          Contact
        </h2>

        <div className="backdrop-blur-md bg-white/5 border border-zinc-800 rounded-3xl p-10 text-gray-300 space-y-3 text-lg">
          <p>📍 Bahrain: +973 3702 6658</p>
          <p>📍 Egypt: +20 101 901 7235</p>
          <p>📧 chem.abdelfattah83@gmail.com</p>
        </div>

        <p className="text-gray-600 mt-10 text-sm">
          © 2026 Executive Portfolio | Designed for Leadership Impact
        </p>

      </section>

    </main>
  );
}