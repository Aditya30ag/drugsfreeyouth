import React from 'react';
import Link from 'next/link';
import { ArrowRight, Info, Target, BookOpen, UserPlus } from 'lucide-react';

const QuickLinks = () => {
    const links = [
        {
            title: "About Us",
            description: "Learn about our mission and values",
            href: "/about",
            icon: Info,
            color: "bg-primary hover:bg-primary/90"
        },
        {
            title: "Our Campaigns",
            description: "Explore our active campaigns",
            href: "/campaign",
            icon: Target,
            color: "bg-primary hover:bg-primary/90"
        },
        {
            title: "Resources & Guides",
            description: "Educational materials and guides",
            href: "#resources",
            icon: BookOpen,
            color: "bg-primary hover:bg-primary/90"
        },
        {
            title: "Volunteer Signup",
            description: "Join our volunteer community",
            href: "#volunteer",
            icon: UserPlus,
            color: "bg-primary hover:bg-primary/90"
        }
    ];

    return (
        <section className="py-16 bg-muted">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Quick Links
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Find what you need quickly with these helpful links
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className={`${link.color} text-primary-foreground p-2 rounded-lg transition-colors duration-300`}>
                                        <IconComponent size={20} />
                                    </div>
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {link.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {link.description}
                                </p>
                                <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/90">
                                    <span>Learn more</span>
                                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
                
                <div className="mt-12 text-center">
                    <div className="bg-card rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                            Need Something Else?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Can&apos;t find what you&apos;re looking for? Our team is here to help with any questions or specific needs you might have.
                        </p>
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
