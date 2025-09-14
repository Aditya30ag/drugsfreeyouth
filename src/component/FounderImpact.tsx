import React from 'react';

const FounderImpact = () => {
  const stats = [
    { number: "20+", label: "Awareness Programs", description: "already delivered" },
    { number: "500+", label: "Parents Reached", description: "through structured sessions" },
    { number: "800+", label: "Youth Empowered", description: "as ambassadors of change" },
    { number: "200+", label: "Volunteers", description: "mobilized across districts" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These numbers represent the foundation of a larger movement that is only set to grow under his leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderImpact;
