import React from 'react';

const WhyDifferent = () => {
  const differentiators = [
    {
      title: "Anonymous reporting linked to enforcement",
      description: "Direct connection between community reports and police action"
    },
    {
      title: "Community-driven vigilance", 
      description: "Grassroots networks that actively monitor and protect neighborhoods"
    },
    {
      title: "Parent and educator empowerment",
      description: "Comprehensive training and resources for families and schools"
    },
    {
      title: "Youth leadership at the frontlines",
      description: "Young people leading change as ambassadors and peer educators"
    },
    {
      title: "Sustainable partnerships with institutions",
      description: "Long-term collaborations with police, schools, and community organizations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why We&apos;re Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Most campaigns stop at slogans. We go beyond:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Action with Teeth
          </h3>
          <p className="text-red-100 text-lg max-w-3xl mx-auto leading-relaxed">
            This isn&apos;t awareness for awareness&apos;s sake. This is action with teeth. We combine technology, community engagement, and institutional partnerships to create lasting change that saves lives and protects futures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
