"use client";
import BookingWidget from "./BookingWidget";
import DetailTab from "./DetailTab";
import ImageGallery from "./ImageGallery";
import Image from "next/image";
import Container from "@/components/Container.jsx";

export default function Details({ tour, sectionRefs }) {
  return (
    <Container>
      <div className="my-[20px] px-4">
        <h1 className="text-[29px] font-bold md:text-[35px] leading-[92px] font-poppins">
          02 Days Lahore Sightseeing Tour
        </h1>
        <div className="flex items-end w-full gap-1">
          <Image
            src="/assets/icons/star.png"
            alt="Start icon"
            width={30}
            height={30}
            className="max-w-[20px] w-full h-auto"
          />
          <Image
            src="/assets/icons/star.png"
            alt="Start icon"
            width={30}
            height={30}
            className="max-w-[20px] w-full h-auto"
          />
          <Image
            src="/assets/icons/star.png"
            alt="Start icon"
            width={30}
            height={30}
            className="max-w-[20px] w-full h-auto"
          />
          <Image
            src="/assets/icons/star.png"
            alt="Start icon"
            width={30}
            height={30}
            className="max-w-[20px] w-full h-auto"
          />
          <Image
            src="/assets/icons/star.png"
            alt="Start icon"
            width={30}
            height={30}
            className="max-w-[20px] w-full h-auto"
          />
          <p className="ml-1 text-[15px] text-gray-600 font-[400] leading-[18px]">
            (3 Reviews)
          </p>
        </div>
      </div>
      <ImageGallery images={tour.images} title={tour.title} />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 40,
          alignItems: "start",
        }}
      >
         <div>
          <DetailTab tour={tour} sectionRefs={sectionRefs} />
        </div>

         <div style={{ position: "sticky", top: 80 }}>
          <BookingWidget price={tour.price} />
        </div>
      </div>
    </Container>
  );
}
