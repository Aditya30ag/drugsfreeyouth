import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/slider.jpg" // Using existing image from public folder
                    alt="Group of men in meeting room"
                    fill
                    className="object-cover sm:object-contain grayscale"
                    priority
                />
            </div>

            {/* Overlay Text on the Left */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 text-left px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white leading-snug z-10 drop-shadow-lg">
                    Stand Strong, Stay Awake,<br />
                    Save Youth
                </h1>
            </div>

            {/* Call to Action Box - Positioned on the right */}
            <div className="absolute right-4 sm:right-8 top-3/4 transform -translate-y-1/2 z-20 hidden lg:block">
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-sm">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">
                        Be Brave.<br />
                        Report Peddlers.
                    </h2>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 lg:py-4 px-6 rounded-xl transition-colors duration-200 text-base lg:text-lg">
                        REPORT NOW
                    </button>
                </div>
            </div>

            {/* Mobile Call to Action */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-xs sm:max-w-sm mx-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                        Be Brave.<br />
                        Report Peddlers.
                    </h2>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-colors duration-200 text-sm sm:text-base">
                        REPORT NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;