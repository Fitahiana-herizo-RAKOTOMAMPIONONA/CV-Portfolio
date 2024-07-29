import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Award,
  Mail,
  ArrowRight,
  Calendar,
  Layers,
  Zap,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { WorkDataFormatted } from "../../../data/work.secure.data";

// Animation hook
const useStaggeredAnimation = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-animate");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px) scale(0.95)";
      setTimeout(() => {
        card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, index * 100 + 200);
    });
  }, []);
};

// Title Section Component
function ProjectsTitle() {
  return (
    <div className="card-animate col-span-full mb-8">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 text-blue-400 mb-4 justify-center lg:justify-start">
          <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
        </div>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Projets
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0">
          Découvrez mes réalisations les plus récentes et créatives
        </p>
      </div>
    </div>
  );
}

// Enhanced Project Card
function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`card-animate ${project.featured ? "lg:col-span-2" : ""}`}>
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-slate-900 rounded-3xl overflow-hidden h-full">
          {/* Project Image */}
          <div
            className={`relative overflow-hidden ${
              project.featured ? "h-64 lg:h-80" : "h-48 lg:h-56"
            }`}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={project.file_url}
              alt={project.title_work}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
            )}

            {/* Project Type */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm text-blue-400 text-sm font-medium">
                {project.type}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.live_url && (
                <a
                  href={project.live_url}
                  className="p-3 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  className="p-3 bg-slate-800/90 border border-slate-700 text-white rounded-xl hover:bg-slate-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 lg:p-8">
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                {project.title_work}
              </h3>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                {project.description_work}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies_used.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-blue-500/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <button className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 group/btn">
              <Eye className="w-4 h-4" />
              <span>Voir plus</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading Skeleton
function ProjectSkeleton() {
  return (
    <div className="card-animate">
      <div className="bg-slate-900 rounded-3xl p-1 animate-pulse">
        <div className="bg-slate-800 rounded-3xl overflow-hidden">
          <div className="h-48 lg:h-56 bg-slate-700" />
          <div className="p-6 lg:p-8 space-y-4">
            <div className="h-6 bg-slate-700 rounded-full w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded-full w-full" />
              <div className="h-4 bg-slate-700 rounded-full w-2/3" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-slate-700 rounded-full w-16" />
              <div className="h-6 bg-slate-700 rounded-full w-20" />
              <div className="h-6 bg-slate-700 rounded-full w-18" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Quick Access Card
function QuickAccessCard({
  description,
  title,
  icon: Icon,
  href = "#",
  className = "",
}) {
  return (
    <div className={`card-animate ${className}`}>
      <Link to={href} className="block group h-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 hover:scale-105 transition-all duration-300 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-slate-900 rounded-3xl p-6 lg:p-8 h-full flex flex-col justify-center items-center text-center">
            {/* Icon */}
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                {description}
              </p>
              <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                {title}
              </h3>
            </div>

            {/* External Link Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Collaboration CTA
function CollaborationCTA() {
  return (
    <div className="card-animate col-span-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-1 group hover:scale-[1.01] transition-all duration-300">
        <div className="relative bg-slate-900 rounded-3xl p-8 lg:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Collaborons</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ensemble.
              </span>
            </h2>
            <p className="text-slate-300 lg:text-lg mb-8 max-w-2xl mx-auto">
              Prêt à transformer vos idées en réalité ? Discutons de votre
              prochain projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-colors duration-200 group/btn">
                <Mail className="w-5 h-5" />
                <span>Démarrer un projet</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useStaggeredAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setData(WorkDataFormatted);
          setLoad(true);
        }, 1000);
      } catch (error) {
        console.log(error);
        setData(WorkDataFormatted);
        setLoad(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* Title Section */}
          <ProjectsTitle />

          {/* Projects Grid */}
          <div className="col-span-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {load && data.length > 0
                ? data.map((project, index) => (
                    <ProjectCard
                      key={project.id_work}
                      project={project}
                      index={index}
                    />
                  ))
                : Array.from({ length: 4 }).map((_, index) => (
                    <ProjectSkeleton key={index} />
                  ))}
            </div>
          </div>

          {/* Quick Access Cards */}
          <QuickAccessCard
            description="BLOG"
            title="gFonts"
            icon={Palette}
            href="/blog"
          />

          <QuickAccessCard
            description="SPÉCIALISATION"
            title="Services offerts"
            icon={Zap}
            href="/service"
          />

          <QuickAccessCard
            description="CERTIFICATIONS"
            title="Credentials"
            icon={Award}
            href="/credentials"
          />

          <QuickAccessCard
            description="POUR PLUS"
            title="Contactez-moi"
            icon={Mail}
            href="/contact"
          />

          {/* Collaboration CTA */}
          <CollaborationCTA />
        </div>
      </div>
    </div>
  );
}
