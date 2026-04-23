import Hero from "../../components/Hero";
import OurStory from "../../components/OurStory";
import ApexTours from "../../components/ApexTours";
import TeamSection from "../../components/TeamSection";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main>
      <Hero
        title={
          <>
            ABOUT US
          </>
        }
        description="Experience thrilling trekking adventures through breathtaking landscapes. Challenge yourself, reconnect with nature, and create unforgettable memories with every step."
        backgroundImage="/images/abouthero.png"
      />

      <OurStory/>
      <ApexTours/>
      <TeamSection/>
      <Footer/>
    </main>
   
  );
}