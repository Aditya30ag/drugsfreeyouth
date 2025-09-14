import React from 'react';

const DrugsFreeYouthVision = () => {
  const achievements = [
    {
      title: "QR-Code Reporting System",
      description: "Partnered with Mangaluru City Police and Udupi Police to launch anonymous reporting - a breakthrough model for community-led vigilance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Parent & Educator Programs",
      description: "Created programs that bridge the awareness gap at home and in schools.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    },
    {
      title: "Community Mobilization",
      description: "Organized walkathons, oath-taking ceremonies, and corner meets bringing awareness into mainstream community discourse.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            The Birth of Drugs Free Youth
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The drug menace in India, particularly among the youth, is a public health and social stability crisis. Suhail recognized early on that solving it required more than sporadic campaigns. It required a movement — one that was collaborative, tech-enabled, and relentless in execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Impact in Thousands</h3>
          <p className="text-primary-foreground/80 leading-relaxed">
            Reached thousands of youth and parents in just the first phase of operations.
          </p>
          <p className="text-xl font-semibold mt-4 text-primary-foreground">
            This isn&apos;t charity — it&apos;s a blueprint for societal resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrugsFreeYouthVision;
