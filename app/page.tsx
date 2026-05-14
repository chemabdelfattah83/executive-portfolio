"use client";

import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0">

        {/* Banner Image (VISIBLE now) */}
        <img
          src="/banner.png"
          alt="banner"
          className="w-full h-full object-cover opacity-25"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />
      </div>

      {/* ================= HEADER ================= */}
      <header className="relative z-10 px-6 md:px-20 py-10 flex justify-between items-center">
        <h1 className="text-yellow-400 tracking-[6px] font-bold text-xl">
          EXECUTIVE CV
        </h1>

        <a
          href="/CV.pdf"
          target="_blank"
          className="px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          Open PDF
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative z-10 px-6 md:px-20 pt-6 pb-20">

        <div className="backdrop-blur-2xl bg-white/5 border border-zinc-800 rounded-3xl p-10 md:p-16 shadow-[0_0_120px_rgba(234,179,8,0.10)]">

          {/* PROFILE IMAGE (RETURNED + FIXED) */}
          <div className="flex flex-col items-center text-center">

            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="/profile.jpg"
              alt="profile"
              className="
                w-44 h-44 md:w-52 md:h-52
                rounded-full
                border-4 border-yellow-500
                shadow-[0_0_80px_rgba(234,179,8,0.5)]
                object-cover
              "
            />

            <h2 className="mt-8 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text">
              Abdelfattah Ali Eliwa
            </h2>

            <p className="mt-4 text-yellow-400 tracking-[6px] uppercase">
              Senior Operations & Commissioning Specialist
            </p>

            <p className="mt-6 text-gray-400 max-w-3xl leading-8">
              20+ years of experience in Oil & Gas mega projects across refinery,
              gas processing, commissioning, startup, shutdown management and EPC execution.
            </p>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
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

        </div>
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
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-zinc-800 hover:border-yellow-500 transition"
            >
              <p className="text-gray-200 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 text-center py-10 text-gray-500 border-t border-zinc-900">
        © 2026 Executive CV — Oil & Gas Portfolio
      </footer>

    </main>
  );
}