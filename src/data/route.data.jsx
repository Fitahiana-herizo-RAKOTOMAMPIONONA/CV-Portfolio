import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  FolderOpen,
  Award,
} from "lucide-react";

export const navListe = [
  {
    path: "/",
    nom: "Accueil",
    icone: <Home className="w-5 h-5" />,
  },
  {
    path: "/about",
    nom: "À propos",
    icone: <User className="w-5 h-5" />,
  },
  {
    path: "/credentials",
    nom: "Credentials",
    icone: <Award className="w-5 h-5" />,
  },
  {
    path: "/service",
    nom: "Services",
    icone: <Briefcase className="w-5 h-5" />,
  },
  {
    path: "/work",
    nom: "Projets",
    icone: <FolderOpen className="w-5 h-5" />,
  },
  // {
  //   path: "/blog",
  //   nom: "Blog",
  //   icone: <FileText className="w-5 h-5" />,
  // },
  {
    path: "/contact",
    nom: "Contact",
    icone: <Mail className="w-5 h-5" />,
  },
];
