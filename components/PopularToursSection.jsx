"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PopularToursSection() {
  const tours = [
    {
      title: "2 DAYS LAHORE SIGHTING TOUR",
      price: "$350",
      image: "/images/lahore.png",
    },
    {
      title: "2 DAYS ISLAMABAD SIGHTING TOUR",
      price: "$350",
      image: "/images/islamabad.png",
    },
    {
      title: "2 DAYS KALASH SIGHTING TOUR",
      price: "$350",
      image: "/images/kalaash.png",
    },
  ];

  // 5 slides so 5 dots always show
  const slides = [
    [tours[0], tours[1], tours[2]],
    [tours[1], tours[2], tours[0]],
    [tours[2], tours[0], tours[1]],
    [tours[0], tours[2], tours[1]],
    [tours[1], tours[0], tours[2]],
  ];

  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move one by one correctly
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/bookingbg.png"
          alt="Popular Tours Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading + Arrows */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[28px] sm:text-[26px] md:text-[30px] font-extrabold tracking-[2px] text-[#343434] uppercase">
            Find Our Popular Tours
          </h2>

          <div className="flex items-center gap-5">
            <button
              onClick={prevSlide}
              className={`transition ${
                currentSlide === 0
                  ? "text-[#1e4d8f]/30 cursor-not-allowed"
                  : "text-[#467be7] hover:opacity-70"
              }`}
              aria-label="Previous Slide"
              disabled={currentSlide === 0}
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={nextSlide}
              className={`transition ${
                currentSlide === totalSlides - 1
                  ? "text-[#1e4d8f]/30 cursor-not-allowed"
                  : "text-[#1e4d8f] hover:opacity-70"
              }`}
              aria-label="Next Slide"
              disabled={currentSlide === totalSlides - 1}
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slideItems, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                {slideItems.map((tour, index) => (
                  <div
                    key={index}
                    className="bg-[#f5f5f5] rounded-[14px] p-[8px] shadow-sm border border-white/50 max-w-[390px] mx-auto w-full"
                  >
                    {/* Card Image */}
                    <div className="relative w-full h-[245px] rounded-[12px] overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="pt-4 pb-3 px-1">
                      <h3 className="text-[24px] sm:text-[20px] leading-[1.05] font-bold uppercase tracking-[1.3px] text-[#444444] max-w-[270px]">
                        {tour.title}
                      </h3>

                      <div className="flex items-end justify-between mt-5">
                        <div>
                          <p className="text-[16px] uppercase tracking-[2px] text-[#444444] font-semibold">
                            From
                          </p>
                          <p className="text-[24px] leading-none font-extrabold text-[#1d4f93] mt-1">
                            {tour.price}
                          </p>
                        </div>

                        <button className="bg-[#4b79e6] hover:bg-[#3d69d3] text-white text-[12px] tracking-[2px] uppercase font-semibold px-7 py-4 rounded-[8px] transition">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-14">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-[13px] h-[13px] rounded-full border border-[#3f3f3f] transition ${
                currentSlide === index ? "bg-[#3f3f3f]" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#193555] hover:bg-[#12325e] text-white text-[13px] sm:text-[14px] uppercase tracking-[1px] font-semibold px-10 py-5 rounded-full transition shadow-md">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
}