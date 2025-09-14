import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const SocialFollow = () => {
    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "#",
            color: "bg-blue-600 hover:bg-blue-700",
            label: "Follow us on Facebook"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "#",
            color: "bg-pink-600 hover:bg-pink-700",
            label: "Follow us on Instagram"
        },
        {
            name: "Twitter/X",
            icon: Twitter,
            href: "#",
            color: "bg-black hover:bg-gray-800",
            label: "Follow us on X"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "#",
            color: "bg-blue-700 hover:bg-blue-800",
            label: "Connect on LinkedIn"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Follow & Support
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Stay updated, share our message, and be part of the movement:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${social.color} text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                                aria-label={social.label}
                            >
                                <div className="flex flex-col items-center space-y-2">
                                    <IconComponent size={32} className="group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-semibold text-sm">{social.name}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Join Our Digital Community
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Follow us across all platforms to stay informed about our campaigns, success stories, and ways you can contribute to building drug-free communities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                            Share Our Mission
                        </button>
                        <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                            Subscribe to Updates
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFollow;
