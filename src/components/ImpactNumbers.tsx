import React from 'react';

const ImpactNumbers = () => {
  const stats = [
    { number: "20+", label: "Awareness Programs", description: "conducted across Mangaluru & Udupi" },
    { number: "500+", label: "Parents Reached", description: "through interactive workshops" },
    { number: "800+", label: "Youth Empowered", description: "to lead positive change" },
    { number: "200+", label: "Active Volunteers", description: "working on the ground" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real numbers, real impact, real change happening in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-3xl p-8 sm:p-12 text-primary-foreground text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Growing Every Day</h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            These numbers represent more than statistics – they represent lives touched, families protected, and communities strengthened. Every program, every workshop, every volunteer hour contributes to building a drug-free future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
