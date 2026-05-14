"use client";

import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />

        <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-10 scale-110" />
      </div>

      {/* ================= HEADER ================= */}
      <header className="relative z-10 px-6 md:px-20 py-10 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-bold tracking-[6px] text-yellow-400"
        >
          EXECUTIVE CV
        </motion.h1>

        <a
          href="/CV.pdf"
          target="_blank"
          className="px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          Open PDF
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative z-10 px-6 md:px-20 pt-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-2xl bg-white/5 border border-zinc-800 rounded-3xl p-10 md:p-16 shadow-[0_0_120px_rgba(234,179,8,0.08)]"
        >

          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text">
            Abdelfattah Ali Eliwa
          </h2>

          <p className="mt-6 text-yellow-400 tracking-[6px] uppercase">
            Senior Operations & Commissioning Specialist
          </p>

          <p className="mt-4 text-gray-400 max-w-3xl leading-8">
            20+ years of experience in Oil & Gas mega projects across refinery,
            gas processing, commissioning, startup, shutdown management and EPC execution.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              ["Experience", "20+ Years"],
              ["Industry", "Oil & Gas / Petrochemical"],
              ["Focus", "Operations & Commissioning"]
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-black/40 border border-zinc-800"
              >
                <p className="text-gray-400 text-sm">{item[0]}</p>
                <p className="text-xl font-bold text-yellow-400 mt-2">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="relative z-10 px-6 md:px-20 pb-20">
        <h3 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Core Expertise
        </h3>

        <div className="space-y-6">
          {[
            "Refinery & Gas Processing Operations Optimization",
            "Commissioning & Pre-Commissioning Execution",
            "Startup & Shutdown Management of Mega Facilities",
            "EPC Project Delivery & Multinational Leadership",
            "Safety Systems & Operational Excellence Implementation"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/5 border border-zinc-800 hover:border-yellow-500 transition"
            >
              <p className="text-gray-200 text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative z-10 px-6 md:px-20 pb-24">
        <h3 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Key Achievements
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Delivered refinery & gas plant startups under critical timelines",
            "Led multinational EPC commissioning teams across major projects",
            "Improved operational efficiency across industrial assets",
            "Implemented robust safety & operational excellence frameworks"
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black/40 border border-zinc-800"
            >
              <p className="text-gray-300 leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DOWNLOAD CTA ================= */}
      <section className="relative z-10 px-6 md:px-20 pb-32 text-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/CV.pdf"
          target="_blank"
          className="inline-block px-12 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-[0_0_80px_rgba(234,179,8,0.35)] hover:shadow-[0_0_120px_rgba(234,179,8,0.5)] transition"
        >
          Download Full CV (PDF)
        </motion.a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 text-center py-10 text-gray-500 border-t border-zinc-900">
        © 2026 Executive CV — Oil & Gas Portfolio
      </footer>

    </main>
  );
}