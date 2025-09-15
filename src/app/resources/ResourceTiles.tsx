import React from 'react';
import { Download, Users, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourceTiles = () => {
    const resources = [
        {
            icon: Users,
            title: "Parent Guide",
            subtitle: "Practical Steps to Protect Your Child",
            description: "A clear, step-by-step manual parents can use from the first worry through recovery.",
            ctaText: "Download PDF",
            ctaLink: "/downloads/DFY-Parent-Guide.html",
            iconColor: "text-blue-600"
        },
        {
            icon: GraduationCap,
            title: "Teacher Toolkit",
            subtitle: "Classroom & Campus Safety",
            description: "Ready-to-deliver session plans and a teacher response checklist.",
            ctaText: "Download PDF",
            ctaLink: "/downloads/DFY-Teacher-Toolkit.html",
            iconColor: "text-green-600"
        },
        {
            icon: BookOpen,
            title: "Student Handbook",
            subtitle: "Real Talk, Real Options",
            description: "Youth-friendly language, practical steps, and peer support guides.",
            ctaText: "Download PDF",
            ctaLink: "/downloads/DFY-Student-Handbook.html",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                    Quick Resource Tiles
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => {
                        return (
                            <div key={index} className="h-full flex flex-col bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-center pb-4">
                                    <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                                    <p className="text-sm font-medium text-muted-foreground mt-1">
                                        {resource.subtitle}
                                    </p>
                                </div>
                                
                                <div className="flex-1 flex flex-col">
                                    <p className="text-muted-foreground mb-6 flex-1">
                                        {resource.description}
                                    </p>
                                    
                                    <Button 
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                        asChild
                                    >
                                        <a href={resource.ctaLink} download>
                                            <Download className="mr-2 h-4 w-4" />
                                            {resource.ctaText}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ResourceTiles;
