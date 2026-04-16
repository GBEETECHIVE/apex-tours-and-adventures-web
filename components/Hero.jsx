import Image from "next/image";
import PreNavbar from "./PreNavbar";
import Navbar from "./Navbar";

const Hero = ({
  title,
  description,
  buttonText,
  backgroundImage,
}) => {
  return (
    <section className="relative w-full h-screen text-white">

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a2540]/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Top Navs */}
        <PreNavbar />
        <Navbar />

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16 text-left">

            {/* Title */}
<h1 className="text-6xl md:text-7xl  font-black leading-tight mb-6">              {title}
            </h1>

            {/* Description */}
            <p className="max-w-3xl text-gray-200 mb-8 font-normal text-xl md:text-lg leading-relaxed">
              {description}
            </p>

            {/* Button */}
          {buttonText && (
  <button className="bg-gradient-to-r from-orange-400 to-orange-600 px-14 py-3 rounded-md font-medium shadow-lg hover:opacity-90 transition">
    {buttonText}
  </button>
)}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;