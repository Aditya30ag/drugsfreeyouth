import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join Us in Creating a <span className="text-yellow-300">Drug-Free Future</span>
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Because together, we can stand strong, stay awake, and save our youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Report Suspicious Activity</h3>
            <p className="text-white/80 mb-6 text-sm">Use our anonymous QR code system to report drug activity in your area</p>
            <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors duration-200 w-full">
              Report Now
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Volunteer Your Time</h3>
            <p className="text-white/80 mb-6 text-sm">Join our programs and make a direct impact in your community</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-200 w-full">
              Volunteer
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
            <p className="text-white/80 mb-6 text-sm">Institutional partnerships for larger community impact</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 w-full">
              Partner
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Spread the Message</h3>
            <p className="text-white/80 mb-6 text-sm">Share our mission and resources within your network</p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200 w-full">
              Share
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
            Every action you take, no matter how small, contributes to building a safer, drug-free future for our youth. The time to act is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
              Get Started Today
            </button>
            <button className="bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
