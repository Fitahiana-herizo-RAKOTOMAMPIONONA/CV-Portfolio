import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <Link to={"/contact"}>
      <div className="card-animate">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-1 group hover:scale-105 transition-all duration-300">
          <div className="relative bg-slate-900 rounded-3xl p-8 text-center h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl" />
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
              </div>

              <div>
                <p className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-2">
                  POUR PLUS
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Contactez-moi.
                </h3>
                <p className="text-slate-300 text-sm">
                  Discutons de votre prochain projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
