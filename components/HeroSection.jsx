import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Container from "@/components/Container";
import Image from "next/image";

const HeroSection = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="relative top-0   w-full min-h-[782px]  bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Image
        src={"/assets/KalashValleyHouse frame.png"}
        alt="hero overlay"
        fill
        className="object-cover"
      />
      <div className=" absolute left-0 w-full  ">
        <Container>
          <TopBar />
          <Navbar />
        </Container>
      </div>
      <div className="absolute left-0 w-full top-[30%] ">
        <Container>
          <h1 className=" text-[96px] font-bold md:text-6xl   text-white leading-[92px] font-poppins mb-[20px]">
            {title}
          </h1>
          <p className=" text-white  text-[base] md:text-[20px]  leading-[42px] font-normal   max-w-[977px] w-full font-roboto  ">
            {description}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
