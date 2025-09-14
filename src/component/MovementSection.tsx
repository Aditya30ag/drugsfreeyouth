import React from 'react';

const MovementSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
            Drug abuse is no longer a hidden problem. It&apos;s in our schools, our colleges, our neighborhoods. It steals futures, destroys families, and fuels crime.
          </p>
          
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              We refuse to stand by.
            </h2>
            <p className="text-xl text-red-100 leading-relaxed">
              Drugs Free Youth is here to change the game — by combining community power, law enforcement partnerships, and youth-led action into a single, unstoppable movement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Power</h3>
              <p className="text-gray-600">Mobilizing neighborhoods, families, and local leaders</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Law Enforcement</h3>
              <p className="text-gray-600">Strategic partnerships with police departments</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Youth Leadership</h3>
              <p className="text-gray-600">Empowering young people to lead change</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;
