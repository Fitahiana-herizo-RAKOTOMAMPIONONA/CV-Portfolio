import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { FaDemocrat, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export function BoxWork(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-[#1F2937] rounded-3xl overflow-hidden shadow-lg border border-gray-800 max-w-[450px] w-full">
      <div className="h-[200px] overflow-hidden">
        <img
          src={props.image ?? "/assets/image/projectcycle.webp"}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="uppercase text-gray-400 text-sm mb-2">{props.type}</div>

        <div className="text-lg font-bold text-white mb-2">{props.title}</div>
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
            return (
              <div
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300 flex gap-2 p-2"
              >
                <div> {tech.icon}</div>
                <div>{tech.name}</div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 justify-between items-center">
          {/* <CustomActionButton icone={<FaPlay />} title="Plus" to={props.to}/> */}
          <CustomActionButton icone={<BsGithub />} title="code" to={props.github_url} />
          <CustomActionButton icone={<FaPlay />} title="Demo" to={props.live_url}/>
        </div>
      </div>
    </div>
  );
}

const CustomActionButton = (props) => {
  return (
    <a
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 hover:text-white text-sm flex items-center bg-slate-600 px-3 py-1 rounded flex-1 justify-center ${props.className}`}
    >
      {props.icone}
      {props.title}
    </a>
  );
};
