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
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
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
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
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
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
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
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
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
    <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resources & Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Knowledge is power. Access resources designed for parents, students, and teachers to understand, prevent, and tackle drug abuse. Download guides, access helplines, and get connected to support networks today.
          </p>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Free Educational Materials
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
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Myths vs Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mythsFacts.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-red-600">MYTH</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{item.myth}&rdquo;</p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-green-600">FACT</span>
                  </div>
                  <p className="text-gray-700 font-medium">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helplines & Support */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Emergency Helplines & Support
          </h3>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white mb-8">
            <div className="text-center mb-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-2">Need Help Now?</h4>
              <p className="text-blue-100">Don&apos;t wait. Reach out to these confidential support services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helplines.map((helpline, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <h5 className="font-bold text-lg">{helpline.name}</h5>
                    <div className="bg-green-400 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {helpline.available}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2 text-yellow-300">{helpline.number}</div>
                  <p className="text-blue-100 text-sm">{helpline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Quick Access Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Treatment Centers</h4>
              <p className="text-gray-600 text-sm mb-4">Find nearby rehabilitation facilities</p>
              <button className="text-blue-600 font-semibold hover:underline">Find Centers</button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Support Groups</h4>
              <p className="text-gray-600 text-sm mb-4">Connect with others in recovery</p>
              <button className="text-green-600 font-semibold hover:underline">Join Groups</button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Events Calendar</h4>
              <p className="text-gray-600 text-sm mb-4">Upcoming awareness programs</p>
              <button className="text-purple-600 font-semibold hover:underline">View Events</button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Report Activity</h4>
              <p className="text-gray-600 text-sm mb-4">Anonymous drug activity reporting</p>
              <button className="text-red-600 font-semibold hover:underline">Report Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesEducation;
