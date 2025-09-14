import React from 'react';

const BeyondSocialChange = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Beyond Social Change
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Suhail is also a respected investor and advisor, backing startups and initiatives that align with his philosophy of creating impact at scale. His involvement ensures that movements like Drugs Free Youth are not underfunded or short-lived — they are built to last.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether in the boardroom or on the streets, Suhail represents a new breed of leadership in India: strategic, socially conscious, and execution-driven.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200">
                  View Portfolio
                </button>
                <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors duration-200">
                  Connect on LinkedIn
                </button>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Leadership Qualities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Strategic thinking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Social consciousness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Execution-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Long-term vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondSocialChange;
