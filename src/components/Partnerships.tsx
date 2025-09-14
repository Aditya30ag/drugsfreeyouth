import React from 'react';

const Partnerships = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partnerships & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building a drug-free future requires collaboration across all sectors of society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-blue-50 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Police Force</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Mangaluru & Udupi Police ensuring strong law enforcement action</p>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Institutes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Schools & Colleges reaching students and educators directly</p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faith Communities</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Leveraging trusted spaces for awareness programs</p>
          </div>

          <div className="bg-red-50 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">NGOs & Volunteers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Building the grassroots movement together</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Partners Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Proven Track Record</h4>
              <p className="text-gray-600 text-sm">Demonstrated success in community mobilization and drug prevention initiatives</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Local Context</h4>
              <p className="text-gray-600 text-sm">Deep understanding of Mangaluru and Udupi community dynamics and challenges</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Collaborative Approach</h4>
              <p className="text-gray-600 text-sm">Working with partners, not for them, to create sustainable community solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
