export default function TitleSection({TitleSection , Soustitre, description}) {
  return (
    <div className="card-animate lg:col-span-2">
      <div className="h-full flex flex-col justify-center text-center lg:text-left p-8">
        <div className="inline-flex items-center gap-2 text-blue-400 mb-4 justify-center lg:justify-start">
          <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="text-sm font-medium uppercase tracking-wider">
           {Soustitre}
          </span>
        </div>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {TitleSection}
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
