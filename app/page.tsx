"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Phone,
  Download,
  Briefcase,
  ShieldCheck,
  Settings,
  Award,
} from "lucide-react";

export default function ExecutivePortfolio() {
  return (
    <main className="bg-[#f6f7f9] text-gray-900 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-amber-900 text-white">

        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 text-sm backdrop-blur-md">
                Executive Director Portfolio
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                ABD EL FATTAH
                <br />
                ALI ELEWA
              </h1>

              <p className="mt-6 text-xl text-slate-200 leading-8 max-w-2xl">
                Executive Operations & Commissioning Leader with 20+ years of experience in Oil & Gas,
                Refinery Expansion, Petrochemical Operations, Startup, Stabilization,
                and Operational Excellence.
              </p>

              {/* CONTACT */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 text-sm">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                  <Phone size={18} />
                  <span>+20 101 901 7235</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                  <Phone size={18} />
                  <span>+973 3702 6658</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10 sm:col-span-2">
                  <Mail size={18} />
                  <span>chem.abdelfattah83@gmail.com</span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-xl"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 transition shadow-xl text-black font-semibold"
                >
                  <Download size={18} />
                  Download CV
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-200 transition shadow-xl font-semibold"
                >
                  <Download size={18} />
                  View Executive CV
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-30 rounded-full"></div>

                <img
                  src="/profile.jpg"
                  alt="Executive Profile"
                  className="relative w-[320px] lg:w-[420px] rounded-[2rem] border-4 border-white/20 shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPI SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["20+", "Years Experience"],
            ["15+", "Major Projects"],
            ["10+", "Refinery Units"],
            ["100%", "Safety Commitment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100"
            >
              <h3 className="text-4xl font-black text-slate-900">{value}</h3>
              <p className="text-gray-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">

        <div className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100">
          <h2 className="text-4xl font-black mb-6">Executive Profile</h2>

          <p className="text-gray-700 leading-9 text-lg">
            Senior Operations & Commissioning Professional with extensive expertise in refinery,
            petrochemical, and oil & gas operations. Proven track record in CDU, VRU, GSU,
            utilities, startup, stabilization, troubleshooting, and operational readiness.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "Refinery Operations",
              "Commissioning & Startup",
              "Operational Excellence",
              "HSSE Leadership",
              "DCS / SCADA",
              "Turnaround Support",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-100 rounded-2xl p-4 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-amber-900 text-white rounded-[2rem] shadow-xl p-10">
          <h2 className="text-4xl font-black mb-6">Innovation Project</h2>

          <p className="text-slate-200 leading-8 text-lg">
            Development of Activated Carbon from Agricultural Waste using Banana Peels,
            Orange Peels, and Date Seeds for sustainable environmental applications.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "High Adsorption Capacity",
              "Eco-Friendly Technology",
              "Low-Cost Sustainable Solution",
              "Supports Circular Economy",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md"
              >
                <ShieldCheck size={20} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Executive Experience
          </h2>

          <div className="space-y-8">

            {[
              {
                title: "Operations & Maintenance Manager",
                company: "EPROM – Petrosannan Oil & Gas Production",
                period: "2025 – Present",
                desc: "Leading operations, maintenance coordination, process optimization, and HSSE implementation for oil & gas facilities.",
              },
              {
                title: "Assistant Operations Manager – Commissioning & Startup",
                company: "EPROM / PETROJET – NPC CDU-4 & VRU-3",
                period: "2022 – 2025",
                desc: "Managed startup, pre-commissioning, DCS monitoring, stabilization, loop checks, and refinery operational readiness.",
              },
              {
                title: "Operations, Commissioning & Startup Supervisor",
                company: "MIDOR Refinery Expansion Project",
                period: "2008 – 2022",
                desc: "Supervised refinery commissioning, startup stabilization, troubleshooting, and DCS-based operations.",
              },
            ].map((job) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#f8fafc] border border-gray-100 rounded-[2rem] p-10 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 text-white p-4 rounded-2xl">
                    <Briefcase />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="text-amber-600 font-semibold mt-1">{job.company}</p>
                    <p className="text-gray-500 mt-1">{job.period}</p>
                    <p className="text-gray-700 leading-8 mt-4">{job.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-16">
          Technical Systems
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Yokogawa CENTUM VP / CS3000",
            "Emerson DeltaV",
            "Honeywell DCS",
            "Foxboro Systems",
            "Schneider Electric",
            "Rockwell Automation",
          ].map((system) => (
            <div
              key={system}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 flex items-center gap-4"
            >
              <Settings className="text-amber-600" />
              <span className="font-medium">{system}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Education & Credentials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["PhD – Environmental Sciences", "2025 | Excellent Grade"],
              ["Master’s Degree – Environmental Sciences", "2017 | Excellent Grade"],
              ["B.Sc. Chemistry – Alexandria University", "2004 | Honor Degree"],
            ].map(([title, year]) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 text-center"
              >
                <Award className="mx-auto mb-4 text-amber-400" size={42} />
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-slate-300 mt-3">{year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="text-lg font-medium">
          Executive Portfolio — ABD EL FATTAH ALI ELEWA
        </p>

        <p className="text-slate-400 mt-2">
          Oil & Gas | Refinery | Commissioning | Operational Excellence
        </p>
      </footer>
    </main>
  );
}
