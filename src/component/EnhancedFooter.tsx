"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

const EnhancedFooter: React.FC = () => {
  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white text-gray-800">

      {/* Footer Content */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Drugs Free Youth
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A community-driven movement dedicated to protecting our future
                generations through awareness, action, and accountability.
                Together with parents, police, and community leaders, we&apos;re
                building a drug-free society.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 text-white transition-colors duration-200">
                  T
                </button>
                <button className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 text-white transition-colors duration-200">
                  X
                </button>
                <button className="bg-green-500 p-3 rounded-full hover:bg-green-600 text-white transition-colors duration-200">
                  W
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Quick Actions</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Report Drug Activity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Volunteer with Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Download Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Get Help Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Contact Us</h4>
              <div className="space-y-3 text-gray-600">
                <div>Mangalore & Udupi, Karnataka</div>
                <div>info@drugsfreeyouth.org</div>
                <div>+91-824-220-9000</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Drugs Free Youth. All rights reserved. | A MakeAChange
                Foundation Initiative
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Transparency Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default EnhancedFooter;
