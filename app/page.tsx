"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [openCV, setOpenCV] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openCV ? "hidden" : "auto";
  }, [openCV]);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= SEO ================= */}
      <head>
        <title>Abdelfattah Ali Eliwa | Oil & Gas Operations Expert</title>
        <meta name="description" content="Senior Operations & Commissioning Specialist with 20+ years experience in Oil & Gas, Refinery, Gas Processing and EPC Projects." />
        <meta property="og:title" content="Abdelfattah Ali Eliwa Portfolio" />
        <meta property="og:description" content="Global Oil & Gas Operations Expert" />
        <meta property="og:type" content="website" />
      </head>

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="fixed inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25),transparent_60%)]" />

      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="text-yellow-400 font-bold tracking-widest">
            A.E.E
          </div>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">Profile</a>
            <a href="#expertise" className="hover:text-yellow-400">Expertise</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          <button
            onClick={() => setOpenCV(true)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            CV
          </button>

        </div>
      </div>

      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28">

        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-yellow-500 shadow-[0_0_120px_rgba(234,179,8,0.5)] object-cover"
          src="/profile.jpg"
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
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

        <p className="max-w-3xl text-gray-300 mt-10 text-lg md:text-xl leading-9">
          20+ years delivering oil & gas mega projects, commissioning, startup,
          troubleshooting and operational excellence across international assets.
        </p>

        <div className="flex gap-5 mt-12 flex-wrap justify-center">
          <button
            onClick={() => setOpenCV(true)}
            className="px-10 py-4 bg-yellow-500 text-black rounded-full font-bold hover:scale-105 transition"
          >
            View CV
          </button>

          <a
            href="#contact"
            className="px-10 py-4 border border-zinc-700 rounded-full hover:border-yellow-500 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section id="about" className="px-6 md:px-32 py-40">
        <h2 className="text-6xl font-bold text-yellow-400 mb-10">
          Executive Profile
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-12 rounded-3xl backdrop-blur-xl">
          <p className="text-gray-300 text-xl leading-10">
            Senior Oil & Gas leader with deep expertise in refinery operations,
            commissioning, startup execution, shutdown management, EPC project delivery
            and operational excellence systems.
          </p>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section id="expertise" className="px-6 md:px-32 py-40">
        <h2 className="text-6xl font-bold text-yellow-400 mb-16">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            ["Operations Leadership", "Refinery & Gas Processing Optimization"],
            ["Commissioning", "Startup & Pre-Commissioning Execution"],
            ["EPC Projects", "Mega Oil & Gas Project Delivery"],
            ["Safety Systems", "High-Risk Industrial Environment Control"]
          ].map((x, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl bg-white/5 border border-zinc-800 hover:border-yellow-500"
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
          Impact
        </h2>

        <div className="space-y-6 text-gray-300 text-xl leading-10">
          <p>✔ Delivered complex refinery startups safely and on time</p>
          <p>✔ Improved plant efficiency through operational optimization</p>
          <p>✔ Led multinational commissioning teams across EPC projects</p>
          <p>✔ Implemented global safety & operational standards</p>
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