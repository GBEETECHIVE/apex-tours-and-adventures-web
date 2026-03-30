"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection.jsx";
import Container from "@/components/Container.jsx";
import Details from "@/components/details/Detail.jsx";
import Image from "next/image";

const tour = {
  id: 1,
  city: "Lahore",
  title: "02 Days Lahore Sightseeing Tour",
  rating: 4,
  reviews: 3,
  minAge: 18,
  maxPeople: 30,
  price: 350,
  description:
    "During this two-day Lahore Sightseeing Tour, you will visit all attractions and experience the city's culture and enjoy its tasty food. See the historical forts and mosques from the Mughal era, as well as some of the shrines from the British era. Explore the university, where you can shop and visit museums.Local to Pakistan.Good food.",
  images: [
    "/assets/tours/tour1.png",
    "/assets/tours/tour2.png",
    "/assets/tours/tour3.png",
    "/assets/tours/tour4.png",
    "/assets/tours/tour5.png",
      ],
  itinerary: [
    {
      day: 1,
      title: "Historical Lahore",
      description:
        "Start your day with a visit to the iconic Lahore Fort (Shahi Qila), constructed during the 16th century. Explore the palaces, gardens, and iconic Sheesh Mahal (Palace of Mirrors). Move to Badshahi Mosque, one of the largest mosques in the world. Visit the stunning architecture and take some time for quiet contemplation. Walk down Wazir Khan Mosque to discover the city's art and culture. Access its elaborately crafted ornamental tile work, including a clock from the Mughals era. Take a stroll through Shalimar Gardens, a UNESCO World Heritage Site, known for its beautiful Mughal architecture and lush greenery.",
    },
    {
      day: 2,
      title: "Food & Culture Trail",
      description:
        "Begin the morning at Old City food and visit the Wazir Khan Monastery, renowned for its intricate tile work and stunning architecture. Discover the bustling streets of famous Old City through the renowned passages and a tram; sometimes follow a cartoon ride through the narrow alleys of the Walled City. Attend the Wagah Border flag ceremony between Pakistan and India. Indulge in dinner at a leading restaurant where the local shows such as traditional dances perform live. Recommended rather than food these provide an extensive inventory of local dishes and up your food traditions.",
    },
  ],
  included: [
    "Accommodation (3-Star Hotel - Breakfast included)",
    "Transportation (taxi and local)",
    "Professional Guide (English Speaking Guide)",
    "Entry Tickets (Forts and Museums and City Sights)",
    "Interaction (Gourmet Meals, Breakfast and Dinner)",
  ],
  notIncluded: ["Hotel", "Tips", "Personal Expenditures"],
  faqs: [
    {
      q: "What attractions will I visit on Lahore Full Day Sightseeing Tour?",
      a: "On this Lahore 2 Days Full Day Sightseeing Tour, you will experience key attractions including Lahore Fort, Badshahi Mosque, Lahore Museum, Lahore Gardens, Shalimar Gardens, Wazir Khan Mosque, Wagah Border, and the bustling streets of Old City.",
    },
    {
      q: "Do I need a Visa to Travel to Pakistan?",
      a: "Pakistan allows citizens of some countries on arrival. You may need to check visa requirements based on your nationality. Please contact our team for assistance with your visa application.",
    },
    {
      q: "What to wear in Pakistan?",
      a: "Pakistan is a conservative country, so it is recommended to dress modestly. For women, loose-fitting clothes that cover arms and legs are advisable. Men should also dress modestly. Smart, comfortable shoes are recommended.",
    },
    {
      q: "What is the weather like in Pakistan?",
      a: "Lahore experiences a semi-arid climate with very hot summers reaching over 40°C (104°F) and mild winters. Spring (February–April) and Autumn (October–November) are the best times to visit.",
    },
  ],
  relatedTours: [
    {
      id: 2,
      title: "Hunza Valley Tour",
      price: 500,
      img: "/assets/tours/tour1.png",
    },
    {
      id: 3,
      title: "Lahore City Tour",
      price: 200,
      img: "/assets/tours/tour1.png",
    },
    {
      id: 4,
      title: "Nathia Gali Adventure",
      price: 300,
      img: "/assets/tours/tour1.png",
    },
  ],
};

const TABS = ["Detail", "Itinerary", "Reviews", "FAQ", "Tour Guide"];

export default function TourDetail() {
  const [activeTab, setActiveTab] = useState("Detail");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  const handleBooking = () => {
    if (!date) return alert("Please select a date!");
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 3000);
  };

  return (
    <section>
      <HeroSection
        title="Lahore"
        description="Explore unforgettable tours designed to inspire, relax, and connect you with authentic local experiences. Discover new destinations with comfort, care, and lasting memories."
        backgroundImage="/assets/Background.png"
        details={true}
      />
      <div className="  bg-[#F5F5F5] mt-12 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-12 ">
            <div className="flex items-end gap-4">
              <Image
                src={"/assets/icons/aeroplan.png"}
                alt="icon"
                width={100}
                height={100}
                className="max-w-[24px] w-full"
              />

              <span className="text-[#414141] text-sm font-medium">Lahore</span>
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
                Min Age : 18
              </span>
            </div>

            <div className="flex items-end gap-4">
              <Image
                src={"/assets/icons/max.png"}
                alt="icon"
                width={100}
                height={100}
                className="max-w-[20px] w-full"
              />{" "}
              <span className="text-[#414141] text-sm font-medium">
                Max People : 20
              </span>
            </div>
          </div>
        </Container>
      </div>
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
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "20px 28px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  color: activeTab === tab ? "#444444" : "#666",
                  borderBottom:
                    activeTab === tab
                      ? "3px solid #FFB156"
                      : "3px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </Container>
       </div>
      <Details activeTab={activeTab} tour={tour} />
    </section>
  );
}
