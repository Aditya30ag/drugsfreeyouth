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
    <section className="bg-blue-900 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-4 sm:py-4 border-b sm:border-b-0 sm:border-r border-white/20 last:border-none text-white"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide text-white/90 mb-2 sm:mb-0 sm:mr-3">
                {stat.number}
              </span>
              <p className="font-serif text-sm sm:text-base lg:text-lg xl:text-xl font-medium leading-snug text-center sm:text-left">
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
