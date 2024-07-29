export default function AboutCard() {
  return (
    <div className="card-animate lg:col-span-2">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 group hover:scale-[1.02] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-900 rounded-3xl p-8 h-full">
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">RAKOTOMAMPIONONA FITAHIANA</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Herizo.
              </span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Passionné par les technologies numériques, je conçois et développe
              des solutions innovantes dans les domaines du web, du mobile et
              des systèmes intelligents. Curieux, rigoureux et toujours en quête
              de nouveaux défis, je m'investis pleinement dans chaque projet
              pour offrir des résultats de qualité.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Web", "Mobile", "Reseaux", "Multimedia"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
