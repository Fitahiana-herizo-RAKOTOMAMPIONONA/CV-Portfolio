import {
    DiJava,
    DiJavascript
  } from "react-icons/di";
  
  import {
    SiTypescript,
    SiTailwindcss,
    SiTensorflow,
    SiMysql,
    SiPostgresql,
    SiPrisma,
    SiTypeorm
  } from "react-icons/si";
  
  import {
    FaDartLang,
    FaFlutter,
    FaNodeJs,
    FaPython,
    FaReact,
    FaRust,
    FaGitAlt
  } from "react-icons/fa6";
  
  export const skills = [
    // Langages
    {
      title: "Java",
      icone: <DiJava className="text-3xl text-red-600" />,
      level: 70
    },
    {
      title: "Python",
      icone: <FaPython className="text-3xl text-amber-700" />,
      level: 75
    },
    {
      title: "JavaScript",
      icone: <DiJavascript className="text-3xl text-yellow-300" />,
      level: 90
    },
    {
      title: "TypeScript",
      icone: <SiTypescript className="text-3xl text-blue-600" />,
      level: 75
    },
    {
      title: "Dart",
      icone: <FaDartLang className="text-3xl text-cyan-700" />,
      level: 70
    },
    // Frameworks / Bibliothèques
    {
      title: "Flutter",
      icone: <FaFlutter className="text-3xl text-blue-400" />,
      level: 85
    },
    {
      title: "React",
      icone: <FaReact className="text-3xl text-blue-500" />,
      level: 85
    },
    {
      title: "Node.js",
      icone: <FaNodeJs className="text-3xl text-green-600" />,
      level: 80
    },
    {
      title: "Tailwind CSS",
      icone: <SiTailwindcss className="text-3xl text-cyan-500" />,
      level: 95
    },
    {
      title: "TensorFlow",
      icone: <SiTensorflow className="text-3xl text-orange-400" />,
      level: 60
    },
  
    // Base de données / ORM
    {
      title: "MySQL",
      icone: <SiMysql className="text-3xl text-blue-700" />,
      level: 75
    },
    {
      title: "PostgreSQL",
      icone: <SiPostgresql className="text-3xl text-blue-600" />,
      level: 70
    },
    {
      title: "Prisma",
      icone: <SiPrisma className="text-3xl text-purple-600" />,
      level: 75
    },
    {
      title: "TypeORM",
      icone: <SiTypeorm className="text-3xl text-orange-500" />,
      level: 70
    },
  
    // Outils / Autres
    {
      title: "Git",
      icone: <FaGitAlt className="text-3xl text-orange-600" />,
      level: 85
    }
  ];
  