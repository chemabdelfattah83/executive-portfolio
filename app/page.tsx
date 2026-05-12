"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-900 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-yellow-400 font-bold tracking-widest">
            AE EXECUTIVE
          </h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#experience" className="hover:text-yellow-400">Experience</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),transparent_60%)]" />

        <div className="relative z-10">

          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/profile.jpg"
            className="w-60 h-60 rounded-full mx-auto border-4 border-yellow-500 shadow-2xl object-cover"
          />

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mt-8"
          >
            Abdelfattah Ali Eliwa
          </motion.h1>

          <p className="text-yellow-400 tracking-[8px] uppercase mt-4">
            Operations & Commissioning Executive
          </p>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">
            20+ years delivering operational excellence across refinery,
            gas processing, petrochemical plants and EPC mega projects
            with a focus on safety, reliability and performance.
          </p>

          <div className="flex gap-6 justify-center mt-10 flex-wrap">
            <a href="/CV.pdf" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Download CV
            </a>
            <a href="#contact" className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition">
              Contact
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Executive Profile
        </h2>

        <p className="text-gray-400 leading-9 text-lg">
          Senior Operations & Commissioning professional with proven experience
          in leading large-scale refinery and gas processing operations.
          Strong expertise in start-up, shutdown, troubleshooting,
          plant optimization and operational excellence systems implementation.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-14">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              { t: "Operations Leadership", d: "Refinery & gas plants optimization, safety and reliability leadership." },
              { t: "Commissioning", d: "Pre-commissioning, commissioning, startup & performance testing." },
              { t: "EPC Projects", d: "Mega projects execution in oil, gas & petrochemical sectors." },
              { t: "Team Leadership", d: "Managing multinational teams and operational excellence culture." }
            ].map((i, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold text-white">{i.t}</h3>
                <p className="text-gray-400 mt-4 leading-7">{i.d}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Global Industrial Impact
        </h2>

        <div className="max-w-4xl mx-auto text-gray-400 leading-9">
          Delivered operational excellence across multiple international
          sites in Middle East and Africa, improving plant reliability,
          reducing downtime, and leading safe commissioning practices
          in complex hydrocarbon environments.
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-950 py-24 text-center px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Contact
        </h2>

        <div className="text-gray-300 space-y-3">
          <p>📍 Bahrain: +973 3702 6658</p>
          <p>📍 Egypt: +20 101 901 7235</p>
          <p>📧 chem.abdelfattah83@gmail.com</p>
        </div>

        <p className="text-gray-600 mt-10 text-sm">
          © 2026 Executive Portfolio | Fortune-Level Design
        </p>
      </section>

    </main>
  );
}
