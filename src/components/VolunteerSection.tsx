"use client";
import React from 'react';
import { ArrowUp } from 'lucide-react';

const VolunteerSection: React.FC = () => {
  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="min-h-full bg-gray-50 flex items-center justify-center px-4 py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Column - Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-blue-700 leading-tight">
            Become a
            <br />
            Volunteer
          </h2>
        </div>

        {/* Right Column - Description and CTA */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Join us in building a drug-free future and empowering the next 
            generation. As a volunteer, you&apos;ll be part of awareness campaigns, 
            community programs, and youth initiatives that make a real difference. 
            Together, we can create safer neighborhoods and a stronger community.
          </p>
          
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base">
            Join Us
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};

export default VolunteerSection;
