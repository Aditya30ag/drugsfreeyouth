import React from 'react';
import Image from 'next/image';

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
  bgColor = "bg-white"
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}>
      <div className="flex-grow">
        <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          {image ? (
            <Image src={image} alt={author} width={48} height={48} className="rounded-full" />
          ) : (
            <span className="text-blue-600 font-semibold text-lg">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-xs text-gray-500">{location}</p>
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
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      quote: "This movement saved my life. I was heading down a dark path, but the youth programs showed me there was hope. Now I help other young people make better choices.",
      author: "Raj Kumar",
      role: "Youth Ambassador",
      location: "Mangalore",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      quote: "Working with Drugs Free Youth has been incredibly rewarding. The community response has been overwhelming, and we're seeing real change in drug-related incidents in our jurisdiction.",
      author: "Inspector Mohan",
      role: "Mangalore City Police",
      location: "Mangalore",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      quote: "As an educator, I've witnessed firsthand how this campaign empowers parents and teachers with the right tools and knowledge to protect our children from drug abuse.",
      author: "Dr. Anitha Rao",
      role: "College Principal",
      location: "Udupi",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  const caseStudies = [
    {
      title: "A Youth Who Was Saved",
      description: "Through early intervention and community support, a 19-year-old student was redirected from drug experimentation to becoming a peer educator in his college.",
      impact: "Now mentors 50+ students annually",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "A Parent Who Found Support",
      description: "A mother struggling with her teenager's addiction found hope through our parent support groups and family counseling programs.",
      impact: "Family reunited and thriving",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    },
    {
      title: "A Community Transformed",
      description: "A neighborhood with high drug activity saw a 70% reduction in incidents after implementing our community watch and awareness programs.",
      impact: "Safe environment restored",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12V6H4v10h12z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from parents, youth, and community members whose lives have been transformed through our movement. These are the voices that drive our mission forward.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-20">
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
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
            Success Stories in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {study.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{study.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {study.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Measuring Our Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Lives Directly Impacted</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">89%</div>
              <p className="text-blue-100">Program Success Rate</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">25</div>
              <p className="text-blue-100">Communities Served</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Your Story Could Be Next
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a parent seeking support, a youth looking for guidance, or a community member wanting to make a difference, we&apos;re here to help you write your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200">
              Share Your Story
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200">
              Get Help Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
