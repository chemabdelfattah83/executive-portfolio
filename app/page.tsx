"use client";

import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0">
        <img
          src="/banner.png"
          alt="banner"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/70" />
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
      <section className="relative z-10 px-6 md:px-20 pt-6 pb-16">

        <div className="backdrop-blur-2xl bg-white/5 border border-zinc-800 rounded-3xl p-10 md:p-16">

          <div className="flex flex-col items-center text-center">

            {/* PROFILE */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="/profile.png"
              alt="profile"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-yellow-500 shadow-[0_0_80px_rgba(234,179,8,0.5)] object-cover"
            />

            <h2 className="mt-8 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text">
              Abdelfattah Ali Elewa
            </h2>

            <p className="mt-4 text-yellow-400 tracking-[6px] uppercase">
              Senior Operations & Commissioning Specialist
            </p>

            <p className="mt-6 text-gray-400 max-w-3xl">
              20+ years in Oil & Gas mega projects, refinery operations, commissioning, startup and EPC delivery.
            </p>

            {/* ================= SOCIAL BUTTONS (RETURNED) ================= */}
            <div className="flex gap-4 mt-8 flex-wrap justify-center">

              <a
                href="https://www.linkedin.com/in/abd-elfattah-elewa/"
                target="_blank"
                className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                LinkedIn Profile
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-zinc-700 hover:border-yellow-500 transition"
              >
                Contact Info
              </a>

              <a
                href="/CV.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full bg-yellow-500 text-black font-bold hover:scale-105 transition"
              >
                Download CV
              </a>

            </div>

          </div>

        </div>
      </section>

     {/* ================= EXPERIENCE ================= */}
<section className="relative z-10 px-6 md:px-20 pb-16">
  <h3 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
    Core Expertise
  </h3>

  <div className="space-y-6">
    {[
      "Senior Refinery & Gas Operations Leadership",
      "Commissioning & Operational Readiness Execution",
      "Mega Projects Startup & Turnaround Management",
      "Process Optimization & Production Reliability",
      "EPC Coordination & Multinational Team Leadership",
      "Process Safety, HSE & Risk Mitigation",
      "Utilities, Offsites & Energy Systems Operations",
      "Operational Excellence & Continuous Improvement",
      "High-Performance Operations Management",
      "Strategic Industrial Operations Planning",
      "EPC Project Delivery & Multinational Leadership",
      "Safety Systems & Operational Excellence Implementation"
    ].map((item, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-white/5 border border-zinc-800 hover:border-yellow-500 transition"
      >
        {item}
      </div>
    ))}
  </div>
</section>

      {/* ================= CONTACT (RETURNED + FIXED) ================= */}
      <section
        id="contact"
        className="relative z-10 px-6 md:px-20 pb-24"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Contact
        </h3>

        <div className="bg-white/5 border border-zinc-800 rounded-3xl p-10 backdrop-blur-xl space-y-4 text-lg">

          <p>📍 Egypt: +20 101 901 7235</p>
          <p>📍 Bahrain: +973 3702 6658</p>
          <p>📧 abdelfattah.ali@astrapetroleum.com</p>
          <p>📧 abdelfattah.ali@astraconcepts.com</p>
          <p>📧 https://abdelfattah-elewa.vercel.app/</p>
          <p>📧https://www.linkedin.com/in/abd-elfattah-elewa/</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 text-center py-10 text-gray-500 border-t border-zinc-900">
        © 2026 Executive CV — Oil & Gas Portfolio
      </footer>

    </main>
  );
}