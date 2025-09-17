import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoSection = () => {
  return (
    <section className="mt-26 sm:mt-0">
      {/* 👆 `mt-16` adds space only on mobile, `sm:mt-0` removes it on larger screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-row flex-wrap items-center justify-center 
                     divide-x divide-gray-300"
        >
          <Link
            href="https://drugsfreeyouth.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Drugs Free Youth"
            className="flex flex-col items-center px-2 sm:px-4 w-auto transition-transform duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/1.jpg"
                alt="Drugs Free Youth Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </Link>

          <Link
            href="https://makeachangefoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MakeAChange Foundation"
            className="px-2 sm:px-4 transition-transform duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="./2.png"
                alt="MakeAChange Foundation Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </Link>

          <Link
            href="https://mangalurupolice.karnataka.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mangaluru City Police"
            className="px-2 sm:px-4 transition-transform duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/3.webp"
                alt="Mangaluru City Police Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
