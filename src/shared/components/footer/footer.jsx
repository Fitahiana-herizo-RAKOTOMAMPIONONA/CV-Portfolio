import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Award,
  MessageCircle,
  FileText,
  Settings,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  ArrowUp,
  ExternalLink,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

// Navigation data
const navListe = [
  { nom: "Accueil", icone: <Home className="w-4 h-4" />, path: "/" },
  { nom: "About", icone: <User className="w-4 h-4" />, path: "/about" },
  { nom: "Work", icone: <Briefcase className="w-4 h-4" />, path: "/work" },
  {
    nom: "Credentials",
    icone: <Award className="w-4 h-4" />,
    path: "/credentials",
  },
  {
    nom: "Contact",
    icone: <MessageCircle className="w-4 h-4" />,
    path: "/contact",
  },
  { nom: "Blog", icone: <FileText className="w-4 h-4" />, path: "/blog" },
  { nom: "Service", icone: <Settings className="w-4 h-4" />, path: "/service" },
];

// Social links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA",
    icon: <Github className="w-5 h-5" />,
    color: "hover:bg-gray-700",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fitahiana-herizo-rakotomampionona-586960277/",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:bg-blue-600",
  },
  {
    name: "Email",
    url: "mailto:fitahianaherizo10@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:bg-red-600",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+261281824169",
    icon: <Phone className="w-5 h-5" />,
    color: "hover:bg-green-600",
  },
];

// Newsletter component
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Restez Connecté</h3>
        <p className="text-slate-400">
          Recevez mes derniers projets et articles
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-300"
            />
            <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center gap-2 group"
          >
            {isSubscribed ? (
              <>
                <span>Merci !</span>
                <Heart className="w-4 h-4" />
              </>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">S'abonner</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Back to top button
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const madagascarTime = now.toLocaleTimeString("fr-FR", {
        timeZone: "Indian/Antananarivo",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(madagascarTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <>
      <BackToTopButton />

      <footer className="relative border-t border-slate-800/50">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16">
          {/* Newsletter Section */}
          <NewsletterSection />

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      <span className="text-white">Port</span>
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase">
                        Folio
                      </span>
                      <span className="text-white">.</span>
                    </h2>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                  Développeur passionné créant des expériences digitales
                  modernes et innovantes. Transformons ensemble vos idées en
                  réalité.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Antananarivo, Madagascar</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Heure locale: {currentTime} GMT+3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
              <div className="space-y-3">
                {navListe.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.path)}
                    className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 w-full text-left"
                  >
                    <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-200">
                      {item.icone}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.nom}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Me Suivre</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className={`group flex items-center gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 ${social.color} transition-all duration-300 hover:scale-105 hover:border-slate-600`}
                  >
                    <div className="text-slate-300 group-hover:text-white transition-colors duration-200">
                      {social.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800/50 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-slate-400 flex-wrap justify-center lg:justify-start">
                <span>© {currentYear} Herizo RAKOTOMAMPIONONA.</span>
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>à Madagascar</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400 flex-wrap justify-center">
                <button
                  onClick={() => handleNavClick("/privacy")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Confidentialité
                </button>
                <button
                  onClick={() => handleNavClick("/terms")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Conditions
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Site actif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
