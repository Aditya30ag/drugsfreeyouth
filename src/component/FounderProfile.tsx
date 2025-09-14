import React from 'react';
import Image from 'next/image';

const FounderProfile = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Founder
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/Suhail.jpg"
                    alt="Suhail Kandak - Founder"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2024</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                  Founder & Visionary
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Suhail Kandak
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Suhail Kandak is a social entrepreneur, innovator, and the driving force behind this initiative. With a strong background in law, planning, and community development, Suhail has consistently worked at the intersection of business and social change.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                He has founded organizations such as <strong>MakeAChange Foundation</strong>, <strong>B_HUMAN.IN</strong>, and <strong>Drugs Free Youth</strong>, all focused on building better futures for youth.
              </p>

              {/* Personal Quote */}
              <blockquote className="text-xl sm:text-2xl text-blue-800 italic leading-relaxed border-l-4 border-blue-500 pl-6 my-8">
                &ldquo;Every life saved from drugs is a future restored for our nation.&rdquo;
              </blockquote>

              <p className="text-gray-600 leading-relaxed">
                His leadership is guided by this simple belief, driving him to create sustainable community-based solutions that address the root causes of drug abuse and empower local communities to take action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
                  Connect with Suhail
                </button>
                <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
                  Read Full Bio
                </button>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Leadership Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Community First</h4>
                <p className="text-gray-700 text-sm">Real change happens when communities come together with shared purpose and collective action.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Action Oriented</h4>
                <p className="text-gray-700 text-sm">Ideas without execution are just dreams. Every initiative must translate into measurable community impact.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Youth Focused</h4>
                <p className="text-gray-700 text-sm">Every young person deserves a future free from the chains of addiction and the opportunity to reach their full potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
