"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ImageGallery({ images, title }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onClick={() => setLightboxImg(images[0])}
        >
          <Image
            src={images[0]}
            alt={title}
            width={900}
            height={900}
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 38,
              left: 38,
              display: "flex",
              gap: 8,
              zIndex: 10,
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                background: "rgba(255,255,255,0.92)",
                color: "#1a1a2e",
                border: "none",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* /assets/icons/camera.png */}
              <Image
                src={"/assets/icons/gallary.png"}
                alt={title}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className="max-w-[20px] w-full h-auto "
              />
              Gallery
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                background: "rgba(255,255,255,0.92)",
                color: "#1a1a2e",
                border: "none",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(4px)",
              }}
            >
              <Image
                src={"/assets/icons/camera.png"}
                alt={title}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className="max-w-[20px] w-full h-auto "
              />{" "}
              Video
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 6,
            borderRadius: 12,
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                cursor: "pointer",
                height: "250px",
                borderRadius: "12px",
              }}
              onClick={() => setLightboxImg(img)}
            >
              <Image
                src={img}
                alt={`Tour image ${i + 2}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.82)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 860px)",
              height: "min(80vh, 580px)",
              overflow: "hidden",
            }}
          >
            <Image
              src={lightboxImg}
              alt="Full view"
              fill
              style={{ objectFit: "contain" }}
            />

            {/* Close button */}
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(0,0,0,0.55)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
