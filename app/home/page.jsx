import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        title={
          <>
            EXPLORE <br /> PAKISTAN
          </>
        }
        description="Explore Pakistan’s breathtaking beauty..."
        buttonText="View all Tours"
        backgroundImage="/images/hero.png"
      />
    </main>
  );
}