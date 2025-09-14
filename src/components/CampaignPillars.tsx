import React from "react";
import Image from "next/image";

interface CampaignCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  icon?: React.ReactNode;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  description,
  bgColor,
  textColor = "text-foreground",
  icon,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-start items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105`}
    >
      {icon && <div className="mb-2 sm:mb-3 md:mb-4 opacity-80">{icon}</div>}
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 leading-tight tracking-wide">
        {title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-base opacity-90 leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

const CampaignPillars: React.FC = () => {
  const campaignData = [
    {
      title: "Community Awareness",
      description: "Faith-based outreach and awareness programs at various religious and community places",
      bgColor: "bg-card",
      textColor: "text-foreground",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
    },
    {
      title: "Community Meets",
      description: "Corner meetings in 40+ locations across Mangalore and Udupi with local testimonials",
      bgColor: "bg-card",
      textColor: "text-foreground",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-2.257.743A6 6 0 113 8a6.1 6.1 0 01.736-2.93l.814 2.03A4 4 0 109.8 11.8l1.4-2.8a4 4 0 00-4.8-6.4z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      title: "Parent & Educator Programs",
      description: "Comprehensive awareness programs in colleges, schools, and institutes to empower parents and teachers",
      bgColor: "bg-card",
      textColor: "text-foreground",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
    },
    {
      title: "Public Action & Pledges",
      description: "Large-scale walkathons and public oath-taking ceremonies to demonstrate community commitment",
      bgColor: "bg-card",
      textColor: "text-foreground",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-full bg-background pt-12 sm:pt-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Our 4 Pillars of Action
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Our movement is powered by action on the ground. From faith-based outreach to parent awareness, from local street meets to large public rallies, every campaign is designed to empower families, inform communities, and inspire youth to take a stand.
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {campaignData.map((campaign, index) => (
            <CampaignCard
              key={index}
              title={campaign.title}
              description={campaign.description}
              bgColor={campaign.bgColor}
              textColor={campaign.textColor}
              icon={campaign.icon}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Founder Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Why I Started This Movement
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              A personal mission born from witnessing the devastating impact of drugs on young lives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/Suhail.jpg"
                  alt="Suhail Kandak - Founder"
                  width={500}
                  height={500}
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="inline-block bg-muted text-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Founder of Drug Free Youth
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Suhail Kandak
              </h3>

              {/* Personal Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4 sm:pl-6 my-6 sm:my-8">
                &ldquo;I&apos;ve seen too many young lives cut short because of drugs. This isn&apos;t just a campaign — it&apos;s a commitment to protect our children. Every parent, every citizen, has a role to play. Together, we can create a future where our youth are free to dream, build, and thrive.&rdquo;
              </blockquote>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                Suhail is a dynamic entrepreneur and social innovator with a strong track record in both business and community initiatives. He leads Invenu Global Gateway LLP, a legal support and planning firm, and previously served as CEO of Coastal Infratech India Pvt Ltd.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                Passionate about social impact, he founded the MakeAChange Foundation, B_HUMAN.IN, and DrugsFreeYouth_Org, while also creating 99TOURS.IN.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                <button className="bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition duration-300 text-sm sm:text-base">
                  Know More
                </button>
                <button className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-secondary/90 transition duration-300 text-sm sm:text-base">
                  Join Our Mission
                </button>
              </div>
            </div>
          </div>

          {/* Partner Logos Placeholder */}
          
        </div>
      </section>
    </div>
  );
};

export default CampaignPillars;
