import React from 'react';

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
                <div className="bg-card rounded-2xl p-8 shadow-lg inline-block">
                  <div className="w-32 h-32 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zm8 0h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zM3 11h6v6H3v-6zm8 0h6v6h-6v-6zm8 0h2v2h-2v-2zm-8 8h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-foreground">QR Code</p>
                  <p className="text-xs text-muted-foreground">Anonymous Reporting</p>
                </div>
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
