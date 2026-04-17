import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const tourImages = [
  {
    id: 1,
    src: "/assets/tours/tour1.png",
    alt: "Lahore historical site",
    title: "2 Days Lahore Sighting Tour",
    price: "350",
  },
  {
    id: 2,
    src: "/assets/tours/tour2.png",
    alt: "Islamabad Faisal Mosque",
    title: "2 Days Islamabad Sighting Tour",
    price: "350",
  },
  {
    id: 3,
    src: "/assets/tours/tour3.png",
    alt: "Gilgit mountain road",
    title: "2 Days Kalash Sighting Tour",
    price: "350",
  },
  {
    id: 4,
    src: "/assets/tours/tour4.png",
    alt: "Autumn lake reflection",
    title: "2 Days Gilgit and Hunza Sighting Tour",
    price: "350",
  },
  {
    id: 5,
    src: "/assets/tours/tour5.png",
    alt: "Hunza valley fall colors",
    title: "2 Days Mystic Sighting Tour",
    price: "350",
  },
  {
    id: 6,
    src: "/assets/tours/tour6.png",
    alt: "Mountain village winter",
    title: "12 Days Full Pakistan Tour",
    price: "350",
  },
  {
    id: 7,
    src: "/assets/tours/tour7.png",
    alt: "Fairy meadows Nanga Parbat",
    title: "8 Days Cultural Tour Shimshal",
    price: "350",
  },
  {
    id: 8,
    src: "/assets/tours/tour8.png",
    alt: "Local Gilgit Baltistan elder",
    title: "2 Days Deosai Wildlife Tour",
    price: "350",
  },
  {
    id: 9,
    src: "/assets/tours/tour9.png",
    alt: "Shandur plateau",
    title: "2 Days Kalash Sighting Tour",
    price: "350",
  },
  {
    id: 10,
    src: "/assets/tours/tour10.png",
    alt: "Pine forest chairlift",
    title: "05 Days Isb,mur & ksh Tour",
    price: "350",
  },
  {
    id: 11,
    src: "/assets/tours/tour11.png",
    alt: "Heritage",
    title: "09 days sikh Heritage Tour",
    price: "350",
  },
  {
    id: 12,
    src: "/assets/tours/tour12.png",
    alt: "Chitrali local person",
    title: "07 Days Choimus Kalash Festival Tour",
    price: "350",
  },
];

const Tours = () => {
  return (
    <>
      <HeroSection
        title="Tours"
        description="Explore unforgettable tours designed to inspire, relax, and connect you with authentic local experiences. Discover new destinations with comfort, care, and lasting memories."
        backgroundImage="/assets/KalashValleyHouse.png"
      />
      <Container className={"mt-10"}>
        <PhotoGrid images={tourImages} />
      </Container>
      <Footer />
    </>
  );
};

export default Tours;
