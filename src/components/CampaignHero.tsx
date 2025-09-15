import React from 'react';
import PageIntro from './PageIntro';

const CampaignHero = () => {
  return (
    <PageIntro

      title={(
        <>
          Campaign
          <br />
          <span className="text-primary">Stand Strong, Stay Awake, Save Youth</span>
        </>
      )}
      description="Building a drug-free future through community action, education, and empowerment."
      highlights={[
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
          ),
          label: 'Educational Institutions',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'Community Outreach',
        },
        {
          icon: (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          ),
          label: 'Family Support',
        },
      ]}
    />
  );
};

export default CampaignHero;
