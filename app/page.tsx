"use client";

export default function Home() {

  const kpis = [
    { label: "Years Experience", value: "20+" },
    { label: "Plants Commissioned", value: "12+" },
    { label: "Downtime Reduction", value: "35%" }
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-900 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-yellow-400 font-bold tracking-widest">
            CEO EXECUTIVE DASHBOARD
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#overview">Overview</a>
            <a href="#experience">Experience</a>
            <a href="#impact">Impact</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

        <div className="relative z-10">

          <img
            src="/profile.jpg"
            alt="Executive"
            className="w-56 h-56 rounded-full mx-auto border-4 border-yellow-500 object-cover"
          />

          <h1 className="text-5xl md:text-7xl font-bold mt-8">
            Abdelfattah Ali Eliwa
          </h1>

          <p className="text-yellow-400 tracking-[8px] mt-4 uppercase">
            Operations • Commissioning • Executive Leadership
          </p>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">
            Executive-level professional delivering large-scale oil & gas
            operations excellence, commissioning leadership, and industrial
            performance optimization across international assets.
          </p>
        </div>
      </section>

      {/* KPI DASHBOARD */}
      <section id="experience" className="px-6 py-24 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-14">
          Executive Performance Overview
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {kpis.map((k, i) => (
            <div key={i} className="border border-zinc-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-yellow-500 transition">
              <p className="text-gray-400 text-sm">{k.label}</p>
              <h3 className="text-3xl font-bold mt-3 text-white">
                {k.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-14">
            Leadership Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { t: "Operations Leadership", d: "Refinery & gas operations optimization." },
              { t: "Commissioning Authority", d: "Startup & performance testing leadership." },
              { t: "EPC Mega Projects", d: "Large-scale industrial project execution." },
              { t: "Global Teams", d: "Multinational workforce leadership & training." }
            ].map((i, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold">{i.t}</h3>
                <p className="text-gray-400 mt-4">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section id="impact" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Global Industrial Impact
        </h2>

        <p className="max-w-4xl mx-auto text-gray-400 leading-9">
          Delivered measurable improvements in operational reliability,
          safety performance, and production efficiency across multiple
          international oil & gas facilities.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-950 py-24 text-center px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10">
          Contact ME
        </h2>

        <div className="text-gray-300 space-y-3">
          <p>Bahrain: +973 3702 6658</p>
          <p>Egypt: +20 101 901 7235</p>
          <p>chem.abdelfattah83@gmail.com</p>
        </div>

        <p className="text-gray-600 mt-10 text-sm">
          © Executive Command Dashboard
        </p>
      </section>

    </main>
  );
}
