import React from 'react';

const FounderMessage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              A Founder's Message
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center">
              <svg className="w-12 h-12 text-blue-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              
              <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "The drug menace is not just about addiction — it's about lost futures, broken families, and weakened communities. My role is to connect every stakeholder — from parents to police — and ensure we respond as one. This movement is my commitment to protect the next generation and to restore faith in the idea that together, we can overcome anything."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-1 bg-blue-600 mr-4"></div>
                <cite className="text-lg font-semibold text-gray-900">Suhail Kandak</cite>
                <div className="w-16 h-1 bg-blue-600 ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
