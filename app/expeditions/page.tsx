 import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";

// Replace these with actual imported images from your assets folder
// import expeditionsHero from "../assets/expeditions/hero.jpg";

const expeditionImages = [
  { src: "/images/expeditions/1.jpg", alt: "Snow mountain expedition" },
  { src: "/images/expeditions/2.jpg", alt: "Glacier mountain view" },
  { src: "/images/expeditions/3.jpg", alt: "Summit climb" },
  { src: "/images/expeditions/4.jpg", alt: "Mountain base camp" },
  { src: "/images/expeditions/5.jpg", alt: "Rock spire peak" },
  { src: "/images/expeditions/6.jpg", alt: "Karakoram range" },
  { src: "/images/expeditions/7.jpg", alt: "High altitude camp" },
  { src: "/images/expeditions/8.jpg", alt: "Mountain summit view" },
  { src: "/images/expeditions/9.jpg", alt: "Expedition climbers" },
];

const Expeditions = () => {
  return (
    <>
      <HeroSection
        title="Expeditions"
        description="Embark on expertly guided expeditions into remote and extraordinary terrains. Push your limits, explore the unknown, and experience true adventure at its highest level."
        backgroundImage="/images/expeditions/hero.jpg"
      />
      <PhotoGrid images={expeditionImages} />
    </>
  );
};

export default Expeditions;