export default function ItineraryTab({ tour }) {
  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1a1a2e",
          marginBottom: 24,
        }}
      >
        Tour Itinerary
      </h2>
      {tour.itinerary.map((item, i) => (
        <div
          key={item.day}
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 32,
            position: "relative",
          }}
        >
          {/* Timeline line */}
          {i < tour.itinerary.length - 1 && (
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 40,
                width: 2,
                height: "calc(100% + 8px)",
                background: "#ffe0b0",
              }}
            />
          )}

          {/* Day circle */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#FFB156",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 14,
              flexShrink: 0,
              zIndex: 1,
            }}
          >
            {item.day}
          </div>

          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: 10,
                marginTop: 8,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: "#666",
                lineHeight: 1.85,
                fontSize: 14,
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
