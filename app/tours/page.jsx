import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const tourImages = [
  { id: 1, src: "/assets/tours/tour1.png", alt: "Lahore historical site" },
  { id: 2, src: "/assets/tours/tour2.png", alt: "Islamabad Faisal Mosque" },
  { id: 3, src: "/assets/tours/tour3.png", alt: "Gilgit mountain road" },
  { id: 4, src: "/assets/tours/tour4.png", alt: "Autumn lake reflection" },
  { id: 5, src: "/assets/tours/tour5.png", alt: "Hunza valley fall colors" },
  { id: 6, src: "/assets/tours/tour6.png", alt: "Mountain village winter" },
  { id: 7, src: "/assets/tours/tour7.png", alt: "Fairy meadows Nanga Parbat" },
  {
    id: 8,
    src: "/assets/tours/tour8.png",
    alt: "Local Gilgit Baltistan elder",
  },
  { id: 9, src: "/assets/tours/tour9.png", alt: "Shandur plateau" },
  { id: 10, src: "/assets/tours/tour10.png", alt: "Pine forest chairlift" },
  { id: 11, src: "/assets/tours/tour11.png", alt: "Heritage mosque" },
  { id: 12, src: "/assets/tours/tour12.png", alt: "Chitrali local person" },
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
