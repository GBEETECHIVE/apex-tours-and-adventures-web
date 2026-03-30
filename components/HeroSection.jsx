import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Container from "@/components/Container";
import Image from "next/image";

const HeroSection = ({
  title,
  description,
  backgroundImage,
  details = false,
}) => {
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
          <h1
            className={`text-[96px] font-bold md:text-6xl   text-white leading-[92px] font-poppins  ${details ? "mb-[0px]" : "mb-[20px]"}`}
          >
            {title}
          </h1>
          {details && (
            <div className="mb-[20px]">
              <h1 className="text-[29px] font-bold md:text-[35px]   text-white leading-[92px] font-poppins ">
                02 Days Lahore Sightseeing Tour
              </h1>
              <div className="flex items-end  w-full  gap-1 text-white">
                <Image
                  src="/assets/icons/star.png"
                  alt="Start icon"
                  width={30}
                  height={30}
                  className="max-w-[20px] w-full h-auto"
                />
                <Image
                  src="/assets/icons/star.png"
                  alt="Start icon"
                  width={30}
                  height={30}
                  className="max-w-[20px] w-full h-auto"
                />
                <Image
                  src="/assets/icons/star.png"
                  alt="Start icon"
                  width={30}
                  height={30}
                  className="max-w-[20px] w-full h-auto"
                />
                <Image
                  src="/assets/icons/star.png"
                  alt="Start icon"
                  width={30}
                  height={30}
                  className="max-w-[20px] w-full h-auto"
                />
                <Image
                  src="/assets/icons/star.png"
                  alt="Start icon"
                  width={30}
                  height={30}
                  className="max-w-[20px] w-full h-auto"
                />
                <p className="ml-1 text-[15px] font-[400] leading-[18px] ">
                  (3 Reviews)
                </p>
              </div>
            </div>
          )}
          <p className=" text-white  text-[base] md:text-[20px]  leading-[42px] font-normal   max-w-[977px] w-full font-roboto  ">
            {description}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
