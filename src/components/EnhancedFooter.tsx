"use client";
import React from "react";

const EnhancedFooter: React.FC = () => {
  // Floating scroll-to-top removed to avoid overlapping the chat widget.

  return (
    <footer className="relative bg-background text-foreground">

      {/* Footer Content */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Drugs Free Youth
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A community-driven movement dedicated to protecting our future
                generations through awareness, action, and accountability.
                Together with parents, police, and community leaders, we&apos;re
                building a drug-free society.
              </p>
              <div className="flex space-x-4">
                <button className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
                  T
                </button>
                <button className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
                  X
                </button>
                <button className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
                  W
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Actions</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Report Drug Activity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Volunteer with Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Download Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Get Help Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>Mangalore & Udupi, Karnataka</div>
                <div>info@drugsfreeyouth.org</div>
                <div>+91-824-220-9000</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2024 Drugs Free Youth. All rights reserved. | A MakeAChange
                Foundation Initiative
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Transparency Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Removed floating scroll-to-top button to avoid overlap with chat widget */}
    </footer>
  );
};

export default EnhancedFooter;
