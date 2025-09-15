import React from 'react';
import Image from 'next/image';
import PageIntro from './PageIntro';

const FounderHero = () => {
  return (
    <PageIntro
      title={(
        <>
          Meet <span className="text-primary">Suhail Kandak</span>
        </>
      )}
      description="Suhail Kandak is a dynamic entrepreneur, investor, and social innovator who represents a new generation of leaders in India — people who seamlessly combine business acumen with social commitment."
      highlights={[
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          ),
          label: 'Entrepreneur',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'Social Innovator',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'Visionary Leader',
        },
      ]}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>
            As the Founder of Drugs Free Youth, Suhail has transformed what could have been a small awareness campaign into a movement with police backing, grassroots participation, and institutional partnerships.
          </p>
          <p>
            His ability to mobilize communities while aligning with law enforcement and civic authorities has made him one of the most respected voices in the fight against drug abuse in coastal Karnataka.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-muted rounded-3xl flex items-center justify-center shadow-xl">
              <Image
                src="/Suhail.jpg"
                alt="Suhail Kandak"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </PageIntro>
  );
};

export default FounderHero;
