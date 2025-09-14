import React from 'react';

const CampaignImpact = () => {
  const stats = [
    { number: "20+", label: "Awareness Programs", description: "delivered across Mangaluru and Udupi" },
    { number: "500+", label: "Parents Trained", description: "to recognize early warning signs" },
    { number: "800+", label: "Youth Engaged", description: "as ambassadors of resilience" },
    { number: "200+", label: "Volunteers Activated", description: "across districts" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Impact So Far
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real numbers, real impact, real change happening in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
                {stat.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Anonymous Reports Filed</h3>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Countless anonymous reports have been filed through our QR system, leading to real action and measurable results in drug prevention and enforcement.
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-semibold uppercase tracking-wide">Leading to Real Action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignImpact;
