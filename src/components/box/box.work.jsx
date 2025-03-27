import { useState } from "react";
import { DiJava } from "react-icons/di";
import { FaDemocrat } from "react-icons/fa";
import { Link } from "react-router-dom";

export function BoxWork(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-[#1F2937] rounded-3xl overflow-hidden shadow-lg border border-gray-800 max-w-[450px] w-full">
      <div className="h-[200px] overflow-hidden">
        <img 
          src={props.image?? "/assets/image/projectcycle.webp"} 
          alt={props.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">

        <div className="uppercase text-gray-400 text-sm mb-2">
          {props.type}
        </div>

        <div className="text-lg font-bold text-white mb-2">
          {props.title}
        </div>
        <div className="pt-3 pb-5">
          {showFullDescription ? (
            <>
              {props.description}
              <button 
                onClick={() => setShowFullDescription(false)} 
                className="text-blue-500 hover:underline ml-1"
              >
                Voir moins
              </button>
            </>
          ) : (
            <>
              {props.description.length > 100 ? (
                <>
                  {props.description.slice(0, 100)}...
                  <button 
                    onClick={() => setShowFullDescription(true)} 
                    className="text-blue-500 hover:underline ml-1"
                  >
                    Voir plus
                  </button>
                </>
              ) : (
                props.description
              )}
            </>
          )}
        </div>
        <div className="flex space-x-2 mb-4 flex-wrap">
          {props.technologies.map((tech, index) => {
            const techIcons = {
              'Dart': '🔷',
              'Flutter': '⚡',
              'Javascript': '🟨',
              'Node': '🟢',
              'Php': '🔷',
              'MySQL': '🐬',
              'Postgresql': '🐘'
            };
            return (
              <div 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300 flex p-2"
              >
                <div> {techIcons[tech]}</div>
                <div>{tech}</div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 justify-between items-center">
          <Link 
            to={`/work/${props.to}/code`}
            className="text-gray-400 hover:text-white text-sm flex items-center bg-slate-600 flex-1 bg-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Code
          </Link>

          <Link 
            to={`/work/${props.to}/demo`}
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 text-sm px-3 py-1 rounded flex-1 "
          >
            <FaDemocrat/>
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}