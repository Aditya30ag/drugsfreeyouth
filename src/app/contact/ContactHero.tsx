import React from 'react';
import PageIntro from '@/components/PageIntro';

const ContactHero = () => {
  return (
    <PageIntro
      title={(
        <>
          Connect with <span className="text-primary">Drugs Free Youth</span>
        </>
      )}
      description="Whether you're a parent seeking guidance, a student looking for help, an institution wanting to partner, or a citizen ready to report — this is where you reach us."
      highlights={[
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                clipRule="evenodd"
              />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          ),
          label: 'Direct Support',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 2H5v10h10V5z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'Institutional Partnerships',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'Safe Reporting',
        },
      ]}
    >
      <p className="text-lg text-muted-foreground font-medium">
        No message is too small. Every voice matters in building a drug-free future.
      </p>
    </PageIntro>
  );
};

export default ContactHero;
