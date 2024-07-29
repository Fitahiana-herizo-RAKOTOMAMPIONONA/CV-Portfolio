import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServiceCard({ service, index }) {
  return (
    <div className="animate-card group">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 hover:scale-105 transition-all duration-500 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-slate-900 rounded-3xl overflow-hidden h-full">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

            {/* Icon overlay */}
            <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-white">{service.icon}</div>
            </div>

            {/* Price tag */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <span className="text-white text-sm font-semibold">
                {service.price}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <span>Durée:</span>
                  <span className="text-white font-medium">
                    {service.duration}
                  </span>
                </div>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group/btn">
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
