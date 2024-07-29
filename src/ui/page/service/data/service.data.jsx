import {
  Code,
  Smartphone,
  Palette,
  Database,
  Globe,
  Zap,
  TrendingUp,
} from "lucide-react";
export const servicesData = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Développement Web",
    description:
      "Création d'applications web modernes et responsives avec React, Next.js et les dernières technologies front-end et back-end.",
    features: [
      "React/Next.js",
      "Node.js/Express",
      "Base de données",
      "API REST",
    ],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    price: "À Discuter",
    duration: "4-8 semaines",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et cross-platform pour iOS et Android avec React Native et Flutter.",
    features: ["React Native", "Flutter", "iOS/Android", "App Store"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    price: "À Discuter",
    duration: "4-8 semaines",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design UI/UX",
    description:
      "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur optimales pour vos applications.",
    features: [
      "Figma/Adobe XD",
      "Prototypage",
      "User Research",
      "Design System",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    price: "Prix a Discuter",
    duration: "1-3 semaines",
  },
];

export const additionalServices = [
  { icon: <Database className="w-5 h-5" />, title: "Base de données" },
  { icon: <Globe className="w-5 h-5" />, title: "Déploiement & Hosting" },
  { icon: <Zap className="w-5 h-5" />, title: "Optimisation Performance" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "SEO & Analytics" },
];
