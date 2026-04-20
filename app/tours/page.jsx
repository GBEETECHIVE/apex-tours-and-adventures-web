import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { tours } from "@/data/tours.js";
 
const Tour = () => {
  return (
    <>
      <HeroSection
        title="Tours"
        description="Explore unforgettable tours designed to inspire, relax, and connect you with authentic local experiences. Discover new destinations with comfort, care, and lasting memories."
        backgroundImage="/assets/KalashValleyHouse.png"
      />
      <Container className={"mt-10"}>
        <PhotoGrid images={tours} />
      </Container>
      <Footer />
    </>
  );
};

export default Tour;
