import React from 'react';
import Image from 'next/image';

const FounderHero = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <div className="inline-block bg-muted text-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              Founder
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Suhail Kandak
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light mb-8">
              A Leader with Purpose and Power
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Suhail Kandak is a dynamic entrepreneur, investor, and social innovator who represents a new generation of leaders in India — people who seamlessly combine business acumen with social commitment.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As the Founder of Drugs Free Youth, Suhail has transformed what could have been a small awareness campaign into a movement with police backing, grassroots participation, and institutional partnerships. His ability to mobilize communities while aligning with law enforcement and civic authorities has made him one of the most respected voices in the fight against drug abuse in coastal Karnataka.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                <span className="font-medium">Entrepreneur</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Social Innovator</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Visionary Leader</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-muted rounded-3xl flex items-center justify-center shadow-xl">
                <Image
                  src="/Suhail.jpg"
                  alt="Suhail Kandak - Founder"
                  width={380}
                  height={380}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-2xl p-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="absolute -top-4 -left-4 bg-primary rounded-2xl p-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full opacity-50 -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/10 rounded-full opacity-50 -mb-20 -ml-20"></div>
    </section>
  );
};

export default FounderHero;
