"use client";
import React from "react";

const EnhancedFooter: React.FC = () => {
  // Floating scroll-to-top removed to avoid overlapping the chat widget.

  return (
    <footer className="relative bg-background text-foreground pb-8 bg-muted">

      {/* Footer Content */}
      <div className="py-8 sm:py-8 px-4 sm:px-6">
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
                <a
                  href="https://x.com/makeachange_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200 flex items-center justify-center"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/makeachange.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
  href="https://www.instagram.com/makeachange.foundation"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-primary p-3 rounded-full hover:bg-primary/90 text-primary-foreground transition-colors duration-200 flex items-center justify-center"
  aria-label="Follow us on Instagram"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.5-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/>
  </svg>
</a>

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
                <div>support@makeachangefoundation.in</div>
                <div>+91 9901415505</div>
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
              <div className="flex space-x-6 text-sm pr-16">
              
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-and-conditions"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms & Conditions
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
