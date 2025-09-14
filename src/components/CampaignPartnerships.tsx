import React from 'react';

const CampaignPartnerships = () => {
  const partnerCategories = [
    {
      title: "Police Departments",
      description: "for enforcement and fast response",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Faith Institutions",
      description: "for moral influence and community reach",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      title: "Schools & Colleges",
      description: "for education and youth empowerment",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "NGOs & Volunteers",
      description: "for grassroots mobilization",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-orange-600"
    },
    {
      title: "Corporate & Media",
      description: "for resources and amplification",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Partnerships That Power Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We don&apos;t do this alone — and that&apos;s our strength.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {partnerCategories.map((category, index) => (
            <div key={index} className={`bg-card rounded-2xl p-6 text-foreground text-center transform hover:scale-105 transition-all duration-300`}>
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            A Coalition of Change-Makers
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Together, we are building a coalition of change-makers who believe that the safety of our youth is non-negotiable. Every partnership strengthens our ability to protect and empower the next generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampaignPartnerships;
