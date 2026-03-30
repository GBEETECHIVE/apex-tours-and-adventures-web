"use client";
import { useState } from "react";

const WHY_BOOK = [
  "No hidden extra charge",
  "Customer care available 24/7",
  "Hand-picked Tours & Activities",
  "Free Travel Insurance",
];

export default function BookingWidget({ price }) {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [bookingDone, setBookingDone] = useState(false);

  const handleBooking = () => {
    if (!date) return alert("Please select a date!");
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Price & Book Card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e8e8",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#1a1a2e",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
            Book Now
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ color: "#aaa", fontSize: 12 }}>from</span>
            <span style={{ color: "#FFB156", fontWeight: 800, fontSize: 22 }}>
              ${price}
            </span>
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: "20px" }}>
          {/* Date */}
          <div style={{ marginBottom: 14 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                color: "#888",
                marginBottom: 6,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Date
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e0e0e0",
                  borderRadius: 8,
                  fontSize: 14,
                  color: "#333",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "#fafafa",
                }}
              />
            </div>
          </div>

          {/* Number of People */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                color: "#888",
                marginBottom: 6,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Number of People
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #e0e0e0",
                borderRadius: 8,
                overflow: "hidden",
                background: "#fafafa",
              }}
            >
              <button
                onClick={() => setPeople(Math.max(1, people - 1))}
                style={{
                  width: 40,
                  height: 40,
                  border: "none",
                  background: "none",
                  fontSize: 20,
                  cursor: "pointer",
                  color: "#555",
                }}
              >
                −
              </button>
              <span
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                {people}
              </span>
              <button
                onClick={() => setPeople(people + 1)}
                style={{
                  width: 40,
                  height: 40,
                  border: "none",
                  background: "none",
                  fontSize: 20,
                  cursor: "pointer",
                  color: "#555",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            style={{
              width: "100%",
              padding: "14px",
              background: bookingDone ? "#4caf50" : "#FFB156",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 0.5,
              transition: "background 0.3s",
            }}
          >
            {bookingDone ? "✓ Booking Confirmed!" : "PROCEED BOOK NOW"}
          </button>

          {/* Total */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 12,
              fontSize: 13,
              color: "#888",
            }}
          >
            <span>Save to Wish List</span>
            <span>💬 225</span>
          </div>
        </div>
      </div>

      {/* Why Book With Us */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e8e8",
          borderRadius: 12,
          padding: "18px 20px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        }}
      >
        <h4
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 14,
            margin: "0 0 14px 0",
          }}
        >
          Why Book With Us?
        </h4>
        {WHY_BOOK.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
              fontSize: 13,
              color: "#555",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                background: "#fff3e0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      {/* Got a Question */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e8e8",
          borderRadius: 12,
          padding: "18px 20px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        }}
      >
        <h4
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#1a1a2e",
            margin: "0 0 6px 0",
          }}
        >
          Got a Question?
        </h4>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 12px 0" }}>
          Do not hesitate to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
            fontSize: 14,
            fontWeight: 600,
            color: "#1a1a2e",
          }}
        >
          📞 +92 347 4598098
        </div>
        <div style={{ fontSize: 13, color: "#FFB156" }}>
          ✉ info@apextours.com
        </div>
      </div>
    </div>
  );
}
