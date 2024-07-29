import { useState, useEffect } from 'react';
import { Calendar, Users, FolderOpen } from 'lucide-react';
export default function StatisticsCard() {
    const [counters, setCounters] = useState([0, 0, 0]);
    const statistics = [
      { number: 2, description: "Ans d'expérience", icon: Calendar },
      { number: 12, description: "Clients satisfaits", icon: Users },
      { number: 23, description: "Projets réalisés", icon: FolderOpen }
    ];
  
    useEffect(() => {
      const animateCounters = () => {
        statistics.forEach((stat, index) => {
          let current = 0;
          const target = stat.number;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }, 40);
        });
      };
  
      const timer = setTimeout(animateCounters, 1000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="card-animate">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-slate-900 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {statistics.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group/stat">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {index < 2 ? counters[index] : `+${counters[index]}`}
                      </p>
                      <p className="text-slate-400 font-medium">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  