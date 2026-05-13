export default function ExecutivePortfolio() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-800 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
                Operations & Commissioning Specialist Portfolio
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                ABD EL FATTAH
                <br />
                ALI ELEWA
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-200 max-w-2xl">
                Senior Operations & Commissioning Specialist with 20+ years of experience
                in Oil & Gas, Refinery Expansion, Petrochemical Operations,
                Startup, Stabilization, and Operational Excellence.
              </p>

              {/* CONTACT */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="bg-white/10 p-4 rounded-2xl">
                  📞 Egypt: +20 101 901 7235
                </div>

                <div className="bg-white/10 p-4 rounded-2xl">
                  📞 Bahrain: +973 3702 6658
                </div>

                <div className="bg-white/10 p-4 rounded-2xl sm:col-span-2">
                  ✉️ chem.abdelfattah83@gmail.com
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://www.linkedin.com/in/abd-el-fattah-ali-elewa-a10124a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-xl font-semibold"
                >
                  LinkedIn Profile
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 transition shadow-xl text-black font-bold"
                >
                  Download CV
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-200 transition shadow-xl text-slate-900 font-bold"
                >
                  View Specialist CV
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center">

              <img
                src="/profile.jpg"
                alt="Professional Profile"
                className="w-[340px] lg:w-[440px] h-[440px] object-cover rounded-[2rem] shadow-2xl border-4 border-white/20"
              />

            </div>

          </div>

        </div>
      </section>

      {/* KPI */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["20+", "Years Experience"],
            ["15+", "Major Projects"],
            ["10+", "Refinery Units"],
            ["100%", "Safety Commitment"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="bg-white rounded-3xl shadow-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-black text-slate-900">
                {value}
              </h3>

              <p className="text-gray-500 mt-2">
                {label}
              </p>
            </div>

          ))}

        </div>
      </section>

      {/* PROFILE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">

        <div className="bg-white rounded-[2rem] shadow-xl p-10">

          <h2 className="text-4xl font-black mb-6">
            Professional Profile
          </h2>

          <p className="text-gray-700 leading-9 text-lg">
            Senior Operations & Commissioning Professional with extensive expertise
            in refinery, petrochemical, and oil & gas operations.
            Proven track record in CDU, VRU, GSU, utilities,
            startup, stabilization, troubleshooting,
            and operational readiness.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">

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
                className="bg-slate-100 rounded-2xl p-4 text-center font-semibold"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        {/* PROJECT */}
        <div className="bg-gradient-to-br from-slate-900 to-amber-800 text-white rounded-[2rem] shadow-xl p-10">

          <h2 className="text-4xl font-black mb-6">
            Innovation Project
          </h2>

          <p className="text-slate-200 leading-8 text-lg">
            Development of Activated Carbon from Agricultural Waste
            for sustainable environmental applications.
          </p>

          <div className="space-y-4 mt-8">

            {[
              "High Adsorption Capacity",
              "Eco-Friendly Technology",
              "Low-Cost Sustainable Solution",
              "Supports Circular Economy",
            ].map((feature) => (

              <div
                key={feature}
                className="bg-white/10 rounded-2xl p-4"
              >
                ✅ {feature}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Professional Experience
          </h2>

          <div className="space-y-8">

            {[
              {
                title: "Operations & Maintenance Manager",
                company: "EPROM – Petrosannan Oil & Gas Production",
                period: "2025 – Present",
              },

              {
                title: "Assistant Operations Manager – Commissioning & Startup",
                company: "EPROM / PETROJET – NPC CDU-4 & VRU-3",
                period: "2022 – 2025",
              },

              {
                title: "Operations, Commissioning & Startup Supervisor",
                company: "MIDOR Refinery Expansion Project",
                period: "2008 – 2022",
              },

            ].map((job) => (

              <div
                key={job.title}
                className="bg-[#f8fafc] rounded-[2rem] p-10 shadow-lg"
              >

                <h3 className="text-2xl font-bold">
                  {job.title}
                </h3>

                <p className="text-amber-600 font-semibold mt-2">
                  {job.company}
                </p>

                <p className="text-gray-500 mt-1">
                  {job.period}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">

        <p className="text-lg font-semibold">
          Operations & Commissioning Specialist Portfolio — ABD EL FATTAH ALI ELEWA
        </p>

        <p className="text-slate-400 mt-2">
          Oil & Gas | Refinery | Commissioning | Operational Excellence
        </p>

      </footer>

    </main>
  );
}