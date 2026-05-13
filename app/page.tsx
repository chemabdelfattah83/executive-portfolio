import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">

      {/* HERO */}
      <div className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/profile.jpg"
            className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-2xl border-4 border-white shadow-2xl"
          />

          {/* INFO */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold"
            >
              ABD EL FATTAH ALI ELEWA
            </motion.h1>

            <p className="text-slate-300 mt-3 text-lg">
              Executive Director | Operations & Commissioning | Oil & Gas
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-2 text-sm text-slate-300">
              <p>📍 Egypt / Bahrain</p>
              <p>📞 +20 101 901 7235</p>
              <p>📞 +973 3702 6658</p>
              <p>✉️ chem.abdelfattah83@gmail.com</p>
            </div>

            <a
              href="/cv.pdf"
              className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-xl text-white shadow-lg"
              download
            >
              Download Executive CV
            </a>
          </div>
        </div>
      </div>

      {/* KPI SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-6">
        {[
          { label: "Years Experience", value: "20+" },
          { label: "Projects Delivered", value: "15+" },
          { label: "Startups/Commissioning", value: "10+" },
          { label: "Refinery Units", value: "CDU / VRU / GSU" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">{kpi.value}</h3>
            <p className="text-gray-600 mt-2">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* PROFILE */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">Executive Profile</h2>
        <p className="text-gray-700 leading-8">
          Executive-level Operations & Commissioning leader with 20+ years experience in
          refinery and petrochemical mega projects. Proven track record in leading
          large-scale startups, turnaround execution, operational excellence,
          and cross-functional leadership in high-risk environments.
        </p>
      </div>

      {/* CORE SKILLS */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Core Leadership Competencies</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Strategic Operations Leadership",
            "Commissioning & Startup Excellence",
            "Refinery Mega Projects",
            "Turnaround Management",
            "Process Safety Leadership",
            "DCS / SCADA Integration",
            "Operational Readiness",
            "Risk Management",
            "Energy Optimization",
          ].map((s) => (
            <span key={s} className="px-4 py-2 bg-slate-100 rounded-full shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <h2 className="text-3xl font-bold">Executive Experience</h2>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Operations & Maintenance Manager</h3>
          <p className="text-gray-500">EPROM | 2025 – Present</p>
          <p className="mt-3 text-gray-700">
            Leading full operational control of oil & gas facilities ensuring safety,
            reliability, and production optimization.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Commissioning Lead (CDU-4 / VRU-3)</h3>
          <p className="text-gray-500">PETROJET / EPROM | 2022 – 2025</p>
          <p className="mt-3 text-gray-700">
            Led pre-commissioning, startup, system turnover, and DCS-based stabilization
            for major refinery expansion units.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Senior Operations Supervisor</h3>
          <p className="text-gray-500">MIDOR Refinery | 2008 – 2022</p>
          <p className="mt-3 text-gray-700">
            Supported refinery expansion startup and managed operations using
            Yokogawa, Honeywell, Emerson DeltaV systems.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-950 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Executive Profile Available for Global Opportunities</h2>
        <p className="text-slate-300 mt-2">Oil & Gas | Refinery | Petrochemical Leadership Roles</p>
      </div>

    </div>
  );
}
