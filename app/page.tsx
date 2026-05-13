"use client";

import { motion } from "framer-motion";
import {
  Award,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function ExecutivePortfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Abdelfattah Ali Abdelfattah
        </h1>

        <p className="text-xl mt-3 text-gray-600">
          Operations & Commissioning Manager | Oil & Gas
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <Phone size={16} /> +20 101 901 7235
          </span>

          <span className="flex items-center gap-2">
            <Mail size={16} /> chem.abdelfattah83@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <Linkedin size={16} /> LinkedIn Profile
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} /> Egypt / Bahrain
          </span>
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase size={20} /> Professional Summary
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Senior Operations and Commissioning Professional with 20+ years of
          experience in refinery, petrochemical, gas processing, and oil &
          gas operations. Strong background in pre-commissioning,
          commissioning, start-up, and plant optimization.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Award size={20} /> Experience Highlights
        </h2>

        <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
          <li>Commissioning & Start-up leadership in Oil & Gas plants</li>
          <li>DCS / PLC operations and control room supervision</li>
          <li>Process optimization and troubleshooting</li>
          <li>HSE compliance and operational safety leadership</li>
        </ul>
      </motion.section>

    </main>
  );
}