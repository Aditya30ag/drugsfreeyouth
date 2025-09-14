import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-card rounded-3xl p-8 sm:p-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
            </div>
            <blockquote className="text-xl sm:text-2xl font-semibold text-foreground mb-6 italic">
              &ldquo;To build a drug-free future by uniting parents, educators, communities, and law enforcement in proactive action against drug abuse.&rdquo;
            </blockquote>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that no child should lose their future to addiction. Our mission is to protect the next generation through awareness, prevention, early intervention, and community mobilization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By equipping families, empowering youth, and enabling law enforcement, we aim to create an ecosystem where drug abuse finds no place to thrive.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-3xl p-8 sm:p-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We envision a society where:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Parents are aware</strong> of the signs of drug abuse and equipped to intervene.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Youth are empowered</strong> to make positive choices and become ambassadors of change.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Communities are vigilant</strong> and proactive in reporting peddlers.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Law enforcement and civil society</strong> work hand-in-hand to dismantle narcotics networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
