import { DiJava, DiJavascript } from "react-icons/di"
import { SiMysql, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si"
import { FaDartLang, FaFlutter, FaNodeJs, FaPython, FaReact, FaRust, FaVuejs } from "react-icons/fa6"
const skills =[
    {
        icone: <DiJava className="iconeSkills text-red-600"/>,
        title: "Java",
    }
    ,
    {
        icone: <FaPython className="iconeSkills text-amber-700"/>,
        title: "python",
    }
    ,
    {
        icone: <DiJavascript className="iconeSkills text-yellow-300"/>,
        title: "Javascript",
    },
    {
        icone: <SiTypescript className="iconeSkills text-blue-600"/>,
        title: "Typescript",
    },
    {
        icone: <FaDartLang className="iconeSkills"/>,
        title: "Dart",
    },
    {
        icone: <FaFlutter className="iconeSkills text-blue-400"/>,
        title: "Flutter",
    }
    ,
    {
        icone: <FaReact className="iconeSkills text-blue-400"/>,
        title: "react",
    }
    ,
    {
        icone: <FaNodeJs className="iconeSkills"/>,
        title: "Nodejs",
    },
    {
        icone: <SiTailwindcss className="iconeSkills text-blue-500"/>,
        title: "tailwindCSS",
    },
    {
        icone: <SiMysql className="iconeSkills"/>,
        title: "Mysql",
    },
    {
        icone: <SiTensorflow className="iconeSkills text-orange-400"/>,
        title: "tensorlow",
    }
]

export default skills