import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
    return (
           <section className="relative min-h-screen flex flex-col o
           verflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-s
           late-800">
            {/* Logo Section at Top */}
            <div className="relative z-20 bg-white py-8 md:py-12">
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

            {/* Hero Section */}
            <div className="relative flex-1 flex items-center justify-center">
                {/* Background Image with soft blur + tint */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/slider.jpg"
                        alt="Community coming together to build a drug-free future"
                        fill
                        sizes="100vw"
                        quality={90}
                        className="object-cover object-center opacity-60"
                        priority
                    />
                    {/* Gradient overlay for reliable text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/45 to-slate-900/25" />
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Left side content */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-1/2 text-left">
                            {/* Hero Heading */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                                Stand Strong, Stay Awake,<br />
                                Save Youth
                            </h1>
                        </div>

                        {/* Right side - Be Brave Report Peddlers */}
                        <div className="lg:w-1/2 text-center lg:text-right">
                            
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                                    Be Brave.<br />
                                    Report Peddlers.
                                </h2>
                                <Link
                                    href="/contact#report"
                                    aria-label="Report now, anonymously"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl text-lg"
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
            
        </section>
    );
};

export default HeroBanner;
