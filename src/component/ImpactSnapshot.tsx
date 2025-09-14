import React from 'react';

const ImpactSnapshot = () => {
    return (
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why This Matters
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Drug abuse is not just a crime — it's a crisis. Studies show that over 35% of young people experiment with narcotics before 21. Without intervention, the cycle of addiction breaks families, destroys careers, and threatens our communities. This campaign is here to stop it.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Stat 1 */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">200+</div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Students Lost Annually</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Every year 200+ students in Mangalore drop out due to drug abuse</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">35%</div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Youth at Risk</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Of young people experiment with drugs before age 21</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center md:col-span-2 lg:col-span-1">
                        <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">100%</div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Preventable</h3>
                        <p className="text-gray-600 text-sm sm:text-base">With community action and early intervention</p>
                    </div>
                </div>

                {/* Impact Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Left side - Impact points */}
                    <div className="space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">The Real Impact on Our Community</h3>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Broken Families</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Addiction tears apart family bonds and destroys trust</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Lost Potential</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Bright futures cut short before they even begin</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Community Safety</h4>
                                <p className="text-gray-600 text-sm sm:text-base">Drug networks threaten the safety of our neighborhoods</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Call to action */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-10 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Together, We Can Change This</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Every report matters. Every parent who joins our programs matters. Every young person who chooses to stay drug-free matters. Your action today can save a life tomorrow.
                        </p>
                        <div className="space-y-3">
                            <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                                Report Drug Activity Now
                            </button>
                            <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-400 transition-colors duration-200">
                                Join Our Movement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSnapshot;
