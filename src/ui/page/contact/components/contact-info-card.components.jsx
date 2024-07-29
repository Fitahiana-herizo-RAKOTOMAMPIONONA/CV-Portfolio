import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactInfoCard() {
  const contactData = [
    {
      icon: Mail,
      title: "Email",
      primary: "herizo.rakoto@gmail.com",
      secondary: "contact@herizo.dev",
      href: "mailto:herizo.rakoto@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      primary: "+261 34 12 345 67",
      secondary: "+261 33 98 765 43",
      href: "tel:+261341234567",
    },
    {
      icon: MapPin,
      title: "Localisation",
      primary: "Antananarivo",
      secondary: "Madagascar",
      href: "#",
    },
  ];

  return (
    <div className="card-animate">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative bg-slate-900 rounded-3xl p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 text-blue-400 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                Contact Info
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
              Restons en contact
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>

          {/* Contact Items */}
          <div className="space-y-4 md:space-y-6">
            {contactData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <Link
                    href={item.href}
                    className="block p-4 md:p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-sm md:text-base font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-xs md:text-sm mb-1">
                          {item.primary}
                        </p>
                        {item.secondary && (
                          <p className="text-slate-400 text-xs md:text-sm">
                            {item.secondary}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Availability Status */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs md:text-sm font-medium">
                  Disponible
                </span>
              </div>
              <Clock className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
              <span className="text-slate-300 text-xs md:text-sm">
                Réponse sous 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
