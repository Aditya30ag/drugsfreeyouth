import React from 'react';

const EntrepreneurshipJourney = () => {
  const ventures = [
    {
      title: "Invenu Global Gateway LLP",
      role: "Founder & Managing Partner",
      description: "A legal support and planning firm known for precision and trust.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Coastal Infratech India Pvt Ltd",
      role: "Former CEO",
      description: "Demonstrated ability to scale operations and manage complex projects.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      title: "MakeAChange Foundation",
      role: "Founder",
      description: "A social reform initiative focused on community transformation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "99TOURS.IN",
      role: "Founder",
      description: "A digital innovation in the travel and tourism sector.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entrepreneurship as a Force for Change
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suhail's career has always revolved around building sustainable ventures that deliver both profit and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ventures.map((venture, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start">
              <div className={`${venture.bgColor} rounded-xl p-4 mr-6 flex-shrink-0`}>
                {venture.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{venture.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{venture.role}</p>
                <p className="text-gray-600">{venture.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto italic">
            "This track record showcases a leader who doesn't just talk about impact — he builds the systems that create it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurshipJourney;
