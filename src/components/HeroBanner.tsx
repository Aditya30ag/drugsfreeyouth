import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CrowdCanvas } from './CrowdCanvas';

const HeroBanner = () => {
    return (
           <section className="hero relative min-h-screen flex flex-col overflow-hidden mt-16 sm:mt-6">
            {/* Logo Section at Top */}
            <div className="relative z-20 py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-12 md:gap-20 lg:gap-32">
                        {/* Drugs Free Youth Logo */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative">
                                <Image
                                    src="/1.jpg"
                                    alt="Drugs Free Youth Logo"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>

                        {/* MakeAChange Foundation Logo */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative">
                                <Image
                                    src="/2.jpg"
                                    alt="MakeAChange Foundation Logo"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Mangaluru City Police Logo */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative">
                                <Image
                                    src="/3.jpg"
                                    alt="Mangaluru City Police Logo"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section with overlayed content */}
            <div className="relative flex-1">
                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <CrowdCanvas
                        src="/open-peeps-sheet.png"
                        rows={15}
                        cols={7}
                        className="absolute inset-0 h-full w-full"
                    />
                </div>

                {/* Main Content Overlay - Positioned Above Animation */}
                <div className="absolute top-8 left-0 right-0 z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Left side - Stand Strong, Stay Awake, Save Youth */}
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                                    <span className="text-primary">Stand Strong, Stay Awake,</span><br />
                                    <span className="text-primary">Save Youth</span>
                                </h1>
                            </div>
                            
                            {/* Right side - Be Brave Report Peddlers */}
                            <div className="lg:w-1/2 text-center lg:text-right">
                                <h2 className="tagline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                                    <span className="text-primary">Be Brave.</span><br />
                                    <span className="text-primary">Report Peddlers.</span>
                                </h2>
                                <Link
                                    href="/contact#report"
                                    aria-label="Report now, anonymously"
                                    className="button-primary inline-flex items-center justify-center gap-2 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                                >
                                    <span>REPORT NOW</span>
                                    <svg className="w-5 h-5 opacity-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default HeroBanner;
