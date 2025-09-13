import React from "react";

interface StatItem {
  number: string;
  label: string;
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    { number: "20+", label: "Awareness Programs Conducted" },
    { number: "500+", label: "Parents Reached" },
    { number: "800+", label: "Youth Empowered" },
    { number: "200+", label: "Volunteers & Supporters" },
  ];

  return (
    <section className="bg-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-4 border-r border-white/20 last:border-none text-white"
            >
              <span className="font-serif text-5xl lg:text-6xl font-light tracking-wide text-white/90 mr-3">
                {stat.number}
              </span>
              <p className="font-serif text-lg lg:text-xl font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
