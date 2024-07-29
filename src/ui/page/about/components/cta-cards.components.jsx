import { ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTACard() {
  return (
    <div className="card-animate lg:col-span-3">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-1 group hover:scale-[1.02] transition-all duration-300">
        <div className="relative bg-slate-900 rounded-3xl p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Prêt à contribuer à votre</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                succès.
              </span>
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Collaborons ensemble pour donner vie à vos projets innovants
            </p>
            <Link
              to={"/contact"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5" />
              <span>Me Contacter</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
