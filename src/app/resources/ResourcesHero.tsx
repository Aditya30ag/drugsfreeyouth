import React from 'react';
import { Download, Phone } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { Button } from '@/components/ui/button';

const ResourcesHero = () => {
  return (
    <PageIntro
      title={(
        <>
          Resources
          <br />
          <span className="text-primary">Protect. Prevent. Restore.</span>
        </>
      )}
      description="Practical guides, verified support, and evidence-based resources for parents, teachers, and students."
      highlights={[
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2H4v2h12V5z" />
            </svg>
          ),
          label: 'Parent Guides',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm9 2H8v2h4V6zm0 4H8v2h4v-2z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'School Toolkits',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 8a6 6 0 11-9.33-5H5a1 1 0 100 2h1.465A6.002 6.002 0 0116 8a1 1 0 102 0zm-7 6a6 6 0 01-5.33-3H5a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-1.465A6.002 6.002 0 0011 14z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: '24/7 Helplines',
        },
      ]}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Download free PDF — instant access</p>
        <p className="mt-1">Get help now — 24/7 support</p>
      </div>
    </PageIntro>
  );
};

export default ResourcesHero;
