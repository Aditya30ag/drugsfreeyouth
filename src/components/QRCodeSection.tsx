"use client";
import React from 'react';
import QRCodeGenerator from './QRCodeGenerator';

const QRCodeSection = () => {
  return (
    <section
      className="relative py-8 sm:py-12 overflow-hidden"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-6 sm:mb-8">
          QR Code To Report Drug Peddling
        </h2>
        
        {/* QR Codes */}
        <div className="flex flex-row gap-4 sm:gap-8 justify-center items-center">
          {/* Mangalore QR Code */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Mangalore</h3>
            <div>
            <a 
              href="https://tally.so/r/3jXOJx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-primary hover:underline mt-2 inline-block"
            >
            <div className="w-32 h-32 sm:w-48 sm:h-48 bg-card rounded-lg shadow-lg flex items-center justify-center border-2 border-border p-2 sm:p-4">
              <QRCodeGenerator 
                text="https://tally.so/r/3jXOJx" 
                size={160}
                className="w-full h-full"
              />
            </div>
            </a>
            </div>
            <a 
              href="https://tally.so/r/3jXOJx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-primary hover:underline mt-2 inline-block"
            >
              Click Here
            </a>
          </div>
          
          {/* Udupi QR Code */}
          <div className="text-center ml-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Udupi</h3>
            <div>
            <a 
              href="https://tally.so/r/nWVA5k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-primary hover:underline mt-2 inline-block"
            >
              <div className="w-32 h-32 sm:w-48 sm:h-48 bg-card rounded-lg shadow-lg flex items-center justify-center border-2 border-border p-2 sm:p-4">
                <QRCodeGenerator 
                  text="https://tally.so/r/nWVA5k" 
                  size={160}
                  className="w-full h-full"
                />
              </div>
            </a>
            </div>
            <a 
              href="https://tally.so/r/nWVA5k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-primary hover:underline mt-2 inline-block"
            >
              Click Here
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10">
            <div className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Anonymous Reporting
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              24/7 Available
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Quick Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
