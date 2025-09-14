import React from "react";
import Image from "next/image";

interface CampaignCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  description,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex flex-col justify-center items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300`}
    >
      <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 leading-snug tracking-wide">
        {title}
      </h2>
      <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

const AwakeParentsCampaign: React.FC = () => {
  const campaignData = [
    {
      title: "Faith Awareness",
      description: "Awareness programs at various religious places",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
    },
    {
      title: "Corner Meets",
      description: "Corner meetings in 40 locations in Mangalore and Udupi",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      title: "Parent Programs",
      description:
        "Parents' awareness programs in all major colleges and institutes",
      bgColor: "bg-gray-500",
      textColor: "text-white",
    },
    {
      title: "Walkathon & Oath",
      description: "Walkathon – followed by an oath-taking ceremony",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Awake Parents Campaign
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          A movement dedicated to spreading awareness and creating impactful change
          in communities through faith, education, and active participation.
        </p>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {campaignData.map((campaign, index) => (
            <CampaignCard
              key={index}
              title={campaign.title}
              description={campaign.description}
              bgColor={campaign.bgColor}
              textColor={campaign.textColor}
            />
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/Suhail.jpg"
              alt="Founder"
              width={500}
              height={500}
              className="rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-red-600 uppercase">
              Founder of Drug Free Youth
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Suhail Kandak
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              Suhail is a dynamic entrepreneur and social innovator with a strong
              track record in both business and community initiatives. He leads
              Invenu Global Gateway LLP, a legal support and planning firm, and
              previously served as CEO of Coastal Infratech India Pvt Ltd.
              Passionate about social impact, he founded the MakeAChange
              Foundation, B_HUMAN.IN, and DrugsFreeYouth_Org, while also creating
              99TOURS.IN.
            </p>
            <button className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300 text-sm sm:text-base">
              Know More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwakeParentsCampaign;
