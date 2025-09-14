import React from 'react';

const PartnersEndorsements = () => {
  const partners = [
    {
      category: "Law Enforcement",
      organizations: [
        { name: "Mangaluru City Police", type: "Primary Partner" },
        { name: "Udupi District Police", type: "Collaborator" },
        { name: "Karnataka State Police", type: "State Support" },
        { name: "Anti-Narcotics Cell", type: "Specialist Unit" }
      ],
      bgColor: "bg-blue-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      category: "Educational Institutions",
      organizations: [
        { name: "Manipal University", type: "Academic Partner" },
        { name: "NMAMIT Nitte", type: "Technical Support" },
        { name: "St. Aloysius College", type: "Community Partner" },
        { name: "Canara College", type: "Outreach Partner" }
      ],
      bgColor: "bg-green-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
        </svg>
      )
    },
    {
      category: "NGOs & Social Organizations",
      organizations: [
        { name: "MakeAChange Foundation", type: "Founding Organization" },
        { name: "B_HUMAN.IN", type: "Social Innovation" },
        { name: "Rotary Club Mangalore", type: "Service Partner" },
        { name: "Lions Club Udupi", type: "Community Service" }
      ],
      bgColor: "bg-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    },
    {
      category: "Corporate & Healthcare",
      organizations: [
        { name: "Invenu Global Gateway LLP", type: "Legal Support" },
        { name: "Coastal Infratech India", type: "Infrastructure" },
        { name: "KMC Hospital Mangalore", type: "Healthcare Partner" },
        { name: "Manipal Hospital", type: "Medical Support" }
      ],
      bgColor: "bg-red-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  const endorsements = [
    {
      quote: "The Drugs Free Youth campaign has become an integral part of our community policing strategy. Their approach of combining awareness with actionable reporting has significantly enhanced our ability to combat drug-related crimes.",
      author: "Commissioner of Police",
      organization: "Mangaluru City Police",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "This initiative represents the kind of community-driven change we need to see. By bringing together parents, educators, and youth, they're creating a comprehensive support system that addresses the root causes of drug abuse.",
      author: "Dr. Rajesh Kumar",
      organization: "Director, Public Health, Karnataka",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "As educators, we've seen the positive impact of their programs firsthand. The resources they provide and the awareness they create among students and parents is invaluable in preventing drug abuse.",
      author: "Prof. Meera Shetty",
      organization: "Principal, Educational Consortium",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners & Endorsements
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Supported by the Mangaluru City Police and trusted by leading community organizations. Together, we&apos;re building a network of change.
          </p>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-gray-800">
              &ldquo;A collaborative effort between law enforcement, educational institutions, healthcare providers, and community organizations to create a drug-free society.&rdquo;
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partners.map((partnerCategory, index) => (
            <div key={index} className={`${partnerCategory.bgColor} rounded-3xl p-6 sm:p-8 text-white`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  {partnerCategory.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{partnerCategory.category}</h3>
              </div>
              <div className="space-y-4">
                {partnerCategory.organizations.map((org, orgIndex) => (
                  <div key={orgIndex} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
                    <h4 className="font-semibold text-sm sm:text-base mb-1">{org.name}</h4>
                    <p className="text-xs text-white/70">{org.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Endorsements Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            What Leaders Are Saying
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                    &ldquo;{endorsement.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">{endorsement.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{endorsement.author}</h4>
                    <p className="text-gray-600 text-xs">{endorsement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Organizations Partner With Us</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our collaborative approach creates meaningful impact and positive change in communities across Karnataka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Proven Impact</h4>
              <p className="text-blue-100 text-sm">Measurable results in drug prevention and community safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Community Trust</h4>
              <p className="text-blue-100 text-sm">Strong relationships with local communities and stakeholders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Transparent Operations</h4>
              <p className="text-blue-100 text-sm">Clear reporting and accountability in all our initiatives</p>
            </div>
          </div>
        </div>

        {/* Call to Partner */}
        <div className="text-center bg-gray-50 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Join Our Partnership Network
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you represent a school, healthcare organization, business, or NGO, there&apos;s a place for you in our mission to create drug-free communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200">
              Become a Partner
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200">
              Download Partnership Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersEndorsements;
