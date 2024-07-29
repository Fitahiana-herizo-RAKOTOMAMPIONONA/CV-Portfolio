import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Briefcase,
  TrendingUp,
  Github,
  ExternalLink,
  Send,
  MessageCircle,
  Mail,
  Globe,
  Code,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation hook
const useSlideAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-animate");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 150 + 200);
    });
  }, []);
};

// Sample project data
const WorkData = {
  1: {
    id_work: 1,
    title_work: "E-Commerce Platform",
    description_work:
      "Une plateforme e-commerce complète avec gestion des commandes, paiements intégrés et interface d'administration moderne. Cette application offre une expérience utilisateur fluide avec des fonctionnalités avancées de recherche, filtrage et recommandations personnalisées.",
    file_url:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies_used: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Express",
      "JWT",
    ],
    type: "Web Application",
    date: "2024",
    client_name: "TechStart Madagascar",
    progress: 95,
    remarks:
      "Ce projet a été développé en suivant les meilleures pratiques de développement web moderne. L'architecture modulaire permet une maintenance facile et des extensions futures. La sécurité a été une priorité avec l'implémentation de l'authentification JWT et la validation côté serveur.",
    github_link: "https://github.com/example/ecommerce",
    live_version: "https://example-ecommerce.com",
    slide_image_urls: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    ],
  },
};

// Navigation Breadcrumb
function Breadcrumb({ projectTitle }) {
  return (
    <div className="slide-animate mb-8">
      <div className="flex items-center gap-3 text-slate-400">
        <Link
          href="/work"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Projets</span>
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-white truncate">{projectTitle}</span>
      </div>
    </div>
  );
}

// Project Hero Section
function ProjectHero({ project, loading }) {
  return (
    <div className="slide-animate mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
          {/* Project Header */}
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                    {project?.type || "Web Application"}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project?.date || "2024"}</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    {loading
                      ? "Chargement..."
                      : project?.title_work || "Titre du projet"}
                  </span>
                </h1>

                <p className="text-slate-300 text-lg max-w-3xl">
                  {project?.description_work ||
                    "Description du projet en cours de chargement..."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col">
                {project?.live_version && (
                  <a
                    href={project.live_version}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group/btn"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Voir en direct</span>
                  </a>
                )}
                {project?.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code source</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main Project Image */}
          <div className="relative">
            {loading ? (
              <div className="w-full h-64 lg:h-96 bg-slate-800 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              </div>
            ) : (
              <img
                src={project?.file_url}
                alt="Aperçu du projet"
                className="w-full h-64 lg:h-96 object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Info Cards
function ProjectInfoCard({ title, children, className = "" }) {
  return (
    <div className={`slide-animate ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 group hover:scale-[1.02] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-900 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

// Technologies Grid
function TechnologiesSection({ technologies }) {
  return (
    <ProjectInfoCard title="Technologies utilisées" className="lg:col-span-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies?.map((tech, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-slate-800 p-4 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-300 font-medium text-sm">{tech}</span>
            </div>
          </div>
        )) || (
          <p className="text-slate-400 col-span-full">
            Aucune technologie spécifiée
          </p>
        )}
      </div>
    </ProjectInfoCard>
  );
}

// Project Details
function ProjectDetails({ project }) {
  const details = [
    { icon: Calendar, label: "Année", value: project?.date || "Non spécifiée" },
    {
      icon: User,
      label: "Client",
      value: project?.client_name || "Non spécifié",
    },
    {
      icon: Briefcase,
      label: "Service",
      value: project?.type || "Non spécifié",
    },
    { icon: TrendingUp, label: "Progrès", value: `${project?.progress || 0}%` },
  ];

  return (
    <ProjectInfoCard title="Détails du projet">
      <div className="space-y-6">
        {details.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  {detail.label}
                </p>
                <p className="text-white font-semibold">{detail.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ProjectInfoCard>
  );
}

// About Section
function AboutSection({ project }) {
  return (
    <ProjectInfoCard title="À propos du projet" className="lg:col-span-2">
      <div className="prose prose-invert max-w-none">
        <p className="text-slate-300 leading-relaxed text-lg">
          {project?.remarks ||
            "Pas d'informations supplémentaires disponibles pour le moment."}
        </p>
      </div>
    </ProjectInfoCard>
  );
}

// Image Carousel
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="slide-animate lg:col-span-3 mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Galerie d'images
            </h2>
          </div>

          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-64 lg:h-80 object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 border border-slate-700 rounded-full text-white hover:bg-slate-800 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 border border-slate-700 rounded-full text-white hover:bg-slate-800 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots indicator */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? "bg-blue-500" : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Comments Section
function CommentsSection({ comments = [] }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
    // Handle comment submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="slide-animate lg:col-span-3">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="relative bg-slate-900 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            Commentaires
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Comment Form */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-6">
                Laisser un commentaire
              </h3>
              <div onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full p-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@gmail.com"
                  className="w-full p-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  required
                />
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Votre commentaire..."
                  rows={5}
                  className="w-full p-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Envoyer le commentaire</span>
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Commentaires ({comments.length})
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold text-sm">
                            {comment.username?.charAt(0).toUpperCase() || "U"}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-white text-sm">
                              {comment.username}
                            </h4>
                            <span className="text-slate-400 text-xs">
                              {comment.email_user}
                            </span>
                          </div>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {comment.content_comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <MessageCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400">
                      Soyez le premier à commenter ce projet
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function WorkDetail() {
  const id_work = "1"; // Simulated project ID
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useSlideAnimation();

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay
        setTimeout(() => {
          setData(WorkData[id_work] || WorkData[1]);
          setComments([
            {
              username: "Marie Dupont",
              email_user: "marie@example.com",
              content_comment:
                "Excellent travail ! L'interface utilisateur est très intuitive et moderne.",
            },
            {
              username: "Jean Martin",
              email_user: "jean@example.com",
              content_comment:
                "Bravo pour ce projet. La fonctionnalité de paiement est très bien intégrée.",
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData(WorkData[1]);
        setLoading(false);
      }
    };

    fetchData();
  }, [id_work]);

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          projectTitle={
            loading ? "Chargement..." : data?.title_work || "Projet"
          }
        />

        {/* Project Hero */}
        <ProjectHero project={data} loading={loading} />

        {/* Image Carousel */}
        {data?.slide_image_urls && data.slide_image_urls.length > 0 && (
          <ImageCarousel images={data.slide_image_urls} />
        )}

        {/* Project Information Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <ProjectDetails project={data} />
          <TechnologiesSection technologies={data?.technologies_used} />
          <AboutSection project={data} />
        </div>

        {/* Comments Section */}
        <CommentsSection comments={comments} />
      </div>
    </div>
  );
}
