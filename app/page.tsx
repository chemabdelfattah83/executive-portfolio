"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [openCV, setOpenCV] = useState(false);

  // منع scroll عند فتح الـ modal
  useEffect(() => {
    document.body.style.overflow = openCV ? "hidden" : "auto";
  }, [openCV]);

  return (
    <main className="relative text-white min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black animate-pulse opacity-90" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        {/* IMAGE */}
        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/profile.jpg"
          className="w-56 h-56 rounded-full border-4 border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.4)] object-cover"
          alt="profile"
        />

        {/* NAME */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold mt-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-500 text-transparent bg-clip-text"
        >
          Abdelfattah Ali Eliwa
        </motion.h1>

        {/* TITLE */}
        <p className="text-yellow-400 mt-4 uppercase tracking-[4px]">
          Senior Operations & Commissioning Specialist
        </p>

        <p className="text-gray-400 uppercase tracking-[3px] text-sm mt-2">
          Refinery • Gas Processing • Petrochemical Plants
        </p>

        {/* SUMMARY */}
        <p className="max-w-3xl text-gray-300 mt-8 leading-8 text-lg">
          Senior Oil & Gas professional with 20+ years of experience in refinery,
          gas processing, petrochemical plants, commissioning, startup, and operational excellence.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <button
            onClick={() => setOpenCV(true)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition"
          >
            View CV
          </button>

          <a
            href="/CV.pdf"
            download
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6/"
            target="_blank"
            className="bg-blue-600 px-8 py-4 rounded-full font-bold hover:scale-110 transition"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Contact
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 md:px-24 py-24">
        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          Executive Profile
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-10 rounded-3xl backdrop-blur-md">
          <p className="text-gray-300 leading-8">
            Proven leader in upstream & downstream operations, commissioning,
            troubleshooting, shutdown/startup management and operational excellence
            across global oil & gas projects.
          </p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-8 md:px-24 py-24">
        <h2 className="text-5xl font-bold text-yellow-400 mb-12">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            { t: "Operations Leadership", d: "Refinery & gas processing operations." },
            { t: "Commissioning", d: "Pre-commissioning & startup management." },
            { t: "EPC Projects", d: "Mega oil & gas project execution." },
            { t: "Team Leadership", d: "Multinational teams & safety culture." }
          ].map((x, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/5 border border-zinc-800 hover:border-yellow-500"
            >
              <h3 className="text-xl font-bold">{x.t}</h3>
              <p className="text-gray-400 mt-3">{x.d}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-24 py-24 text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-10">
          Contact
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-10 rounded-3xl">
          <p>📍 Egypt: +20 101 901 7235</p>
          <p>📍 Bahrain: +973 3702 6658</p>
          <p>📧 chem.abdelfattah83@gmail.com</p>
        </div>
      </section>

      {/* CV MODAL */}
      <AnimatePresence>
        {openCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden"
            >

              <button
                onClick={() => setOpenCV(false)}
                className="absolute top-3 right-3 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
              >
                Close
              </button>

              <iframe
                src="/CV.pdf"
                className="w-full h-full"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}