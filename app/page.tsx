"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/profile.jpg"
          alt="Executive Portrait"
          className="w-56 h-56 rounded-full border-4 border-yellow-500 object-cover shadow-2xl"
        />

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mt-8 tracking-tight"
        >
          Abdelfattah Ali Eliwa
        </motion.h1>

        <p className="text-yellow-400 tracking-[6px] uppercase mt-5 text-lg md:text-xl">
          Operations & Commissioning Executive
        </p>

        <p className="max-w-3xl text-gray-300 mt-8 leading-8 text-lg">
          Senior Oil & Gas Executive with 20+ years of experience in refinery,
          gas processing, petrochemical plants, commissioning, startup, and
          operational excellence across international projects.
        </p>

        <div className="flex gap-6 mt-10 flex-wrap justify-center">
          <a
            href="/CV.pdf"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Download CV
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
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Executive Profile
        </h2>

        <p className="text-gray-300 leading-9 max-w-5xl text-lg">
          Proven leader in upstream and downstream operations with strong expertise
          in commissioning, troubleshooting, plant optimization, and shutdown/startup
          management. Recognized for delivering safe operations, improving reliability,
          and leading multicultural engineering teams in high-pressure environments.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 px-8 md:px-24 py-24">

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-14">
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
              desc: "Experience in large-scale refinery, utilities and petrochemical projects."
            },
            {
              title: "Team Management",
              desc: "Leading multinational teams and developing operational excellence culture."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="border border-zinc-800 p-8 rounded-2xl bg-zinc-900/40"
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

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Contact
        </h2>

        <div className="text-gray-300 space-y-3 text-lg">
          <p>📍 Bahrain: +973 3702 6658</p>
          <p>📍 Egypt: +20 101 901 7235</p>
          <p>📧 chem.abdelfattah83@gmail.com</p>
        </div>

        <p className="text-gray-600 mt-10 text-sm">
          © 2026 Executive Portfolio
        </p>

      </section>

    </main>
  );
}