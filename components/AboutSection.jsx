import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[white] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/about.png"
            alt="Mountain Road"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="pt-6 md:pt-8">
          {/* Flag */}
          <Image
            src="/images/flag.png"
            alt="Flag Icon"
            width={40}
            height={40}
            className="mb-4"
          />

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#193555] leading-snug">
            ABOUT APEX TOURS & <br /> ADVENTURE
          </h2>

          {/* Underline */}
          <div className="w-16 h-[3px] bg-orange-500 my-4"></div>

          {/* Text */}
          <p className="text-[#738797] leading-loose text-[17px] font-normal max-w-2xl">
            Apex Tours and Adventures provides expertly curated travel
            experiences in the breathtaking region of Gilgit-Baltistan. Whether
            you are an adventure seeker, a culture enthusiast, or someone
            reconnecting with their roots, our tours are designed to create
            truly unforgettable memories. We specialize in serving travelers
            from the USA, US, Canada, and Europe, offering personalized packages
            that allow you to explore the majestic landscapes of northern
            Pakistan. Experience stunning valleys, towering mountains, and
            vibrant local culture while enjoying seamless, tailored journeys
            crafted just for you.
          </p>

          {/* Button (close to text, right aligned) */}
          <div className="flex justify-end mt-16">
            <button className="text-[#304966] font-medium hover:text-orange-500 transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
