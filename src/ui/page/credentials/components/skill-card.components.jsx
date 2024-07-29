import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-slate-800/50 hover:bg-slate-800/70 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer border border-slate-700/50 hover:border-blue-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {skill.icone}
      </div>

      <h4 className="text-white font-semibold text-sm mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {skill.title}
      </h4>

      {/* Barre de progression */}
      <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isHovered ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 50}ms`,
          }}
        ></div>
      </div>

      <span className="text-xs text-slate-400">{skill.level}%</span>

      {isHovered && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <BsArrowUpRight className="text-blue-400 text-sm" />
        </div>
      )}
    </div>
  );
}
