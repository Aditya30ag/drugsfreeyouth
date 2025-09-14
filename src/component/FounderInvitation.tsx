import React from 'react';

const FounderInvitation = () => {
  const roles = [
    { title: "Parents", description: "Protect and guide your children" },
    { title: "Teachers", description: "Shape young minds with awareness" },
    { title: "Students", description: "Be ambassadors of change" },
    { title: "Policymakers", description: "Create supportive frameworks" },
    { title: "Entrepreneurs", description: "Bring innovation to social causes" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Invitation
          </h2>
          <blockquote className="text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto italic mb-8">
            "Join me in this mission. Whether you are a parent, teacher, student, policymaker, or entrepreneur — your role matters. Together, we can safeguard our youth, strengthen our nation, and build a legacy of resilience."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {roles.map((role, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300">
              <h3 className="font-bold text-lg mb-2">{role.title}</h3>
              <p className="text-white/90 text-sm">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join the Movement
            </button>
            <button className="bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Suhail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderInvitation;
