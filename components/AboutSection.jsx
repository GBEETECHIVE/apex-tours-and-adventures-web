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
            At Apex Tours and Adventure, we invite you to embark on a thrilling
            journey through the heart of Pakistan. From the rugged terrains of
            Hunza and Skardu to the enchanting meadows of Fairy Meadows, the
            tranquil beauty of Kalam and Shogran, to the historical treasures
            of Punjab, Sindh, and Balochistan, we promise you an adventure of a
            lifetime. Join us and explore the uncharted, witness the
            extraordinary, and make memories that last a lifetime.
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