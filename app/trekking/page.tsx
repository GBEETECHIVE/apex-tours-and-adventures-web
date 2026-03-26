 import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";

// Replace these with actual imported images from your assets folder
// import trekkingHero from "../assets/trekking/hero.jpg";
// import img1 from "../assets/trekking/1.jpg"; etc.

const trekkingImages = [
  { src: "/images/trekking/1.jpg", alt: "Trekkers on snow trail" },
  { src: "/images/trekking/2.jpg", alt: "Mountain glacier trek" },
  { src: "/images/trekking/3.jpg", alt: "K2 base camp trekking" },
  { src: "/images/trekking/4.jpg", alt: "Karakoram peaks" },
  { src: "/images/trekking/5.jpg", alt: "Glacier trekking route" },
  { src: "/images/trekking/6.jpg", alt: "Alpine lake with horses" },
  { src: "/images/trekking/7.jpg", alt: "Snow capped peaks" },
  { src: "/images/trekking/8.jpg", alt: "Valley mountain view" },
  { src: "/images/trekking/9.jpg", alt: "Winter river trekking" },
];

const Trekking = () => {
  return (
    <>
      <HeroSection
        title="Trekking"
        description="Experience thrilling trekking adventures through breathtaking landscapes. Challenge yourself, reconnect with nature, and create unforgettable memories with every step."
        backgroundImage="/images/trekking/hero.jpg"
      />
      <PhotoGrid images={trekkingImages} />
    </>
  );
};

export default Trekking;