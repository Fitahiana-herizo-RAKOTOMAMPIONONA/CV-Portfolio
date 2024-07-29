import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="animate-card mb-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-8">
          <Star className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-medium">
            Services Professionnels
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Services
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Offerts
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Je propose des solutions digitales complètes pour transformer vos
          idées en réalité. De la conception à la mise en production,
          accompagnement personnalisé garanti.
        </p>
      </div>
    </div>
  );
}
