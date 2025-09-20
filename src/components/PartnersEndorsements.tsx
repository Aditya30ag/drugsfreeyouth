import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnersEndorsements = () => {
  const supportedCompanies = [
    { name: "Hirecentive", src: "/Hirecentive.webp", href: "https://hirecentive.com/" },
    { name: "Dream Ideal", src: "/Dream Ideal.webp", href: "https://dreamdealgroup.com" },
    { name: "Janpriya", src: "/Janpriya.webp", href: "https://janapriyahospitals.com" }
  ];

  const institutionLogos = [
    { name: "St. Aloysius", src: "/aloysius.webp", href: "https://staloysius.edu.in/" },
    { name: "Barakah", src: "/barakh.webp", href: "https://bismangalore.com" },
    { name: "Yenepoya", src: "/Yenepoya.webp", href: "https://www.yenepoya.edu.in/" },
    { name: "Manipal", src: "/manipal.webp", href: "https://manipal.edu/" }
  ];

  const partners = [
    {
      category: "Law Enforcement",
      organizations: [
        { name: "Mangaluru City Police", type: "Primary Partner" },
        { name: "Udupi District Police", type: "Collaborator" },
        { name: "Karnataka State Police", type: "State Support" },
        { name: "Anti-Narcotics Cell", type: "Specialist Unit" }
      ],
      bgColor: "bg-primary",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
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
      bgColor: "bg-primary",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
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
      bgColor: "bg-primary",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
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
      bgColor: "bg-primary",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
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
    <section className="bg-background py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Partners & Endorsements
          </h2>
          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center mb-6">
                Supported by: → Institutions
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {supportedCompanies.map((company) => (
                  company.href ? (
                    <Link
                      key={company.name}
                      href={company.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-48 h-32 sm:w-56 sm:h-36 bg-card rounded-2xl shadow-sm flex items-center justify-center transition-transform hover:scale-[1.02]"
                    >
                      <Image
                        src={company.src}
                        alt={`${company.name} logo`}
                        width={240}
                        height={160}
                        className="max-h-[96px] w-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <div
                      key={company.name}
                      className="w-48 h-32 sm:w-56 sm:h-36 bg-card rounded-2xl shadow-sm flex items-center justify-center"
                    >
                      <Image
                        src={company.src}
                        alt={`${company.name} logo`}
                        width={240}
                        height={160}
                        className="max-h-[96px] w-auto object-contain"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center mb-6">
                Powered by: →  Companies
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {institutionLogos.map((institution) => (
                  <Link
                    key={institution.name}
                    href={institution.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-48 h-32 sm:w-56 sm:h-36 bg-card rounded-2xl shadow-sm flex items-center justify-center transition-transform hover:scale-[1.02]"
                  >
                    <Image
                      src={institution.src}
                      alt={`${institution.name} logo`}
                      width={180}
                      height={120}
                      className="max-h-[72px] w-auto object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {partners.map((partnerCategory, index) => (
            <div key={index} className={`${partnerCategory.bgColor} rounded-2xl p-4 sm:p-5 text-primary-foreground transition-all duration-300 hover:shadow-xl ${
              index % 4 === 0 || index % 4 === 3 
                ? 'ring-2 ring-white/30' 
                : 'ring-1 ring-white/20'
            }`}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  {partnerCategory.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">{partnerCategory.category}</h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {partnerCategory.organizations.map((org, orgIndex) => (
                  <div key={orgIndex} className="bg-white/10 rounded-lg p-2 sm:p-3 hover:bg-white/20 transition-colors duration-200">
                    <h4 className="font-semibold text-xs sm:text-sm mb-0.5 leading-tight">{org.name}</h4>
                    <p className="text-xs text-white/70">{org.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Endorsements Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
          What Community Leaders Are Saying
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="bg-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg className="w-6 h-6 text-primary mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-muted-foreground leading-relaxed italic text-sm">
                    &ldquo;{endorsement.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-3">
                    <span className="text-foreground font-semibold text-sm">{endorsement.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs">{endorsement.author}</h4>
                    <p className="text-muted-foreground text-xs">{endorsement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-primary-foreground">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Organizations Partner With Us</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
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
              <p className="text-primary-foreground/80 text-sm">Measurable results in drug prevention and community safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Community Trust</h4>
              <p className="text-primary-foreground/80 text-sm">Strong relationships with local communities and stakeholders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Transparent Operations</h4>
              <p className="text-primary-foreground/80 text-sm">Clear reporting and accountability in all our initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersEndorsements;
