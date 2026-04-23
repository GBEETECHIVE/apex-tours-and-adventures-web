import Hero from "../components/Hero";
import TourSection from "../components/TourSection";
import ExperienceSection from "../components/ExperienceSection";
import AboutSection from "../components/AboutSection";
import PopularToursSection from "../components/PopularToursSection";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <main>
      <Hero
  title={
    <>
      EXPLORE <br /> PAKISTAN
    </>
  }
  description="Explore Pakistan’s breathtaking mountains, rich culture, and hidden natural wonders. From majestic valleys to historic cities, discover a land full of beauty, adventure, and timeless stories."
  buttonText="View all Tours"
  backgroundImage="/images/hero.png"
  className="text-left items-start"
/>
<TourSection />
<ExperienceSection />
<AboutSection />
<PopularToursSection />
<CustomerReviews />
<Footer/>
    </main>
  );
}