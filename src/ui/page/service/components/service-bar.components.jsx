import { additionalServices } from "../data/service.data";

export default function AdditionalServicesBar() {
  return (
    <div className="animate-card mb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="relative bg-slate-900 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Services Complémentaires
            </h3>
            <p className="text-slate-400">Solutions techniques avancées</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
