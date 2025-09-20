import React from 'react';
import { GraduationCap, Building2, Camera, Users } from 'lucide-react';

const InstitutionalPartners = () => {
    const partners = [
        {
            icon: GraduationCap,
            title: "Schools & Colleges",
            description: "Invite us to conduct awareness sessions.",
            color: "bg-green-600"
        },
        {
            icon: Building2,
            title: "Corporates",
            description: "Collaborate with us on CSR and community initiatives.",
            color: "bg-blue-600"
        },
        {
            icon: Camera,
            title: "Media & Press",
            description: "Request interviews, coverage, and stories.",
            color: "bg-purple-600"
        },
        {
            icon: Users,
            title: "NGOs & Volunteers",
            description: "Join forces with us to strengthen the movement.",
            color: "bg-orange-600"
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        For Institutions & Partners
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {partners.map((partner, index) => {
                        const IconComponent = partner.icon;
                        return (
                            <div key={index} className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4`}>
                                    <IconComponent size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    {partner.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                
                <div className="bg-muted rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                        Ready to Partner With Us?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join our network of institutional partners working together to create drug-free communities. 
                        Let&apos;s combine our efforts for maximum impact.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <span className="text-muted-foreground font-medium">📩 Write to us at:</span>
                        <a 
                            href="mailto:support@makeachangefoundation.in"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
                        >
                            support@makeachangefoundation.in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalPartners;
