"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

const AboutImageSlider = () => {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/slider.jpg", alt: "Drugs Free Youth campaign banner" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const hoverRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return; // no autoplay for single image
    const start = () => {
      if (intervalRef.current !== null) return;
      intervalRef.current = window.setInterval(() => {
        if (!hoverRef.current) {
          setIndex((i) => (i + 1) % slides.length);
        }
      }, 4000);
    };
    const stop = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    start();
    return stop;
  }, [slides.length]);

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {slides.length === 1 ? (
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem]">
              <Image
                src={slides[0].src}
                alt={slides[0].alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div
            className="relative overflow-hidden rounded-3xl shadow-xl"
            onMouseEnter={() => {
              hoverRef.current = true;
            }}
            onMouseLeave={() => {
              hoverRef.current = false;
            }}
            aria-roledescription="carousel"
          >
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="relative w-full shrink-0 h-64 sm:h-80 md:h-96 lg:h-[28rem]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 rounded-full px-2 py-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "bg-white w-6" : "bg-white/60 w-2.5 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutImageSlider;
