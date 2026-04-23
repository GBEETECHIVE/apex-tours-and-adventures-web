"use client";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import HeroSection from "@/components/HeroSection.jsx";
import Container from "@/components/Container.jsx";
import Footer from "@/components/Footer.jsx";
import Details from "@/components/details/Detail.jsx";
import Image from "next/image";
import { getTourById } from "@/data/tours.js";

const NAV_ITEMS = ["Detail", "Itinerary", "FAQ", "Reviews", "Tour Guide"];

export default function TourDetailPage() {
  const params = useParams();
  const id = params.id;
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [bookingDone, setBookingDone] = useState(false);

   const detailRef = useRef(null);
  const itineraryRef = useRef(null);
  const reviewsRef = useRef(null);
  const faqRef = useRef(null);
  const tourGuideRef = useRef(null);

  const sectionRefs = {
    Detail: detailRef,
    Itinerary: itineraryRef,
    Reviews: reviewsRef,
    FAQ: faqRef,
    "Tour Guide": tourGuideRef,
  };

  useEffect(() => {
    if (id) {
      const tourId = parseInt(id, 10);
       const foundTour = getTourById(tourId);
       setTour(foundTour || null);
    }
    setLoading(false);
  }, [id]);

  const handleNavClick = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBooking = () => {
    if (!date) return alert("Please select a date!");
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading tour details...</p>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Tour not found!</p>
      </div>
    );
  }

  return (
    <section>
      <HeroSection
        title={tour.city}
        fullTitle={tour.fullTitle}
        description={tour.description}
        shortDescription={tour.shortDescription}
        backgroundImage="/assets/Background.png"
        details={true}
      />
      <div className="bg-[#F5F5F5] mt-12 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-12">
            <div className="flex items-end gap-4">
              <Image
                src={"/assets/icons/aeroplan.png"}
                alt="icon"
                width={100}
                height={100}
                className="max-w-[24px] w-full"
              />
              <span className="text-[#414141] text-sm font-medium">
                {tour.city}
              </span>
            </div>

            <div className="flex items-end gap-4">
              <Image
                src={"/assets/icons/min.png"}
                alt="icon"
                width={100}
                height={100}
                className="max-w-[15px] w-full"
              />
              <span className="text-[#414141] text-sm font-medium">
                Min Age : {tour.minAge}
              </span>
            </div>

            <div className="flex items-end gap-4">
              <Image
                src={"/assets/icons/max.png"}
                alt="icon"
                width={100}
                height={100}
                className="max-w-[20px] w-full"
              />
              <span className="text-[#414141] text-sm font-medium">
                Max People : {tour.maxPeople}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e0e0e0",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Container>
          <div className="flex overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                style={{
                  padding: "20px 28px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  color: "#666",
                  borderBottom: "3px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFB156";
                  e.currentTarget.style.borderBottomColor = "#FFB156";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Details
        tour={tour}
        sectionRefs={sectionRefs}
        handleBooking={handleBooking}
        date={date}
        setDate={setDate}
        bookingDone={bookingDone}
      />
      <Footer />
    </section>
  );
}
