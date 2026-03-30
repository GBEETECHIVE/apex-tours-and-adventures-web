"use client";

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
  if (!faq.a) return null;

  if (faq.format === "numbered") {
    const items = faq.a
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <ol style={{ margin: 0, paddingLeft: 20 }}>
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
        <ul style={{ margin: 0, paddingLeft: 20 }}>
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

export default function DetailTab({ tour }) {
  return (
    <div style={{ fontFamily: "inherit", color: "#333", lineHeight: 1.8 }}>
      {/* DETAIL */}
      <SectionHeading>Detail</SectionHeading>
      <p style={{ fontSize: 14, color: "#444", margin: "0 0 8px 0" }}>
        Two Days {tour.city} Sightseeing Tour
      </p>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85, margin: 0 }}>
        {tour.description}
      </p>

      {/* ITINERARY */}
      <SectionHeading>Itinerary</SectionHeading>
      {tour.itinerary.map((item) => {
        const sentences = item.description
          .split(/(?<=\.)\s+/)
          .map((s) => s.trim())
          .filter(Boolean);
        const noBullet = sentences.slice(0, 2);
        const withBullet = sentences.slice(2);

        return (
          <div key={item.day} style={{ marginBottom: 20 }}>
            <p
              style={{ fontWeight: 700, fontSize: 14, margin: "0 0 6px 18px" }}
            >
              Day {item.day}:
            </p>
            {noBullet.map((s, i) => (
              <p
                key={i}
                style={{
                  fontSize: 14,
                  color: "#555",
                  margin: "0 0 4px 18px",
                  lineHeight: 1.8,
                }}
              >
                {s}
              </p>
            ))}
            {withBullet.length > 0 && (
              <ul style={{ margin: "6px 0 0 0", paddingLeft: 36 }}>
                {withBullet.map((s, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 14,
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: 4,
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {/* WHAT'S INCLUDED */}
      <SectionHeading>What's Included</SectionHeading>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
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
      </ul>

      {/* WHAT'S NOT INCLUDED */}
      <SectionHeading>What's Not Included</SectionHeading>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
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
      </ul>

      {/* VISA GUIDE */}
      <SectionHeading>Visa Guide</SectionHeading>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
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
      </ul>

      {/* FAQ */}
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
  );
}
