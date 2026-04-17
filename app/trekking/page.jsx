import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";



const trekkingImages = [
  { src: "/assets/treaking/treaking1.png", alt: "Trekkers on snow trail" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking2.png", alt: "Mountain glacier trek" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking3.png", alt: "K2 base camp trekking",
    title: "2 Days Lahore Sighting Tour",
    price: "350", },
  { src: "/assets/treaking/treaking4.png", alt: "Karakoram peaks" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking5.png", alt: "Glacier trekking route" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking6.png", alt: "Alpine lake with horses" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking7.png", alt: "Snow capped peaks" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking8.png", alt: "Valley mountain view" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
  { src: "/assets/treaking/treaking9.png", alt: "Winter river trekking" ,
    title: "2 Days Lahore Sighting Tour",
    price: "350",},
];

const Trekking = () => {
  return (
    <>
      <HeroSection
        title="Trekking"
        description="Experience thrilling trekking adventures through breathtaking landscapes. Challenge yourself, reconnect with nature, and create unforgettable memories with every step."
        backgroundImage="/assets/treaking.png"
      />
      <Container className={"mt-10"}>
        <PhotoGrid images={trekkingImages} />
      </Container>
      <Footer />
    </>
  );
};

export default Trekking;
