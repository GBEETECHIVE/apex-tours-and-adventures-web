const SectionHeading = ({ children }) => (
  <h3
    style={{
      fontSize: 16,
      fontWeight: 700,
      color: "#1a1a2e",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16,
      marginTop: 32,
      paddingBottom: 8,
      borderBottom: "2px solid #f0f0f0",
    }}
  >
    {children}
  </h3>
);

export default function DetailTab({ tour }) {
  return (
    <div>
      {/* Tour Title & Rating */}
      <h2
        style={{
          fontSize: 22,
          color: "#1a1a2e",
          marginBottom: 8,
          fontWeight: 700,
        }}
      >
        {tour.title}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 20,
        }}
      >
        <span style={{ color: "#FFB156", fontSize: 16 }}>
          {"★".repeat(tour.rating)}
          {"☆".repeat(5 - tour.rating)}
        </span>
        <span style={{ color: "#888", fontSize: 13 }}>
          ({tour.reviews} Reviews)
        </span>
      </div>

      <p
        style={{
          color: "#555",
          lineHeight: 1.85,
          fontSize: 15,
          marginBottom: 0,
        }}
      >
        {tour.description}
      </p>

      {/* Itinerary */}
      <SectionHeading>Itinerary</SectionHeading>
      {tour.itinerary.map((item) => (
        <div key={item.day} style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                background: "#FFB156",
                color: "#fff",
                borderRadius: 6,
                padding: "2px 10px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Day {item.day}
            </span>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>
              {item.title}
            </span>
          </div>
          <p
            style={{
              color: "#666",
              lineHeight: 1.8,
              fontSize: 14,
              margin: 0,
              paddingLeft: 4,
            }}
          >
            {item.description}
          </p>
        </div>
      ))}

      {/* What's Included / Not Included */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          marginTop: 8,
        }}
      >
        <div>
          <SectionHeading>What's Included</SectionHeading>
          {tour.included.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 10,
                fontSize: 14,
                color: "#444",
              }}
            >
              <span style={{ color: "#4caf50", fontWeight: 700, marginTop: 1 }}>
                •
              </span>
              {item}
            </div>
          ))}
        </div>
        <div>
          <SectionHeading>What's Not Included</SectionHeading>
          {tour.notIncluded.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 10,
                fontSize: 14,
                color: "#444",
              }}
            >
              <span style={{ color: "#e74c3c", fontWeight: 700, marginTop: 1 }}>
                •
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Visa Guide */}
      <SectionHeading>Visa Guide</SectionHeading>
      <ul style={{ paddingLeft: 18, margin: 0 }}>
        <li
          style={{
            color: "#555",
            fontSize: 14,
            marginBottom: 8,
            lineHeight: 1.7,
          }}
        >
          Apply for Pakistani Tourist Visa Here{" "}
          <a href="#" style={{ color: "#FFB156", textDecoration: "underline" }}>
            Visa Website
          </a>
        </li>
        <li
          style={{
            color: "#555",
            fontSize: 14,
            marginBottom: 8,
            lineHeight: 1.7,
          }}
        >
          Download{" "}
          <a href="#" style={{ color: "#FFB156", textDecoration: "underline" }}>
            Visa Guide
          </a>
        </li>
        <li style={{ color: "#555", fontSize: 14, lineHeight: 1.7 }}>
          If you're having trouble with your visa application, reach out to us
          for help and guidance.
        </li>
      </ul>
    </div>
  );
}
