import React from 'react';

const LookingAhead = () => {
  const futureInitiatives = [
    {
      title: "Expanding Across Karnataka",
      description: "Scaling our proven model to reach communities throughout the state",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Digital Resources Hub",
      description: "Mobile app, parent helplines, and comprehensive self-help guides",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "Youth Ambassador Program",
      description: "Training young leaders to become peer educators and change agents",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      title: "Rehabilitation Support Network",
      description: "Connecting families in crisis with professional treatment and recovery resources",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Looking Ahead
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is just the beginning. Our vision extends far beyond what we&apos;ve accomplished so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {futureInitiatives.map((initiative, index) => (
            <div key={index} className={`bg-card rounded-3xl p-8 text-foreground transform hover:scale-105 transition-all duration-300`}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-primary-foreground">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Building a Sustainable Future
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-bold text-xl text-foreground mb-4">Our 5-Year Vision</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    50+ communities across Karnataka actively participating in drug prevention
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    10,000+ families equipped with prevention knowledge and tools
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    1,000+ youth ambassadors leading change in their schools and neighborhoods
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive support network for families affected by drug abuse
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-2xl p-8">
                <h4 className="font-bold text-xl text-foreground mb-4">Making It Happen</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our expansion strategy focuses on sustainable, community-led initiatives that can thrive independently while maintaining our core values of collaboration, transparency, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingAhead;
