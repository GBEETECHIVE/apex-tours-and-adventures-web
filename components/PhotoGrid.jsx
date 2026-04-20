"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PhotoGrid = ({ images }) => {
  const router = useRouter();
   const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }
  const detailsFunc = (tour) => {
    router.push(`/tours/${tour.id}`);
  };
  return (
    <div className="flex flex-col gap-10">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "
        >
          {row.map((image, colIndex) => (
            <div key={colIndex} className="relative">
               <div className="  rounded-xl aspect-8/3 mb-4 ">
                <Image
                  src={image.src || "/assets/KalashValleyHouse.png"}
                  alt={`Photo ${rowIndex * 3 + colIndex + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  onClick={() => detailsFunc(image)}
                  className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer  w-full"
                />
              </div>
              <div>
                <h1 className="text-[#444444] text-left  text-2xl max-w-lg sm:max-w-[300px] w-full  font-bold mb-4 ">
                  {image.fullTitle}
                </h1>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-semibold text-[#444444]">
                    FROM <br />{" "}
                    <span className="text-2xl font-bold text-[#133a67]">
                      ${image.price || "350"}
                    </span>
                  </p>
                  <button
                    onClick={() => detailsFunc(image)}
                    className="max-w-md sm:max-w-[150px] cursor-pointer w-full bg-[#467be7] hover:bg-[#3a6bc7] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
