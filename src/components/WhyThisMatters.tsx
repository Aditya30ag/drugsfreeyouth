import React from 'react';

const WhyThisMatters = () => {
  const stats = [
    {
      number: "30%",
      description: "of youth in India experiment with drugs before age 21",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: "Too Late",
      description: "Families often fail to recognize warning signs until it's too late",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: "100%",
      description: "Prevention is possible with community action and early intervention",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why This Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The urgency of our mission is backed by sobering realities that demand immediate action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              The Ripple Effect of Drug Abuse
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl text-foreground mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Individual Impact
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Destroys personal health and mental wellbeing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ruins educational and career opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Leads to financial ruin and legal troubles
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-foreground mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                  Community Impact
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fuels organized crime and violence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Weakens social fabric and trust
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Creates unsafe neighborhoods
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary rounded-2xl p-6 text-primary-foreground text-center">
              <h4 className="font-bold text-xl mb-4">But There&apos;s Hope</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                We believe prevention is possible — but only if every parent, teacher, neighbor, and citizen joins the effort. When communities unite with a common purpose, change becomes inevitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
