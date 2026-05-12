export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <img
          src="/profile.jpg"
          alt="Executive Portrait"
          className="w-44 h-44 rounded-full border-4 border-yellow-500 object-cover shadow-2xl"
        />

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Abdelfattah Ali Eliwa
        </h1>

        <p className="text-yellow-400 text-xl mt-4 tracking-[4px] uppercase">
          Senior Operations & Commissioning Specialist | Oil & Gas | Refinery | Gas Processing | DCS Operations
        </p>

        <p className="max-w-3xl text-gray-300 mt-8 text-lg leading-8">
          Executive leader in Oil & Gas, Refinery, Petrochemical,
          Commissioning, Start-Up and Plant Operations with international
          experience across mega industrial projects.
        </p>

        <div className="flex gap-6 mt-10">
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Contact Me
          </a>

          <a
            href="/CV.pdf"
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-8 md:px-20 py-24 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-14 text-yellow-400">
          Executive Experience
        </h2>

        <div className="space-y-10">
          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Operations & Commissioning Leadership
            </h3>

            <p className="text-gray-400 mt-4 leading-8">
              Extensive experience in refinery operations, gas processing,
              utilities, plant start-up, shutdown coordination, troubleshooting,
              and operational excellence.
            </p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              International Industrial Projects
            </h3>

            <p className="text-gray-400 mt-4 leading-8">
              Participated in large-scale EPC and commissioning projects across
              the Middle East within high-performance multinational teams.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 md:px-20 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">
          Contact
        </h2>

        <p className="text-xl text-gray-300">
          Bahrain: +973 3702 6658
        </p>

        <p className="text-xl text-gray-300 mt-3">
          Egypt: +20 101 901 7235
        </p>

        <p className="text-xl text-gray-300 mt-3">
          chem.abdelfattah83@gmail.com
        </p>
      </section>
    </main>
  );
}