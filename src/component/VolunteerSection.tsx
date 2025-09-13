
import React from 'react';
import { ArrowUp } from 'lucide-react';

const VolunteerSection: React.FC = () => {
  return (
    <section className="min-h-full bg-gray-50 flex items-center justify-center px-4 py-16 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-blue-700 leading-tight">
            Become a
            <br />
            Volunteer
          </h2>
        </div>

        {/* Right Column - Description and CTA */}
        <div className="space-y-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Join us in building a drug-free future and empowering the next 
            generation. As a volunteer, you'll be part of awareness campaigns, 
            community programs, and youth initiatives that make a real difference. 
            Together, we can create safer neighborhoods and a stronger community.
          </p>
          
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 transform hover:scale-105">
            Join Us
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
        <ArrowUp size={24} />
      </button>
    </section>
  );
};

export default VolunteerSection;