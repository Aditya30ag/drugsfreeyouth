import React from 'react';

const LeadershipPhilosophy = () => {
  const pillars = [
    {
      title: "Collaboration",
      description: "Aligning government, police, and civil society for unified action.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Innovation",
      description: "Introducing tech-enabled, scalable solutions like QR reporting systems.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "Sustainability",
      description: "Building institutions and systems, not just one-off events.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            A Leader with National Ambitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Suhail is not content with local success. His vision is to expand Drugs Free Youth across Karnataka and then nationally, turning it into a model that can be replicated in every Indian city.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Leadership Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className={`bg-card rounded-2xl p-8 text-foreground text-center`}>
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
          <p className="text-lg text-muted-foreground italic">
            &ldquo;This vision positions him not just as a regional reformer but as a national reform architect.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPhilosophy;
