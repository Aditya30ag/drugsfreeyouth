import React from 'react';
import { Download, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesHero = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Hero Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Protect. Prevent. Restore.
                </h1>
                
                {/* Subhead */}
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Practical guides, verified support, and evidence-based resources for parents, teachers, and students.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary CTA */}
                    <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold"
                        asChild
                    >
                        <a href="/downloads/DFY-Parent-Guide.html" download>
                            <Download className="mr-2 h-5 w-5" />
                            Download Parent Guide
                        </a>
                    </Button>
                    
                    {/* Secondary CTA */}
                    <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-semibold"
                        asChild
                    >
                        <a href="#helplines">
                            <Phone className="mr-2 h-5 w-5" />
                            Get Immediate Help
                        </a>
                    </Button>
                </div>
                
                {/* Button microcopy */}
                <div className="mt-4 text-sm text-muted-foreground">
                    <p>Download free PDF - Instant access</p>
                    <p className="mt-1">Get Help Now - 24/7</p>
                </div>
            </div>
        </section>
    );
};

export default ResourcesHero;
