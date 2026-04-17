"use client";

import Image from "next/image";
import { Search, ChevronDown, Binoculars } from "lucide-react";

export default function TourSection() {
  return (
    <section className="relative w-full bg-[white] py-16 lg:py-10 overflow-hidden pt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEARCH AREA */}
        <div className="mb-16">
          <h2 className="text-center text-[#193555] text-4xl font-semibold sm:text-[22px] md:text-[24px]  tracking-[2px] uppercase mb-10">
            Search For Tour
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-end">
            {/* Activity */}
            <div className="relative">
              <select className="w-full bg-transparent text-[#545454] text-[14px] pb-3 border-b border-[#193555] outline-none appearance-none cursor-pointer">
                <option>Activity</option>
                <option>Adventure</option>
                <option>Hiking</option>
                <option>Camping</option>
              </select>
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-[#000000]" />
            </div>

            {/* Destination */}
            <div className="relative">
              <select className="w-full bg-transparent text-[#545454] text-[14px] pb-3 border-b border-[#193555] outline-none appearance-none cursor-pointer">
                <option>Destination</option>
                <option>Hunza</option>
                <option>Skardu</option>
                <option>Kalam</option>
              </select>
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-[#000000]" />
            </div>

            {/* Duration */}
            <div className="relative">
              <select className="w-full bg-transparent text-[#545454] text-[14px] pb-3 border-b border-[#193555] outline-none appearance-none cursor-pointer">
                <option>Duration</option>
                <option>3 Days</option>
                <option>5 Days</option>
                <option>7 Days</option>
              </select>
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-[#000000]" />
            </div>

            {/* Date */}
            <div className="relative">
              <input
                type="text"
                placeholder="Date"
                className="w-full bg-transparent text-[#545454] text-[14px] pb-3 border-b border-[#193555] outline-none placeholder:text-[#6f7680]"
              />
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-[#000000]" />
            </div>

            {/* Button */}
            <button className="w-full h-[44] rounded-md bg-[#193555] hover:bg-[#1b345e] text-white text-[13px] font-semibold uppercase tracking-[1px] transition flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative">
          {/* LEFT CONTENT */}
          <div className="relative min-h-[500px] flex items-center">
            {/* MOUNTAIN BACKGROUND - CSS VERSION */}
            <div
              className="absolute left-[-100px] top-[40px] w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] opacity-20 z-0 pointer-events-none bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: "url('/images/mountain.png')",
              }}
            />

            {/* TEXT CONTENT */}
            <div className="relative z-10">
              <div className="mb-5">
                <Binoculars className="text-[#2f466c] w-8 h-8 mb-6" />

                <h3 className="text-[#193555] text-[30px] sm:text-[38px] md:text-[42px] font-bold uppercase tracking-[1px] leading-none">
                  Why Choose Us?
                </h3>

                <div className="w-[46px] h-[3px] bg-[#f2a532] mt-5"></div>
              </div>

              <p className="text-[#738797] text-[17px] font-normal leading-relaxed mb-7 max-w-[560px]">
                At Apex Tours and Adventures, we invite you to experience the
                beauty and adventure of Pakistan like never before. From the
                majestic mountains of Hunza Valley and Skardu to the
                breathtaking landscapes of Fairy Meadows, and the scenic valleys
                of Kalam Valley and Shogran, we bring you closer to the most
                stunning destinations in the country. From the cultural richness
                of Punjab and Sindh to the untouched landscapes of Balochistan,
                we promise an unforgettable journey filled with adventure,
                discovery, and lasting memories.
              </p>

              <p className="text-[#738797] text-[17px] font-normal leading-relaxed  max-w-[560px]">
                We specialize in customized tours, trekking expeditions, jeep
                safaris, trophy hunting trips, and adventure travel across
                Pakistan. Our services are designed for families, groups, and
                corporate travelers seeking unique and well-organized travel
                experiences. With years of expertise and a deep passion for
                exploring Pakistan, our team ensures every trip is smooth, safe,
                and memorable from start to finish.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[430px] lg:h-[470px] rounded-[8px] overflow-hidden shadow-sm">
              <Image
                src="/images/tour.png"
                alt="Tour Destination"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}