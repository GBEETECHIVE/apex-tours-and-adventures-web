"use client";

import Image from "next/image";

export default function ExperienceSection() {
  const items = [
    {
      icon: "/images/climbing.png",
      title: "20 YEARS EXPERIENCES",
      text: "For two decades, we’ve been crafting unforgettable journeys, immersing travelers in the rich tapestry of cultures, landscapes, and experiences that make our world so captivating.",
    },
    {
      icon: "/images/knife.png",
      title: "200+ TOURS ORGANIZED",
      text: "With over 200 tours under our belt, we have the experience and expertise to make your next tour a success.",
    },
    {
      icon: "/images/map.png",
      title: "BIG GUIDE COMMUNITY",
      text: "A thriving community of tour guides connects travelers with local experts, fostering meaningful experiences and cultural immersion.",
    },
    {
      icon: "/images/backpack.png",
      title: "TOURIST VISA GUIDE",
      text: "All foreign visitors need a passport valid for at least 6 months. Tourist visas (usually valid for 3 months) can be obtained online or from Pakistani embassies/consulates. Need help with your visa? We’re here to guide you.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-20 md:py-24 lg:py-28">
      {/* Background Mountain Image */}
      <div className="absolute inset-0 z-0 opacity-[0.14]">
        <Image
          src="/images/bgg.png"
          alt="Mountain Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-18 gap-x-14 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-8">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={58}
                  height={58}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#243f5d] text-[18px] font-semibold sm:text-[20px] lg:text-[18px]  uppercase tracking-[2px] leading-snug mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
  {item.title}
</h3>

              {/* Text */}
              <p className="text-[#70839a] text-[16px] font-normal sm:text-[16px] lg:text-[16px] leading-[2] max-w-[290px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}