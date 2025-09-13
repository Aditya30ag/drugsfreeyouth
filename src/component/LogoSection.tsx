import React from "react";
import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-center 
                     divide-y md:divide-y-0 md:divide-x divide-gray-300 
                     space-y-6 md:space-y-0 md:space-x-0"
        >
          {/* Drugs Free Youth Logo */}
          <div className="flex flex-col items-center px-8 w-60">
            <div className="w-40 h-40 mb-3 relative">
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
          <div className="flex flex-col items-center px-8 w-60">
            <div className="w-40 h-40 mb-3 relative">
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
          <div className="flex flex-col items-center px-8 w-60">
            <div className="w-40 h-40 mb-3 relative">
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
