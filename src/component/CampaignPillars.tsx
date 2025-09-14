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
  textColor = "text-white",
  icon,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-64 sm:h-72 lg:h-80 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105`}
    >
      {icon && <div className="mb-4 opacity-80">{icon}</div>}
      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-snug tracking-wide">
        {title}
      </h2>
      <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed max-w-xs">
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
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
    },
    {
      title: "Community Meets",
      description: "Corner meetings in 40+ locations across Mangalore and Udupi with local testimonials",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-white",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-2.257.743A6 6 0 113 8a6.1 6.1 0 01.736-2.93l.814 2.03A4 4 0 109.8 11.8l1.4-2.8a4 4 0 00-4.8-6.4z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      title: "Parent & Educator Programs",
      description: "Comprehensive awareness programs in colleges, schools, and institutes to empower parents and teachers",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-white",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
    },
    {
      title: "Public Action & Pledges",
      description: "Large-scale walkathons and public oath-taking ceremonies to demonstrate community commitment",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-white",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our 4 Pillars of Action
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Our movement is powered by action on the ground. From faith-based outreach to parent awareness, from local street meets to large public rallies, every campaign is designed to empower families, inform communities, and inspire youth to take a stand.
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
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
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why I Started This Movement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A personal mission born from witnessing the devastating impact of drugs on young lives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/Suhail.jpg"
                  alt="Suhail Kandak - Founder"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Founder of Drug Free Youth
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Suhail Kandak
              </h3>

              {/* Personal Quote */}
              <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed border-l-4 border-blue-500 pl-6 my-8">
                "I've seen too many young lives cut short because of drugs. This isn't just a campaign — it's a commitment to protect our children. Every parent, every citizen, has a role to play. Together, we can create a future where our youth are free to dream, build, and thrive."
              </blockquote>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Suhail is a dynamic entrepreneur and social innovator with a strong track record in both business and community initiatives. He leads Invenu Global Gateway LLP, a legal support and planning firm, and previously served as CEO of Coastal Infratech India Pvt Ltd.
              </p>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Passionate about social impact, he founded the MakeAChange Foundation, B_HUMAN.IN, and DrugsFreeYouth_Org, while also creating 99TOURS.IN.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition duration-300 text-base">
                  Know More
                </button>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300 text-base">
                  Join Our Mission
                </button>
              </div>
            </div>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h4 className="text-center text-lg font-semibold text-gray-600 mb-8">
              Supported by the Mangaluru City Police and trusted by leading community organizations
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for partner logos */}
              <div className="bg-gray-200 h-16 w-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Police</span>
              </div>
              <div className="bg-gray-200 h-16 w-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">NGO Partner</span>
              </div>
              <div className="bg-gray-200 h-16 w-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Schools</span>
              </div>
              <div className="bg-gray-200 h-16 w-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Corporate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignPillars;
