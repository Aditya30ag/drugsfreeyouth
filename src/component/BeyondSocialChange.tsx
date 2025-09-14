import React from 'react';

const BeyondSocialChange = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Beyond Social Change
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Suhail is also a respected investor and advisor, backing startups and initiatives that align with his philosophy of creating impact at scale. His involvement ensures that movements like Drugs Free Youth are not underfunded or short-lived — they are built to last.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether in the boardroom or on the streets, Suhail represents a new breed of leadership in India: strategic, socially conscious, and execution-driven.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">
                  View Portfolio
                </button>
                <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200">
                  Connect on LinkedIn
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Qualities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Strategic thinking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Social consciousness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Execution-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Long-term vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondSocialChange;
