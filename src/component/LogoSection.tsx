import React from "react";
import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="bg-white pt-6 sm:pt-10 pb-6 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-row flex-wrap items-center justify-center 
                     divide-x divide-gray-300 space-x-6 sm:space-x-10"
        >
          {/* Drugs Free Youth Logo */}
          <div className="flex flex-col items-center px-2 sm:px-4 w-auto">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
              <Image
                src="/1.jpg"
                alt="Drugs Free Youth Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* MakeAChange Foundation Logo */}
          <div className="flex flex-col items-center px-2 sm:px-4 w-auto">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
              <Image
                src="/2.jpg"
                alt="MakeAChange Foundation Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Mangaluru City Police Logo */}
          <div className="flex flex-col items-center px-2 sm:px-4 w-auto">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
              <Image
                src="/3.jpg"
                alt="Mangaluru City Police Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
