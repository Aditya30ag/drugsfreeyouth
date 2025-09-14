import React from 'react';

const CampaignHero = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-slate-800">
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Our Mission
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Stand Strong, Stay Awake,<br />
            <span className="text-blue-600">Save Youth</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
            Building a drug-free future through community action, education, and empowerment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Educational Institutions</h3>
              <p className="text-slate-600 text-base leading-relaxed">Comprehensive awareness programs in schools and colleges to empower students and educators</p>
            </div>

            <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Community Outreach</h3>
              <p className="text-slate-600 text-base leading-relaxed">Grassroots initiatives and neighborhood programs to build strong, drug-free communities</p>
            </div>

            <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Family Support</h3>
              <p className="text-slate-600 text-base leading-relaxed">Empowering families with resources, support groups, and counseling services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl -ml-32 -mb-32"></div>
    </section>
  );
};

export default CampaignHero;
