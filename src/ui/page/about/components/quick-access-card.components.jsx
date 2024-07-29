import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickAccessCard({
  description,
  title,
  image,
  icon: Icon,
  href = "#",
}) {
  return (
    <div className="card-animate">
      <Link to={href} className="block group">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-slate-900 rounded-3xl p-8 h-full">
            <div className="text-center">
              <div className="mb-6 relative">
                {image ? (
                  <div className="w-24 h-24 mx-auto relative">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover rounded-2xl border border-slate-700 group-hover:border-blue-500/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : Icon ? (
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                ) : null}
              </div>

              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {description}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
