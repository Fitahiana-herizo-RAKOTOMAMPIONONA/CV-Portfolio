import React, { useState, useEffect } from "react";
import { navListe } from "../../../data/route.data";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA",
    icon: <Github className="w-4 h-4" />,
    color: "hover:bg-gray-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fitahiana-herizo-rakotomampionona-586960277/",
    icon: <Linkedin className="w-4 h-4" />,
    color: "hover:bg-blue-600",
  },
  {
    name: "Email",
    url: "mailto:fitahianaherizo10@gmail.com",
    icon: <Mail className="w-4 h-4" />,
    color: "hover:bg-red-600",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+261281824169",
    icon: <Phone className="w-4 h-4" />,
    color: "hover:bg-green-600",
  },
];

function SocialLink({ name, url, icon, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl ${color} transition-all duration-300 hover:scale-110 hover:border-slate-600`}
      aria-label={name}
    >
      <div className="relative z-10 text-slate-300 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
      </div>
    </a>
  );
}

function NavLink({ item, isActive, isMobile = false, onClick }) {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`group relative flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white"
          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
      } ${isMobile ? "w-full justify-start" : ""}`}
    >
      <div
        className={`transition-colors duration-200 ${
          isActive
            ? "text-blue-400"
            : "text-slate-400 group-hover:text-blue-400"
        }`}
      >
        {item.icone}
      </div>

      <span
        className={`font-medium transition-colors duration-200 ${
          isActive ? "text-white" : "group-hover:text-white"
        }`}
      >
        {item.nom}
      </span>

      {isActive && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
      )}

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isActive ? "opacity-100" : ""
        }`}
      />
    </Link>
  );
}

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 10) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavVisible(false);
      setIsMenuActive(false);
    } else {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuActive && !event.target.closest(".mobile-menu-container")) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuActive]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-xl border-b border-slate-800/50" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="relative z-10 flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zou
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navListe.map((item, index) => (
                <NavLink
                  key={index}
                  item={item}
                  isActive={location.pathname === item.path}
                />
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-10 p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 text-slate-300 transition-all duration-300 ${
                    isMenuActive
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 text-slate-300 transition-all duration-300 ${
                    isMenuActive
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuActive ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuActive ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`mobile-menu-container absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 transition-all duration-500 ${
            isMenuActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="space-y-2 mb-8">
            {navListe.map((item, index) => (
              <NavLink
                key={index}
                item={item}
                isActive={location.pathname === item.path}
                isMobile={true}
                onClick={closeMenu}
              />
            ))}
          </div>

          <div className="border-t border-slate-800/50 pt-6">
            <p className="text-slate-400 text-sm font-medium mb-4">Me suivre</p>
            <div className="flex items-center gap-3 justify-center">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </>
  );
}
