import { ArrowRight, Code, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroCard() {
  const description = ` Passionné par les technologies numériques, je conçois etdéveloppe des solutions innovantes dans les domaines du web, dumobile et des systèmes intelligents. Curieux, rigoureux ettoujours en quête de nouveaux défis, je m'investis pleinement dans chaque projet pour offrir des résultats de qualité.`;
  const limited =
    description.length > 100 ? description.slice(0, 100) + "..." : description;
  return (
    <div className="card-animate row-span-2 md:col-span-1">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 group h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-900 rounded-3xl p-12 h-full flex flex-col">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/assets/image/profile.jpg"
              alt="Herizo RAKOTOMAMPIONONA"
              className="relative w-full aspect-square object-cover rounded-3xl border-2 border-slate-700"
            />
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">
                  En ligne
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* <div>
              <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Développeur
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-white">Herizo</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RAKOTOMAMPIONONA.
                </span>
              </h1>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {limited}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6"></p>
            </div> */}

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Antananarivo, Madagascar</span>
              </div>

              <Link
                to={"/about"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group/btn"
              >
                <span>Voir le profil</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
