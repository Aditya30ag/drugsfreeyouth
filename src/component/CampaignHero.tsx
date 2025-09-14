import React from 'react';

const CampaignHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-gray-800">
          <div className="inline-block bg-red-50 border border-red-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Our Campaign
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Stand Strong, Stay Awake,<br />
            <span className="text-red-600">Save Youth</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            This Is More Than Awareness — It&apos;s a Movement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Schools & Colleges</h3>
              <p className="text-gray-500 text-sm">In our educational institutions</p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Neighborhoods</h3>
              <p className="text-gray-500 text-sm">In our communities</p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Families</h3>
              <p className="text-gray-500 text-sm">Destroying families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-3xl -ml-32 -mb-32"></div>
    </section>
  );
};

export default CampaignHero;
