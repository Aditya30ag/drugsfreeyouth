import React from 'react';
import Image from 'next/image';

const CampaignHero = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background image with gradient overlay for contrast */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/3.jpg"
          alt="Youth and community united for a drug-free future"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <div className="inline-block bg-white/10 ring-1 ring-white/20 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Our Mission
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            Stand Strong, Stay Awake,<br />
            <span className="text-primary">Save Youth</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
            Building a drug-free future through community action, education, and empowerment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Educational Institutions</h3>
              <p className="text-slate-700 text-base leading-relaxed">Comprehensive awareness programs in schools and colleges to empower students and educators</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Community Outreach</h3>
              <p className="text-slate-700 text-base leading-relaxed">Grassroots initiatives and neighborhood programs to build strong, drug-free communities</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Family Support</h3>
              <p className="text-slate-700 text-base leading-relaxed">Empowering families with resources, support groups, and counseling services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full opacity-30 blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full opacity-30 blur-3xl -ml-32 -mb-32"></div>
    </section>
  );
};

export default CampaignHero;
