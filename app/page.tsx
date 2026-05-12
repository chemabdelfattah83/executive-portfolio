export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <img
          src="/profile.jpg"
          alt="Executive Portrait"
          className="w-52 h-52 rounded-full border-4 border-yellow-500 object-cover shadow-2xl"
        />

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Abdelfattah Ali Eliwa
        </h1>

        <p className="text-yellow-400 tracking-[5px] uppercase mt-5 text-xl">
          Operations & Commissioning Executive
        </p>

        <p className="max-w-4xl text-gray-300 mt-8 leading-8 text-lg">
          Senior Oil & Gas Professional with 20+ years of international
          experience in refinery operations, gas processing,
          petrochemical plants, commissioning, utilities,
          start-up and shutdown management.
        </p>

        <div className="flex gap-6 mt-12 flex-wrap justify-center">
          <a
            href="/CV.pdf"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
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

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 px-8 md:px-20 py-24">

        <h2 className="text-4xl font-bold text-yellow-400 mb-14">
          Executive Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Operations Leadership
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Leading refinery and gas processing operations with focus on
              safety, reliability, troubleshooting and plant optimization.
            </p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Commissioning & Start-Up
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Extensive experience in pre-commissioning,
              commissioning, performance testing,
              start-up and operational readiness.
            </p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Industrial Projects
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Participated in EPC mega projects across refinery,
              utilities and petrochemical facilities.
            </p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Team Management
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Managing multinational operations teams,
              training operators and improving operational excellence.
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

        <div className="space-y-4 text-xl text-gray-300">
          <p>Bahrain: +973 3702 6658</p>
          <p>Egypt: +20 101 901 7235</p>
          <p>chem.abdelfattah83@gmail.com</p>
        </div>

      </section>

    </main>
  );
}