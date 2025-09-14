import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const SocialFollow = () => {
    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "#",
            color: "bg-primary hover:bg-primary/90",
            label: "Follow us on Facebook"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "#",
            color: "bg-primary hover:bg-primary/90",
            label: "Follow us on Instagram"
        },
        {
            name: "Twitter/X",
            icon: Twitter,
            href: "#",
            color: "bg-primary hover:bg-primary/90",
            label: "Follow us on X"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "#",
            color: "bg-primary hover:bg-primary/90",
            label: "Connect on LinkedIn"
        }
    ];

    return (
        <section className="py-16 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Follow & Support
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
                                className={`${social.color} text-primary-foreground p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
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
                
                <div className="bg-card rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                        Join Our Digital Community
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Follow us across all platforms to stay informed about our campaigns, success stories, and ways you can contribute to building drug-free communities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                            Share Our Mission
                        </button>
                        <button className="border-2 border-border hover:border-foreground text-foreground font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                            Subscribe to Updates
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFollow;
