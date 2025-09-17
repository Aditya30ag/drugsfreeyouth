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
                    <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
                        {/* District Admin Logo */}
                        <Link
                            href="https://dk.nic.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the District Administration website"
                            className="flex flex-col items-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/District_Admin.png"
                                    alt="District Administration Logo"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </Link>

                        {/* District Police Logo */}
                        <Link
                            href="https://karnataka.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the Karnataka State Police website"
                            className="flex flex-col items-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/District_Police.jpg"
                                    alt="District Police Logo"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </Link>

                        {/* Drugs Free Youth Logo */}
                        <Link
                            href="https://drugsfreeyouth.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the Drugs Free Youth website"
                            className="flex flex-col items-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/1.jpg"
                                    alt="Drugs Free Youth Logo"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </Link>

                        {/* MakeAChange Foundation Logo */}
                        <Link
                            href="https://makeachangefoundation.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the MakeAChange Foundation website"
                            className="flex flex-col items-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/2.jpg"
                                    alt="MakeAChange Foundation Logo"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </Link>

                        {/* Mangaluru City Police Logo */}
                        <Link
                            href="https://mangalorecitypolice.karnataka.gov.in/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the Mangaluru City Police website"
                            className="flex flex-col items-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/3.jpg"
                                    alt="Mangaluru City Police Logo"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </Link>
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
                                    <span className="text-primary">Report Drug Sellers.</span>
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
