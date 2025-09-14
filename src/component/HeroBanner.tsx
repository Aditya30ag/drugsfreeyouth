import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/slider.jpg" // Using existing image from public folder
                    alt="Group of men in meeting room"
                    fill
                    className="object-cover sm:object-contain grayscale"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Hero Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
                    Stand Strong, Stay Awake,<br />
                    Save Youth
                </h1>
                
                {/* Mission Statement */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-md px-4">
                    Drugs Free Youth is a movement to protect our future generations. Together with the police, parents, and community, we are building a drug-free society through awareness, action, and accountability.
                </p>

                {/* Video Placeholder */}
                <div className="mb-8 sm:mb-10">
                    <div className="relative bg-black/20 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20 max-w-md mx-auto">
                        <div className="flex items-center justify-center text-white/80 mb-2">
                            <svg className="w-8 h-8 sm:w-12 sm:h-12 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm sm:text-base font-semibold">Watch Our Mission in Action</span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70">See real parents, youth, and community events</p>
                    </div>
                </div>

                {/* Multiple CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                        REPORT NOW
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                        JOIN THE MOVEMENT
                    </button>
                    <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl border-2 border-white transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
