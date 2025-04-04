import { FaReact, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";

const WorkData = [
  {
    id_work: 1,
    title_work: "Chat Traductor",
    description_work:
      "Application mobile de chat en temps réel avec traduction multilingue, supportant actuellement l'anglais, le français et le malgache.",
    date: "2024-01-15",
    type: "mobile",
    file_url: "/assets/image/chat.png",
    slide_image_urls: ["/assets/image/chat.png", "/assets/image/chat.png"],
    created_at: "2024-12-20T03:14:00.000Z",
    updated_at: null,
    status: "terminé",
    author: null,
    category: "messaging",
    tags: ["multilingual", "real-time"],
    progress: 100,
    client_name: "Projet personnel",
    team_members: ["Herizo Carter", "Team"],
    remarks: "Projet complet.",
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "Flutter", icon: <FaReact /> },
      { name: "NestJs", icon: <FaNodeJs /> },
      { name: "Socket.io", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
    ],
    rating: 5,
    live_url: "https://chat-traductor.vercel.app/",
    github_url: "https://github.com/i-tsaho/CHAT.git",
  },
  {
    id_work: 2,
    title_work: "Voteo",
    description_work:
      "Application de vote en ligne qui facilite les tâches des administrateurs et organisateurs de scrutin et offre davantage de réduction du temps perdu, réduction des coûts ainsi qu'une sécurité accrue.",
    date: "2004-04-05",
    type: "web",
    file_url: "/assets/image/voteo.webp",
    slide_image_urls: [
      "/assets/slides/voteo-slide-1.png",
      "/assets/slides/voteo-slide-2.png",
      "/assets/slides/voteo-slide-3.png",
    ],
    created_at: "2024-12-20T03:14:00.000Z",
    updated_at: null,
    status: "en cours",
    author: null,
    category: null,
    tags: null,
    progress: 50,
    client_name: "ISPM",
    team_members: null,
    remarks: null,
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    rating: null,
    live_url: "https://voteo22.vercel.app/",
    github_url: "https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA/voteo22",
  },
  {
    id_work: 3,
    title_work: "DactyloTrain",
    description_work:
      "Application sous Linux/windows permettant d'améliorer la vitesse de frappe en mesurant les WPM (mots par minute) et en proposant des exercices interactifs pour perfectionner la dactylographie.",
    date: "2025-04-01",
    type: "mobile",
    file_url: "/assets/image/dactylo.png",
    slide_image_urls: [
      "/assets/slides/dactylotrain-slide-1.png",
      "/assets/slides/dactylotrain-slide-2.png",
      "/assets/slides/dactylotrain-slide-3.png",
    ],
    created_at: "2025-04-01T10:00:00.000Z",
    updated_at: null,
    status: "en cours",
    author: "Herizo Carter",
    category: "Éducation",
    tags: ["dactylographie", "productivité", "apprentissage"],
    progress: 40,
    client_name: null,
    team_members: ["Herizo Carter"],
    remarks: "Ajout de nouveaux exercices en cours.",
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "Flutter", icon: "<FaFlutter />" },
      { name: "Provider", icon: "<FaCode />" },
    ],
    rating: null,
    live_url: "https://dactylotrain.example.com",
    github_url: "https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA/DactyloTrain",
  },
  {
    id_work: 4,
    title_work: "Sary Ts'art",
    description_work: "Application web de réseau social.",
    date: "2004-04-05",
    type: "web static",
    file_url: "/assets/image/projet-2.jpg",
    slide_image_urls: [
      "/assets/slides/sary-tsart-slide-1.png",
      "/assets/slides/sary-tsart-slide-2.png",
    ],
    created_at: "2024-12-20T03:14:00.000Z",
    updated_at: null,
    status: "en cours",
    author: null,
    category: null,
    tags: null,
    progress: 50,
    client_name: "ISPM",
    team_members: null,
    remarks: null,
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    rating: null,
    live_url: "",
    github_url: "",
  },
  {
    id_work: 5,
    title_work: "Histories",
    description_work:
      "Application web dynamique permettant de poster, publier, écouter et lire des histoires.",
    date: "2024-03-10",
    type: "web",
    file_url: null,
    slide_image_urls: [
      "/assets/image/gfonts.png",
      "/assets/image/projet-1.png",
    ],
    created_at: "2024-12-20T03:14:00.000Z",
    updated_at: null,
    status: "terminé",
    author: null,
    category: "stories",
    tags: ["creative", "interactive"],
    progress: 100,
    client_name: "Projet personnel",
    team_members: ["Herizo Carter", "Team"],
    remarks: "Expérience enrichissante en collaboration.",
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "TailwindCSS", icon: <FaCss3Alt /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MySQL", icon: <FaDatabase /> },
    ],
    rating: 4.5,
    live_url: "https://histories.example.com",
    github_url: "https://github.com/username/histories",
  },
  {
    id_work: 6,
    title_work: "CommuneHub",
    description_work:
      "Application web statique permettant de faciliter les taches d' administrater au sein d'une commune.",
    date: "2024-03-10",
    type: "web static",
    file_url: "/assets/image/kaominina-1.webp",
    slide_image_urls: [
      "/assets/image/kaominina-1.webp",
      "/assets/image/kaominina-2.webp ",
    ],
    created_at: "2024-12-20T03:14:00.000Z",
    updated_at: null,
    status: "en cours",
    author: null,
    category: "stories",
    tags: ["creative", "interactive"],
    progress: 10,
    client_name: "Projet personnel",
    team_members: ["Herizo"],
    remarks: "Application du concept de react.",
    is_archived: 0,
    visibility: "public",
    technologies_used: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    rating: 2.5,
    live_url: "",
    github_url: "https://kaominina-hub.vercel.app/",
  },
];

export { WorkData };
