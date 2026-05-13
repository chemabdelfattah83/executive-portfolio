"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Briefcase,
  Award,
  Download,
} from "lucide-react";

export default function ExecutivePortfolio() {
  const linkedInUrl =
    "https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6/";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Abdelfattah Ali Abdelfattah
        </h1>

        <p className="text-xl mt-3 text-gray-600">
          Operations & Commissioning Manager | Oil & Gas Industry
        </p>

        {/* CONTACT */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <Phone size={16} /> +20 101 901 7235
          </span>

          <span className="flex items-center gap-2">
            <Mail size={16} /> chem.abdelfattah83@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} /> Egypt / Bahrain
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            <Download size={18} /> Download CV
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </motion.section>

      {/* SUMMARY */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase size={20} /> Professional Summary
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Senior Operations and Commissioning professional with 20+ years of
          experience in refinery, petrochemical, gas processing, and oil &
          gas facilities. Strong expertise in commissioning, start-up,
          troubleshooting, and plant optimization with high HSE standards.
        </p>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Award size={20} /> Key Experience
        </h2>

        <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
          <li>Commissioning & Start-up leadership for large-scale plants</li>
          <li>DCS / PLC Control Room Operations</li>
          <li>Process optimization and troubleshooting</li>
          <li>HSE compliance and operational safety leadership</li>
        </ul>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Executive Portfolio | Built with Next.js
      </footer>
    </main>
  );
}