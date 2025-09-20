import React from 'react';
import Image from 'next/image';

const QRInnovation = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Breakthrough Innovation: QR-Code Reporting
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              For the first time in Karnataka, we&apos;ve partnered with Mangaluru City Police and Udupi Police to launch QR-code based anonymous reporting.
            </p>
          </div>

          <div className="bg-muted rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Scan</h4>
                      <p className="text-muted-foreground">Use your phone to scan the QR code</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Report</h4>
                      <p className="text-muted-foreground">Submit anonymous drug activity reports</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Alert</h4>
                      <p className="text-muted-foreground">Authorities receive immediate alerts for action</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                  {/* Mangaluru City Police QR Code */}
                  <a 
                    href="https://tally.so/r/3jXOJx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer block"
                  >
                    <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-3">
                      <Image
                        src="/qr-code.png"
                        alt="QR Code for Mangaluru City Police Anonymous Reporting"
                        width={140}
                        height={140}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Mangaluru City</p>
                    <p className="text-xs text-muted-foreground">Police Reporting</p>
                    <p className="text-xs text-primary mt-2">Click to Report →</p>
                  </a>

                  {/* Udupi Police QR Code */}
                  <a 
                    href="https://tally.so/r/nWVA5k"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer block"
                  >
                    <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-3">
                      <Image
                        src="/qr-code.png"
                        alt="QR Code for Udupi Police Anonymous Reporting"
                        width={140}
                        height={140}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Udupi Police</p>
                    <p className="text-xs text-muted-foreground">Anonymous Reporting</p>
                    <p className="text-xs text-primary mt-2">Click to Report →</p>
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6 font-medium">
                  Scan QR codes or click to report drug activities anonymously
                </p>
              </div>
            </div>

            <div className="mt-12 bg-card rounded-2xl p-6 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                This is technology turning into community protection.
              </p>
              <p className="text-muted-foreground">
                Anyone can scan, report, and alert authorities — no fear, no delay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRInnovation;
