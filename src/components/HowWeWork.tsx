import React from 'react';

const HowWeWork = () => {
  const pillars = [
    {
      title: "Community Awareness",
      description: "Programs at religious institutions, schools, and public spaces",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    },
    {
      title: "Neighborhood Action",
      description: "Corner meets that create local watchdog networks",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    },
    {
      title: "Family Empowerment",
      description: "Workshops and resources for parents and educators",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    },
    {
      title: "Public Mobilization",
      description: "Walkathons, pledge ceremonies, and awareness rallies",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
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
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our approach is built around four interconnected pillars that create lasting community change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className={`bg-card rounded-3xl p-8 text-foreground transform hover:scale-105 transition-all duration-300`}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-primary-foreground">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Anonymous QR-Code Reporting System
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In addition to our four pillars, we&apos;ve launched an innovative anonymous QR-code based reporting system in partnership with the police to ensure quick, safe, and accountable action against peddlers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Quick Response</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"/>
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                </svg>
                <span className="font-semibold">Anonymous</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Accountable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
