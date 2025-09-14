import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get in Touch
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Head Office */}
                    <div className="text-center p-6 bg-card rounded-xl hover:shadow transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mb-4">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">📍 Head Office</h3>
                        <div className="text-muted-foreground space-y-1">
                            <p className="font-medium">Drugs Free Youth Initiative</p>
                            <p>Mangaluru, Karnataka – India</p>
                        </div>
                    </div>
                    
                    {/* Helpline */}
                    <div className="text-center p-6 bg-card rounded-xl hover:shadow transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mb-4">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">📞 Helpline</h3>
                        <div className="text-muted-foreground space-y-1">
                            <p className="font-medium">+91-XXXXXXXXXX</p>
                            <p className="text-sm">(Available 24/7 for urgent support & reporting)</p>
                        </div>
                    </div>
                    
                    {/* Email */}
                    <div className="text-center p-6 bg-card rounded-xl hover:shadow transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">📧 Email</h3>
                        <div className="text-muted-foreground">
                            <a href="mailto:support@drugsfreeyouth.org" className="font-medium text-primary hover:underline transition-colors duration-200">
                                support@drugsfreeyouth.org
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
