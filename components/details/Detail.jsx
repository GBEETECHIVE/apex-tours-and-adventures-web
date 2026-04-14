"use client";
import BookingWidget from "./BookingWidget";
import DetailTab from "./DetailTab";
import ItineraryTab from "./ItineraryTab";
import FAQTab from "./FAQTab";
import ImageGallery from "./ImageGallery";
import Image from "next/image";
import Container from "@/components/Container.jsx";


const TABS = ["Detail", "Itinerary", "Reviews", "FAQ", "Tour Guide"];

function ReviewsTab() {
  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1a1a2e",
          marginBottom: 16,
        }}
      >
        Reviews
      </h2>
      <p style={{ color: "#888", fontSize: 14 }}>
        No reviews yet. Be the first to review!
      </p>
    </div>
  );
}

function TourGuideTab() {
  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1a1a2e",
          marginBottom: 16,
        }}
      >
        Tour Guide
      </h2>
      <p style={{ color: "#888", fontSize: 14 }}>
        Our professional English-speaking guides are available to make your
        experience memorable.
      </p>
    </div>
  );
}

function TabContent({ activeTab, tour }) {
  switch (activeTab) {
    case "Detail":
      return <DetailTab tour={tour} />;
    case "Itinerary":
      return <ItineraryTab tour={tour} />;
    case "Reviews":
      return <ReviewsTab />;
    case "FAQ":
      return <FAQTab tour={tour} />;
    case "Tour Guide":
      return <TourGuideTab />;
    default:
      return <DetailTab tour={tour} />;
  }
}

export default function Details({ activeTab, tour }) {
  return (
    <Container>
      <div className="my-[20px] px-4">
        <h1 className="text-[29px] font-bold md:text-[35px]    leading-[92px] font-poppins ">
          02 Days Lahore Sightseeing Tour
        </h1>
        <div className="flex items-end  w-full  gap-1  ">
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
          <p className="ml-1 text-[15px] text-gray-600 font-[400] leading-[18px] ">
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
        {/* LEFT — Main Content */}
        <div>
          <TabContent activeTab={activeTab} tour={tour} />
         </div>

        {/* RIGHT — Booking Sidebar (sticky) */}
        <div style={{ position: "sticky", top: 80 }}>
          <BookingWidget price={tour.price} />
        </div>
      </div>
    </Container>
  );
}
