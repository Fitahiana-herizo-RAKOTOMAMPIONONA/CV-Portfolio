import React from "react";
import { Award, Calendar, ExternalLink, Building2 } from "lucide-react";

const CertificationCard = ({ title, data, icon: Icon = Award }) => {
  return (
    <div className="card-animate w-full">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 h-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white capitalize">{title}</h2>
        </div>

        <div className="space-y-6">
          {data.map((cert, index) => (
            <div key={index} className="group">
              <div className="relative p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="relative">
                    {cert.image ? (
                      <>
                        <img
                          src={cert.image}
                          alt={`${cert.issuer} logo`}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-600"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-slate-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-purple-400" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {cert.title}
                      </h3>
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors duration-200 ml-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 font-medium">
                        {cert.issuer}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">
                        {cert.date}
                      </span>
                    </div>
                    
                    {cert.description && (
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    )}
                    
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 hover:border-blue-500/50 transition-colors duration-200"
                          >
                            #{skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;