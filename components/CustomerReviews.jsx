"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Toni - USA",
      type: "Couple Traveller",
      text: `The Lahore tour was excellent. The guide was responsive to emails prior to travel and very helpful. He and the driver did everything possible to offer attractions, info and accommodations when issues arose. I would recommend Rock Valley Tours to anyone traveling in Pakistan.`,
    },
    {
      name: "Lisa Naughton",
      type: "Solo Traveller",
      text: `Everything about this company was great from the initial organising with Manzoor texts back and forth confirming things to visa assistance. The tour itself to the north was nothing short of fabulous. My guide Saeed was brilliant, patiently answering my myriad of questions to organising special extras – like a tour of the Rawalpindi cricket stadium. The driver Umar was careful and drove well. I cannot promise them enough. Their guidance was top notch, congratulations to them for organisation and professional work.`,
    },
    {
      name: "Hicham Bouanani",
      type: "Solo Traveller",
      text: `Fabulous! Highly recommended. Very professional. These guys do everything in their power to make sure you have an amazing and stress-free trip. And the food is incredible!`,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/reviewbg.jpg"
          alt="Customer review background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/75"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold uppercase tracking-[0.22em] text-[#1f3b5b]">
            Customer Review
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 items-start">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`mx-auto w-full max-w-[370px] border border-[#d9d9d9] bg-white/85 px-8 text-center shadow-sm ${
                index === 1
                  ? "min-h-[520px] py-12"
                  : "min-h-[400px] py-10"
              }`}
            >
              {/* Name */}
              <h3 className="mb-4 text-[18px] font-bold text-[#6d7480]">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="mb-3 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#f5a623] text-[#f5a623]"
                  />
                ))}
              </div>

              {/* Traveller Type */}
              <p className="mb-8 text-[18px] italic text-[#7a7f87]">
                {review.type}
              </p>

              {/* Review Text */}
              <p className="mx-auto max-w-[280px] text-[17px] leading-[2] italic text-[#7f858d]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}