import React from 'react';

const FourPillars = () => {
  const pillars = [
    {
      title: "Community Awareness",
      description: "We engage religious leaders, schools, and local influencers to speak openly about drugs, breaking the silence and stigma.",
      tagline: "Because awareness is the first weapon against denial.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Neighborhood Action Meets",
      description: "Grassroots \"corner meets\" activate communities to spot risks early, build local vigilance, and create trusted channels to law enforcement.",
      tagline: "Because real change starts where people live.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "Family Empowerment",
      description: "Parents and teachers are the first line of defense. Our parent programs, educator toolkits, and student dialogues ensure families are not left powerless.",
      tagline: "Because prevention begins at home.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      title: "Public Action & Pledges",
      description: "From walkathons to oath-taking ceremonies, we make the fight against drugs visible, loud, and collective.",
      tagline: "Because silence protects the problem — public action defeats it.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Approach: 4 Pillars of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don&apos;t believe in symbolic gestures. Every initiative we run has a purpose, a structure, and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className={`${pillar.bgColor} rounded-xl p-4 mr-6 flex-shrink-0`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{pillar.description}</p>
              <p className="text-sm font-semibold text-blue-600 italic">{pillar.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
