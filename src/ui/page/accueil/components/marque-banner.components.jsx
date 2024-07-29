export default function MarqueeBanner() {
  return (
    <div className="card-animate md:col-span-2">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-1">
        <div className="relative bg-slate-900 rounded-3xl py-6 px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="relative z-10 flex items-center justify-center">
            <div className="animate-pulse">
              <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Salut, c'est Herizo - Développeur Full Stack passionné
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
