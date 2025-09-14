import React from 'react';

interface HelpOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  primaryAction: string;
  secondaryAction?: string;
  bgGradient: string;
  iconBg: string;
}

const HelpOption: React.FC<HelpOptionProps> = ({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  bgGradient,
  iconBg
}) => {
  return (
    <div className={`${bgGradient} rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white h-full flex flex-col`}>
      <div className={`${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/90 mb-6 flex-grow leading-relaxed">{description}</p>
      <div className="space-y-3">
        <button className="w-full bg-white text-gray-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200">
          {primaryAction}
        </button>
        {secondaryAction && (
          <button className="w-full bg-white/20 text-white font-semibold py-2 px-6 rounded-xl hover:bg-white/30 transition-colors duration-200">
            {secondaryAction}
          </button>
        )}
      </div>
    </div>
  );
};

const HowYouCanHelp = () => {
  const helpOptions = [
    {
      title: "Report Anonymously",
      description: "Your voice matters. Report drug activity in your neighborhood anonymously through our secure platform. Every report helps us build a safer community.",
      primaryAction: "Report Now",
      secondaryAction: "Learn More",
      bgGradient: "bg-gradient-to-br from-red-500 to-red-600",
      iconBg: "bg-red-400",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Volunteer with Us",
      description: "Join our team of dedicated volunteers. Help with awareness programs, community events, and youth mentoring. Make a direct impact in someone's life.",
      primaryAction: "Volunteer Now",
      secondaryAction: "View Opportunities",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconBg: "bg-blue-400",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    },
    {
      title: "Spread Awareness",
      description: "Use your voice and network to spread our message. Share our content, organize local meetups, or simply start conversations about drug prevention.",
      primaryAction: "Share Our Mission",
      secondaryAction: "Get Resources",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-600",
      iconBg: "bg-green-400",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
        </svg>
      )
    },
    {
      title: "Support Our Cause",
      description: "Help us expand our reach and impact. Your contribution funds awareness programs, educational materials, and support systems for affected families.",
      primaryAction: "Donate Now",
      secondaryAction: "Corporate Partnership",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconBg: "bg-purple-400",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How You Can Help
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This isn't just our campaign — it's yours. Whether you volunteer, report, or simply share the message, you're saving lives. Together, we can defeat the drug menace.
          </p>
        </div>

        {/* Help Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {helpOptions.map((option, index) => (
            <HelpOption
              key={index}
              title={option.title}
              description={option.description}
              icon={option.icon}
              primaryAction={option.primaryAction}
              secondaryAction={option.secondaryAction}
              bgGradient={option.bgGradient}
              iconBg={option.iconBg}
            />
          ))}
        </div>

        {/* Community Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Your Impact Multiplies
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Individual Action</h4>
                  <p className="text-gray-600">Your single report or volunteer hour makes a difference</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">10</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Community Ripple</h4>
                  <p className="text-gray-600">Your action inspires 10 others to get involved</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">100</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Generational Change</h4>
                  <p className="text-gray-600">Together we protect 100+ youth from drug abuse</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 sm:p-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Join 500+ Active Community Members
            </h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From parents and teachers to students and police officers, our community is united by one goal: protecting our youth from the dangers of drug abuse.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-green-600">300+</div>
                <div className="text-sm text-gray-600">Reports Submitted</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Events Organized</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-red-600">25</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
