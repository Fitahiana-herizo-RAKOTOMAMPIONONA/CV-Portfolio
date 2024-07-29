import { MapPin } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";

export default function ProfileCard() {
  return (
    <div className="card-animate group lg:row-span-2">
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

          <div className="text-center space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Herizo Fitahiana
              </h2>
              <p className="text-slate-400 mb-1">@Zoufitahiana</p>
              <p className="text-slate-300 text-sm">Développeur Full Stack</p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Disponible
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Madagascar</span>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              {[
                { icon: FaFacebook, color: "hover:text-blue-400" },
                { icon: LiaLinkedinIn, color: "hover:text-blue-500" },
                { icon: BsInstagram, color: "hover:text-pink-400" },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-slate-800 border border-slate-700 ${social.color} hover:border-current rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-slate-700`}
                >
                  <social.icon className="text-xl text-slate-400 hover:text-current transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
