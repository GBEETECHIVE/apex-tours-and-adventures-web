"use client";
import PhotoGrid from "@/components/PhotoGrid";
import Container from "@/components/Container";

const SectionHeading = ({ children }) => (
  <h2
    style={{
      fontSize: 22,
      fontWeight: 900,
      color: "#111",
      textTransform: "uppercase",
      letterSpacing: 1,
      margin: "36px 0 14px",
      padding: 0,
    }}
  >
    {children}
  </h2>
);

function splitLabel(str) {
  const idx = str.indexOf(":");
  if (idx === -1) return { label: null, rest: str };
  return { label: str.slice(0, idx).trim(), rest: str.slice(idx + 1).trim() };
}

function FaqAnswer({ faq }) {
  if (!faq?.a) return null;

  if (faq.format === "numbered") {
    const items = faq.a
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <ol style={{ margin: 0, paddingLeft: 20, listStyleType: "disc" }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: 14,
              color: "#555",
              lineHeight: 1.8,
              marginBottom: 10,
            }}
          >
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (faq.format === "bullets") {
    const items = faq.a
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <>
        {faq.intro && (
          <p
            style={{
              fontSize: 14,
              color: "#555",
              margin: "0 0 6px 0",
              lineHeight: 1.8,
            }}
          >
            {faq.intro}
          </p>
        )}
        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: "disc" }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.8,
                marginBottom: 4,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <p style={{ fontSize: 14, color: "#555", margin: 0, lineHeight: 1.85 }}>
      {faq.a}
    </p>
  );
}

export default function DetailTab({ tour, sectionRefs }) {
  const tourImages = tour.images.map((src, index) => ({
    id: index + 1,
    src,
    alt: `${tour.city} tour image ${index + 1}`,
  }));

  return (
    <div style={{ fontFamily: "inherit", color: "#333", lineHeight: 1.8 }}>
      {/* DETAIL SECTION */}
      <div ref={sectionRefs.Detail}>
        <SectionHeading>Detail</SectionHeading>
        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85, margin: 0 }}>
          {tour.description}
        </p>
        {tour.description2 && (
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85, margin: 0 }}>
            {tour.description2}
          </p>
        )}
        
      </div>
      {/* ITINERARY SECTION */}
      <div ref={sectionRefs.Itinerary}>
        <SectionHeading>Itinerary</SectionHeading>
        {tour.itinerary.map((item) => {
          const sentences = item.description
            .split(/(?<=\.)\s+/)
            .map((s) => s.trim())
            .filter(Boolean);

          return (
            <ol
              key={item.day}
              style={{
                marginBottom: 20,
                listStyleType: "disc",
                listStylePosition: "inside",
                paddingLeft: 0,
              }}
            >
              <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 6px 0" }}>
                Day {item.day}: {item.title}
              </p>
              {sentences.map((s, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: "#555",
                    margin: "0 0 4px 0",
                    lineHeight: 1.8,
                  }}
                >
                  {s}
                </li>
              ))}
            </ol>
          );
        })}
      </div>
      ,{/* WHAT'S INCLUDED */}
      <SectionHeading>What's Included</SectionHeading>
      <ol style={{ margin: 0, paddingLeft: 20, listStyleType: "disc" }}>
        {tour.included.map((item, i) => {
          const { label, rest } = splitLabel(item);
          return (
            <li
              key={i}
              style={{
                fontSize: 14,
                color: "#444",
                marginBottom: 6,
                lineHeight: 1.7,
              }}
            >
              {label ? (
                <>
                  <strong style={{ color: "#111" }}>{label}</strong>: {rest}
                </>
              ) : (
                item
              )}
            </li>
          );
        })}
      </ol>
      {/* WHAT'S NOT INCLUDED */}
      <SectionHeading>What's Not Included</SectionHeading>
      <ol
        style={{
          margin: 0,
          paddingLeft: 20,
          listStyleType: "disc",
          listStylePosition: "inside",
          paddingLeft: 0,
        }}
      >
        {tour.notIncluded.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: 14,
              color: "#444",
              marginBottom: 6,
              lineHeight: 1.7,
            }}
          >
            {item}
          </li>
        ))}
      </ol>
      {/* VISA GUIDE */}
      <SectionHeading>Visa Guide</SectionHeading>
      <ol
        style={{
          margin: 0,
          paddingLeft: 20,
          listStyleType: "disc",
          listStylePosition: "inside",
          paddingLeft: 0,
        }}
      >
        <li
          style={{
            fontSize: 14,
            color: "#555",
            marginBottom: 6,
            lineHeight: 1.7,
          }}
        >
          Apply for Pakistan Tourist Visa Here:{" "}
          <a href="#" style={{ color: "#FFB156", textDecoration: "underline" }}>
            Visa Website
          </a>
        </li>
        <li
          style={{
            fontSize: 14,
            color: "#555",
            marginBottom: 6,
            lineHeight: 1.7,
          }}
        >
          Download{" "}
          <a href="#" style={{ color: "#FFB156", textDecoration: "underline" }}>
            Visa Guide
          </a>
        </li>
        <li style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
          If you're having trouble with your visa application, reach out to us
          for help and guidance.
        </li>
      </ol>
      {/* FAQ SECTION */}
      <div ref={sectionRefs.FAQ}>
        <SectionHeading>FAQ</SectionHeading>
        {tour.faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#111",
                margin: "0 0 8px 0",
              }}
            >
              {faq.q}
            </p>
            <FaqAnswer faq={faq} />
          </div>
        ))}
      </div>
      {/* TOUR GUIDE SECTION */}
      <div ref={sectionRefs["Tour Guide"]}>
        <SectionHeading>Tour Guide</SectionHeading>
        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85 }}>
          Our professional English-speaking guides are available to make your
          experience memorable. All our guides are licensed, experienced, and
          passionate about sharing the rich history and culture of {tour.city}.
        </p>
      </div>
      {/* REVIEWS SECTION */}
      <div ref={sectionRefs.Reviews}>
        <SectionHeading>Reviews</SectionHeading>
        <p style={{ fontSize: 14, color: "#888" }}>
          {tour.reviews > 0
            ? `Based on ${tour.reviews} reviews, our customers love this tour!`
            : "No reviews yet. Be the first to review this tour!"}
        </p>
      </div>
      {/* RELATED TOURS */}
      {tour.relatedTours.length > 0 && (
        <>
          <h1 className="text-lg font-bold text-black mt-8">Related tours</h1>
          <Container className={"my-10"}>
            <PhotoGrid images={tourImages} />
          </Container>
        </>
      )}
    </div>
  );
}
