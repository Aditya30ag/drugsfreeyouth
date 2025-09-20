import React from 'react';
import Image from 'next/image';
import { HeartHandshakeIcon, UsersIcon, UserCheckIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  image?: string;
  bgColor?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  location,
  image,
  bgColor = "bg-card"
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
      <div className="flex-grow">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-full flex items-center justify-center mr-3 sm:mr-4">
          {image ? (
            <Image src={image} alt={author} width={48} height={48} className="rounded-full" />
          ) : (
            <span className="text-foreground font-semibold text-sm sm:text-lg">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm sm:text-base">{author}</h4>
          <p className="text-xs sm:text-sm text-muted-foreground">{role}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const testimonials = [
    {
      quote: "When I lost my son to drugs, I thought my voice didn't matter. But through this campaign, I found strength in community. Now, I speak at parent awareness programs to ensure no one else goes through the same pain.",
      author: "Priya Shetty",
      role: "Parent & Community Speaker",
      location: "Udupi",
      bgColor: "bg-muted"
    },
    {
      quote: "This movement saved my life. I was heading down a dark path, but the youth programs showed me there was hope. Now I help other young people make better choices.",
      author: "Raj Kumar",
      role: "Youth Ambassador",
      location: "Mangalore",
      bgColor: "bg-muted"
    },
    {
      quote: "Working with Drugs Free Youth has been incredibly rewarding. The community response has been overwhelming, and we're seeing real change in drug-related incidents in our jurisdiction.",
      author: "Inspector Mohan",
      role: "Mangalore City Police",
      location: "Mangalore",
      bgColor: "bg-muted"
    },
    {
      quote: "As an educator, I've witnessed firsthand how this campaign empowers parents and teachers with the right tools and knowledge to protect our children from drug abuse.",
      author: "Dr. Anitha Rao",
      role: "College Principal",
      location: "Udupi",
      bgColor: "bg-muted"
    }
  ];

  const caseStudies = [
    {
      title: "A Youth Who Was Saved",
      description: "Through early intervention and community support, a 19-year-old student was redirected from drug experimentation to becoming a peer educator in his college.",
      impact: "Now mentors 50+ students annually",
      icon: (
        <UserCheckIcon className="w-8 h-8 text-red-600" />
      )
    },
    {
      title: "A Parent Who Found Support",
      description: "A mother struggling with her teenager's addiction found hope through our parent support groups and family counseling programs.",
      impact: "Family reunited and thriving",
      icon: (
        <HeartHandshakeIcon className="w-8 h-8 text-red-600" />
      )
    },
    {
      title: "A Community Transformed",
      description: "A neighborhood with high drug activity saw a 70% reduction in incidents after implementing our community watch and awareness programs.",
      impact: "Safe environment restored",
      icon: (
        <UsersIcon className="w-8 h-8 text-red-600" />
      )
    }
  ];

  return (
    <section className="bg-background px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Real Stories, Real Impact
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from parents, youth, and community members whose lives have been transformed through our movement. These are the voices that drive our mission forward.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              location={testimonial.location}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Success Stories in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-foreground">
                  {study.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{study.title}</h4>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{study.description}</p>
                <div className="bg-muted text-foreground px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold">
                  {study.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-primary rounded-3xl p-6 sm:p-12 text-primary-foreground text-center">
          <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Measuring Our Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">150+</div>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Lives Directly Impacted</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">89%</div>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Program Success Rate</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">25</div>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Communities Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
