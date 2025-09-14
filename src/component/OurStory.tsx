import React from 'react';

const OurStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl sm:text-2xl font-semibold text-blue-800 mb-8 leading-relaxed">
                Drugs Free Youth was founded with a single conviction: change begins at the community level.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-600 text-sm">Rising drug use among youth in Mangaluru and Udupi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">The Realization</h3>
                  <p className="text-gray-600 text-sm">Isolated awareness events weren&apos;t enough</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">The Solution</h3>
                  <p className="text-gray-600 text-sm">A collaborative, action-driven movement</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                When early reports of rising drug use among youth in Mangaluru and Udupi surfaced, founder <strong>Suhail Kandak</strong> realized that isolated awareness events weren&apos;t enough. The problem needed a movement – one that was collaborative, action-driven, and deeply rooted in the local context.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                With the support of <strong>Mangaluru City Police</strong>, educators, faith leaders, and community organizations, the campaign has grown from a handful of volunteers into a recognized grassroots initiative reaching hundreds of parents, thousands of youth, and entire neighborhoods.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Today&apos;s Impact</h4>
                    <p className="text-blue-100">
                      From a handful of volunteers to a recognized grassroots initiative reaching hundreds of parents, thousands of youth, and entire neighborhoods across Mangaluru and Udupi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
