"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [openCV, setOpenCV] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = openCV ? "hidden" : "auto";
  }, [openCV]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= CINEMATIC BACKGROUND ================= */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div className="fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2),transparent_60%)]" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          src="/profile.jpg"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-yellow-500 shadow-[0_0_120px_rgba(234,179,8,0.5)] object-cover"
        />

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-extrabold mt-10 bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text"
        >
          Abdelfattah Ali Eliwa
        </motion.h1>

        <p className="text-yellow-400 mt-6 tracking-[8px] uppercase">
          Senior Operations & Commissioning Specialist
        </p>

        <p className="text-gray-400 mt-3 tracking-[5px]">
          Refinery • Gas Processing • Petrochemical Plants
        </p>

        <p className="max-w-3xl text-gray-300 mt-10 text-xl leading-10">
          20+ years delivering oil & gas mega projects, commissioning, startup,
          troubleshooting and operational excellence across global assets.
        </p>

        {/* ================= CTA BUTTONS ================= */}
        <div className="flex gap-5 mt-12 flex-wrap justify-center items-center">

          {/* CV BUTTON */}
          <button
            onClick={() => setOpenCV(true)}
            className="px-10 py-4 bg-yellow-500 text-black rounded-full font-bold hover:scale-105 transition shadow-[0_0_40px_rgba(234,179,8,0.3)]"
          >
            View CV
          </button>

          {/* 🔵 LINKEDIN BUTTON (CINEMATIC UPGRADE) */}
          <a
            href="https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6/"
            target="_blank"
            className="px-10 py-4 rounded-full border border-blue-500 text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
          >
            Visit LinkedIn
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="px-10 py-4 border border-zinc-700 rounded-full hover:border-yellow-500 transition"
          >
            Contact
          </a>

        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="px-6 md:px-32 py-40">
        <h2 className="text-6xl font-bold text-yellow-400 mb-10">
          Executive Profile
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-12 rounded-3xl backdrop-blur-xl">
          <p className="text-gray-300 text-xl leading-10">
            Senior Oil & Gas professional with 20+ years experience in refinery,
            gas processing, commissioning, startup execution, shutdown management
            and EPC mega-project delivery across global industrial assets.
          </p>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="px-6 md:px-32 py-40">
        <h2 className="text-6xl font-bold text-yellow-400 mb-16">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            ["Operations Leadership", "Refinery & Gas Processing Optimization"],
            ["Commissioning", "Startup & Pre-Commissioning Execution"],
            ["EPC Projects", "Mega Oil & Gas Project Delivery"],
            ["Safety Systems", "High-Risk Industrial Operations Management"]
          ].map((x, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl bg-white/5 border border-zinc-800 hover:border-yellow-500 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">{x[0]}</h3>
              <p className="text-gray-400 mt-4 text-lg">{x[1]}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="px-6 md:px-32 py-40">
        <h2 className="text-6xl font-bold text-yellow-400 mb-16">
          Impact & Achievements
        </h2>

        <div className="space-y-6 text-gray-300 text-xl leading-10">
          <p>✔ Delivered refinery & gas plant startups on schedule</p>
          <p>✔ Improved operational efficiency across global assets</p>
          <p>✔ Led multinational commissioning teams</p>
          <p>✔ Implemented operational excellence systems</p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 md:px-32 py-40 text-center">
        <h2 className="text-6xl font-bold text-yellow-400 mb-12">
          Contact
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-12 rounded-3xl backdrop-blur-xl text-lg">
          <p>📍 Egypt: +20 101 901 7235</p>
          <p className="mt-3">📍 Bahrain: +973 3702 6658</p>
          <p className="mt-3">📧 chem.abdelfattah83@gmail.com</p>
        </div>
      </section>

      {/* ================= CV MODAL ================= */}
      <AnimatePresence>
        {openCV && (
          <motion.div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden relative"
            >
              <button
                onClick={() => setOpenCV(false)}
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
              >
                Close
              </button>

              <iframe src="/CV.pdf" className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}