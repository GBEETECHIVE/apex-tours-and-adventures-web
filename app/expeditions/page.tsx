 import Footer from "@/components/Footer";
import Container from "@/components/container";
import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";

// Replace these with actual imported images from your assets folder
// import expeditionsHero from "../assets/expeditions/hero.jpg";

const expeditionImages = [
  { src: "/assets/expedition/expedition1.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition2.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition3.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition4.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition5.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition6.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition7.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition8.png", alt: "Snow mountain expedition" },
  { src: "/assets/expedition/expedition9.png", alt: "Snow mountain expedition" },
    
];

const Expeditions = () => {
  return (
    <>
      <HeroSection
        title="Expeditions"
        description="Embark on expertly guided expeditions into remote and extraordinary terrains. Push your limits, explore the unknown, and experience true adventure at its highest level."
        backgroundImage="/assets/Expeditions.png"
      />
       <Container className={"mt-10"}>
      <PhotoGrid images={expeditionImages} />
             </Container>
            <Footer />
    </>
  );
};

export default Expeditions;