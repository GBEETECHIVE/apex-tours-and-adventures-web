"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection.jsx";
import Container from "@/components/Container.jsx";
import Footer from "@/components/Footer.jsx";
import Details from "@/components/details/Detail.jsx";
import Image from "next/image";

const tour = {
  id: 1,
  city: "Lahore",
  title: "Detail",
  rating: 4,
  reviews: 3,
  minAge: 18,
  maxPeople: 30,
  price: 350,
  description:
    "During this two-days Lahore Sightseeing Tour, you\’ll visit historical sites, gardens, and the lively Old Lahore city. You’ll soak in the city’s culture and enjoy its tasty food. See the impressive forts and mosques from the Mughal era, as well as buildings from the British era. Explore the walled city, where you can shop in colourful markets and try delicious local food.",
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
    "Accommodation: 3-Star Hotel – Breakfast Included",
    "Transportation: Car and Guide",
    "Guide: Licensed English-Speaking Guide",
    "Entry Tickets: Forts and Museums Entry Tickets",
    "Invitation Letter: Tourist Visa Invitation Letter",
  ],

  notIncluded: ["Food", "Tip", "Personal Equipments"],

  faqs: [
    {
      q: "Which attractions will I visit with Lahore Full Day Sightseeing Tour?",
      // format: "bullets" → renders intro paragraph + bullet list
      format: "bullets",
      intro:
        "With the Lahore 2 Days Full Day Sightseeing Tour, you'll explore key attractions including",
      a: `The Lahore Fort
Badshahi Mosque
Lahore Museum
Shalimar Gardens
Lahore Museum
Wazir Khan Mosque
Wagah Border
And the bustling streets of the Old City`,
    },
    {
      q: "Do I Need a Visa to Travel to Pakistan?",
      // No answer shown in image — leave empty or add a short paragraph
      a: "",
    },
    {
      q: "What to wear in Pakistan?",
      // format: default → plain paragraph
      a: "In Pakistan, what you wear depends on when and where you're going. In hot areas, wear light, loose clothes like a shirt and trousers. For cold places, bring warm clothes like a jacket and layers. When visiting mosques, cover your head, arms, legs, and shoulders. Dress modestly and avoid shorts. If you're unsure, it's best to dress conservatively.",
    },
    {
      q: "What is the weather like in Pakistan?",
      // format: "numbered" → renders <ol>
      format: "numbered",
      a: `June–September: Monsoon season with unpredictable rains, reaching over 45°C (113°F) in June. Floods can occur.
October–November: Post-monsoon season with decreasing temperatures and rainfall. Days are warm, nights cool.
December–February: Winter months with pleasant daytime temperatures around 20°C (68°F) and colder nights, especially in the northern mountains where it snows.
March–May: Hot and dry season with temperatures in the mid-30s°C (95°F) in low-lying areas, getting hotter towards the north.`,
    },
    {
      q: "Is it considered safe to travel to Pakistan?",
      a: "Although Pakistan has faced challenges in recent years, it\’s now generally safe to visit as long as you stay in busy areas. Some people might worry about coming here, but trust us, there\’s a lot to discover beyond what you see in the news. You can be confident that Rock Valley Tours wouldn\’t take you anywhere unsafe.",
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
      <Footer />
    </section>
  );
}
