import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";


const tourImages = [
  { src: "/assets/tours/tour1.png", alt: "Lahore historical site" },
  { src: "/assets/tours/tour2.png", alt: "Islamabad Faisal Mosque" },
  { src: "/assets/tours/tour3.png", alt: "Gilgit mountain road" },
  { src: "/assets/tours/tour4.png", alt: "Autumn lake reflection" },
  { src: "/assets/tours/tour5.png", alt: "Hunza valley fall colors" },
  { src: "/assets/tours/tour6.png", alt: "Mountain village winter" },
  { src: "/assets/tours/tour7.png", alt: "Fairy meadows Nanga Parbat" },
  { src: "/assets/tours/tour8.png", alt: "Local Gilgit Baltistan elder" },
  { src: "/assets/tours/tour9.png", alt: "Shandur plateau" },
  { src: "/assets/tours/tour10.png", alt: "Pine forest chairlift" },
  { src: "/assets/tours/tour11.png", alt: "Heritage mosque" },
  { src: "/assets/tours/tour12.png", alt: "Chitrali local person" },
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