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

      {/* ================= CINEMATIC BANNER BACKGROUND ================= */}

      <div className="fixed inset-0 overflow-hidden">

        {/* Banner Background */}
        <motion.img
          src="/banner.jpg"
          alt="banner"
          className="w-full h-full object-cover opacity-30 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15),transparent_60%)]" />

      </div>

      {/* ================= HERO ================= */}

      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

        {/* PROFILE IMAGE */}
        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/profile.jpg"
          alt="profile"
          className="
          w-72 h-72 md:w-80 md:h-80
          rounded-full
          border-4 border-yellow-500
          shadow-[0_0_120px_rgba(234,179,8,0.45)]
          object-cover
          backdrop-blur-xl
          hover:scale-105
          transition duration-500
          "
        />

        {/* NAME */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
          text-5xl md:text-8xl
          font-extrabold
          tracking-tight
          leading-tight
          mt-10
          bg-gradient-to-r
          from-white
          via-yellow-200
          to-yellow-500
          text-transparent
          bg-clip-text
          drop-shadow-[0_0_30px_rgba(234,179,8,0.25)]
          "
        >
          Abdelfattah Ali Eliwa
        </motion.h1>

        {/* TITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-yellow-400 mt-6 tracking-[8px] uppercase text-sm md:text-base"
        >
          Senior Operations & Commissioning Specialist
        </motion.p>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-3 tracking-[5px] text-sm md:text-lg"
        >
          Refinery • Gas Processing • Petrochemical Plants
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl text-gray-300 mt-10 text-lg md:text-2xl leading-10"
        >
          20+ years delivering oil & gas mega projects,
          commissioning, startup, troubleshooting and
          operational excellence across global industrial assets.
        </motion.p>

        {/* ================= BUTTONS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-5 mt-14 flex-wrap justify-center items-center"
        >

          {/* VIEW CV */}
          <button
            onClick={() => setOpenCV(true)}
            className="
            px-10 py-4
            bg-yellow-500
            text-black
            rounded-full
            font-bold
            hover:scale-105
            transition
            shadow-[0_0_40px_rgba(234,179,8,0.35)]
            "
          >
            View CV
          </button>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6/"
            target="_blank"
            className="
            px-10 py-4
            rounded-full
            border border-blue-500
            text-blue-400
            font-bold
            hover:bg-blue-500
            hover:text-white
            transition
            hover:scale-105
            shadow-[0_0_40px_rgba(59,130,246,0.25)]
            "
          >
            Visit LinkedIn
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="
            px-10 py-4
            border border-zinc-700
            rounded-full
            hover:border-yellow-500
            transition
            "
          >
            Contact
          </a>

        </motion.div>

      </section>

      {/* ================= EXECUTIVE PROFILE ================= */}

      <section className="relative z-10 px-6 md:px-32 py-40">

        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-14">
          Executive Profile
        </h2>

        <div className="bg-white/5 border border-zinc-800 p-12 rounded-3xl backdrop-blur-xl">

          <p className="text-gray-300 text-lg md:text-2xl leading-10">
            Senior Oil & Gas professional with over 20 years of experience
            in refinery operations, gas processing, commissioning,
            startup execution, shutdown management and EPC mega-project delivery.
          </p>

        </div>

      </section>

      {/* ================= EXPERTISE ================= */}

      <section className="relative z-10 px-6 md:px-32 py-40">

        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-16">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            [
              "Operations Leadership",
              "Refinery & Gas Processing Optimization"
            ],
            [
              "Commissioning",
              "Startup & Pre-Commissioning Execution"
            ],
            [
              "EPC Projects",
              "Mega Oil & Gas Project Delivery"
            ],
            [
              "Safety Systems",
              "High-Risk Industrial Operations Management"
            ]
          ].map((x, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="
              p-10
              rounded-3xl
              bg-white/5
              border border-zinc-800
              hover:border-yellow-500
              backdrop-blur-xl
              transition
              "
            >

              <h3 className="text-2xl font-bold">
                {x[0]}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {x[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= IMPACT ================= */}

      <section className="relative z-10 px-6 md:px-32 py-40">

        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-16">
          Impact & Achievements
        </h2>

        <div className="space-y-8 text-gray-300 text-lg md:text-2xl leading-10">

          <p>
            ✔ Delivered refinery & gas plant startups under critical timelines
          </p>

          <p>
            ✔ Improved operational efficiency across industrial assets
          </p>

          <p>
            ✔ Led multinational EPC commissioning teams
          </p>

          <p>
            ✔ Implemented operational excellence & safety frameworks
          </p>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="relative z-10 px-6 md:px-32 py-40 text-center"
      >

        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-14">
          Contact
        </h2>

        <div className="
        bg-white/5
        border border-zinc-800
        p-12
        rounded-3xl
        backdrop-blur-xl
        text-lg md:text-2xl
        ">

          <p>📍 Egypt: +20 101 901 7235</p>

          <p className="mt-5">
            📍 Bahrain: +973 3702 6658
          </p>

          <p className="mt-5">
            📧 chem.abdelfattah83@gmail.com
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-10 text-center py-10 text-gray-500 border-t border-zinc-900">
        © 2026 Abdelfattah Ali Eliwa — Global Operations Portfolio
      </footer>

      {/* ================= CV MODAL ================= */}

      <AnimatePresence>

        {openCV && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0
            bg-black/90
            flex items-center justify-center
            p-4
            z-50
            "
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="
              w-full
              max-w-6xl
              h-[90vh]
              bg-white
              rounded-2xl
              overflow-hidden
              relative
              "
            >

              <button
                onClick={() => setOpenCV(false)}
                className="
                absolute
                top-4 right-4
                bg-red-500
                text-white
                px-4 py-2
                rounded-lg
                z-10
                "
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