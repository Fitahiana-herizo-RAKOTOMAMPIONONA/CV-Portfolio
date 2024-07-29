import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CollaborationCTA() {
  return (
    <div className="card-animate md:col-span-3">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-1 group hover:scale-[1.02] transition-all duration-300">
        <div className="relative bg-slate-900 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Collaborons</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ensemble.
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Prêt à transformer vos idées en réalité ? Travaillons ensemble
              pour créer quelque chose d'extraordinaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/contact"}>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-colors duration-200 group/btn">
                  <Mail className="w-5 h-5" />
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              <a
                href="/assets/pdf/CV_herizo_fitahiana_RAKOTOMAMPIONONA.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
