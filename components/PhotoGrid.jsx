import Image from "next/image";

const PhotoGrid = ({ images }) => {
  // Chunk images into rows of 3
  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-10">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {row.map((image, colIndex) => (
            <div
              key={colIndex}
              className="relative overflow-hidden rounded-xl aspect-[4/3] mb-[100px]"  
            >
              <Image
                src={image.src}
                alt={image.alt || `Photo ${rowIndex * 3 + colIndex + 1}`}
                className="object-cover hover:scale-105 transition-transform duration-500"
                fill
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
