import { MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="card-animate group">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-900 rounded-3xl p-8 h-full">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/assets/image/profile.jpg"
              alt="Profile"
              className="relative w-full aspect-square object-cover rounded-2xl border-2 border-slate-700"
            />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Disponible
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Madagascar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
