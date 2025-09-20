import React from 'react';

interface ResourceItemProps {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  bgColor: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({
  title,
  description,
  type,
  icon,
  bgColor
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">{type}</div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-white/90 mb-6 flex-grow leading-relaxed text-sm">{description}</p>
      <button className="w-full bg-white text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-sm">
        Download PDF
      </button>
    </div>
  );
};

const ResourcesEducation = () => {
  const resources = [
    {
      title: "Parent's Guide to Drug Prevention",
      description: "Comprehensive guide for parents on identifying warning signs, having difficult conversations, and finding help.",
      type: "Parent Resource",
      bgColor: "bg-primary",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Student Handbook: Making Smart Choices",
      description: "Age-appropriate information for students about drug risks, peer pressure, and healthy coping strategies.",
      type: "Student Resource",
      bgColor: "bg-primary",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
        </svg>
      )
    },
    {
      title: "Teacher's Toolkit: Classroom Prevention",
      description: "Resources for educators to integrate drug prevention into curriculum and create supportive environments.",
      type: "Educator Resource",
      bgColor: "bg-primary",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Community Action Guide",
      description: "Step-by-step guide for organizing community initiatives and building local support networks.",
      type: "Community Resource",
      bgColor: "bg-primary",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    }
  ];

  const mythsFacts = [
    {
      myth: "Marijuana is completely harmless",
      fact: "Marijuana can impair memory, concentration, and decision-making, especially in developing brains."
    },
    {
      myth: "Prescription drugs are always safe",
      fact: "Prescription drugs can be highly addictive when misused and can lead to overdose."
    },
    {
      myth: "You can't get addicted from trying drugs once",
      fact: "Even one use can trigger addiction in susceptible individuals and lead to dangerous behavior."
    },
    {
      myth: "Drug addiction is a choice, not a disease",
      fact: "Addiction is a complex brain disease that requires medical treatment and support."
    }
  ];

  const helplines = [
    {
      name: "National Drug Helpline",
      number: "1800-11-0031",
      description: "24/7 confidential support for substance abuse issues",
      available: "24/7"
    },
    {
      name: "Mangalore Police Drug Tip Line",
      number: "0824-220-9000",
      description: "Anonymous reporting of drug-related activities",
      available: "24/7"
    },
    {
      name: "Youth Crisis Support",
      number: "1800-233-3330",
      description: "Crisis counseling and support for young people",
      available: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      name: "Parent Support Network",
      number: "1800-121-3344",
      description: "Support group connections for affected families",
      available: "Daily, 10 AM - 8 PM"
    }
  ];

  return (
    <section className="bg-background py-16 sm:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & Education
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Knowledge is power. Access resources designed for parents, students, and teachers to understand, prevent, and tackle drug abuse. Download guides, access helplines, and get connected to support networks today.
          </p>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Educational Materials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <ResourceItem
                key={index}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                icon={resource.icon}
                bgColor={resource.bgColor}
              />
            ))}
          </div>
        </div>

        {/* Myths vs Facts */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Myths vs Facts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {mythsFacts.map((item, index) => (
              <div key={index} className={`rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl bg-card border border-border`}>
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">MYTH</span>
                  </div>
                  <p className="text-muted-foreground italic text-sm sm:text-base leading-relaxed">&ldquo;{item.myth}&rdquo;</p>
                </div>
                <div>
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">FACT</span>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helplines & Support */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Emergency Helplines & Support
          </h3>
          <div className="bg-primary rounded-3xl p-6 sm:p-8 md:p-12 text-primary-foreground mb-8">
            <div className="text-center mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Need Help Now?</h4>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Don&apos;t wait. Reach out to these confidential support services.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
              {helplines.map((helpline, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 ${
                  index % 4 === 0 || index % 4 === 3 
                    ? 'bg-white/15 border border-white/20' 
                    : 'bg-white/10 border border-white/10'
                }`}>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-primary-foreground">{helpline.number}</div>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">{helpline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6 sm:mb-8">
            Quick Access Links
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg bg-muted border border-border`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Treatment Centers</h4>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Find nearby rehabilitation facilities</p>
              <button className="text-primary font-semibold hover:underline text-xs sm:text-sm">Find Centers</button>
            </div>

            <div className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg bg-muted border border-border`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Support Groups</h4>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Connect with others in recovery</p>
              <button className="text-primary font-semibold hover:underline text-xs sm:text-sm">Join Groups</button>
            </div>

            <div className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg bg-muted border border-border`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Events Calendar</h4>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Upcoming awareness programs</p>
              <button className="text-primary font-semibold hover:underline text-xs sm:text-sm">View Events</button>
            </div>

            <div className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg bg-muted border border-border`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Report Activity</h4>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Anonymous drug activity reporting</p>
              <button className="text-primary font-semibold hover:underline text-xs sm:text-sm">Report Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesEducation;
