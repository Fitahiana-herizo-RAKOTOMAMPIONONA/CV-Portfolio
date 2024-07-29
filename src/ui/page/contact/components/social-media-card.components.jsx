import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialMediaCard() {
  const socialData = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/herizo.rakoto",
      color: "from-blue-600 to-blue-500",
      hoverColor: "hover:from-blue-700 hover:to-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/herizo-rakoto",
      color: "from-blue-700 to-blue-600",
      hoverColor: "hover:from-blue-800 hover:to-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/herizo.dev",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-700 hover:to-purple-700",
    },
  ];

  return (
    <div className="card-animate">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative bg-slate-900 rounded-3xl p-6 md:p-8">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                Social Media
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
              Suivez-moi
            </h3>
            <p className="text-slate-400 text-xs md:text-sm">
              Restez connecté sur les réseaux sociaux
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {socialData.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${social.color} p-0.5 md:p-1 ${social.hoverColor} transition-all duration-300 hover:scale-105`}
                  >
                    <div className="bg-slate-900 rounded-2xl p-4 md:p-6 text-center">
                      <div className="mb-2 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      <h4 className="text-white text-xs md:text-sm font-semibold group-hover:text-blue-100 transition-colors duration-200">
                        {social.name}
                      </h4>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
