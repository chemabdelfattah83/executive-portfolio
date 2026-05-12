"use client";

import { useState } from "react";

export default function Home() {

  const [showCV, setShowCV] = useState(false);

  const kpis = [
    { label: "Years Experience", value: "20+" },
    { label: "Plants Commissioned", value: "12+" },
    { label: "Operational Improvement", value: "Proven" }
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-900 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-yellow-400 font-bold tracking-widest">
            EXECUTIVE PROFILE
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#overview">Overview</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="overview" className="min-h-screen flex items-center justify-center text-center px-6">

        <div>

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto border-4 border-yellow-500 object-cover"
          />

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Abdelfattah Ali Eliwa
          </h1>

          <p className="text-yellow-400 mt-3 tracking-[6px] uppercase text-sm">
            Operations • Commissioning • Oil & Gas
          </p>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 leading-7">
            Senior operations professional with 20+ years of experience in refinery,
            gas processing, commissioning, and industrial operations.
          </p>

          {/* ACTION PANEL */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">

            <button
              onClick={() => setShowCV(true)}
              className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold"
            >
              View CV
            </button>

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-xl"
            >
              Download CV
            </a>

            {/* ✅ FIXED CONTACT */}
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-700 rounded-xl text-gray-300"
            >
              Contact
            </a>

          </div>

        </div>
      </section>

      {/* KPI */}
      <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Professional Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {kpis.map((k, i) => (
            <div key={i} className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
              <p className="text-gray-400">{k.label}</p>
              <h3 className="text-2xl font-bold mt-2">{k.value}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            Experience Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Refinery & Gas Operations Optimization",
              "Commissioning & Start-up Management",
              "EPC Project Execution Support",
              "Multinational Team Leadership"
            ].map((item, i) => (
              <div key={i} className="p-6 border border-zinc-800 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT SECTION (ANCHOR TARGET) */}
      <section id="contact" className="px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          Contact
        </h2>

        <p className="text-gray-400">Bahrain: +973 3702 6658</p>
        <p className="text-gray-400">Egypt: +20 101 901 7235</p>
        <p className="text-gray-400">chem.abdelfattah83@gmail.com</p>

      </section>

      {/* ✅ IMPROVED CV MODAL */}
      {showCV && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-5xl h-[90vh] rounded-xl relative overflow-hidden shadow-2xl">

            <button
              onClick={() => setShowCV(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold"
            >
              ✕
            </button>

            <iframe
              src="/cv.pdf"
              className="w-full h-full"
            />

          </div>

        </div>
      )}

    </main>
  );
}