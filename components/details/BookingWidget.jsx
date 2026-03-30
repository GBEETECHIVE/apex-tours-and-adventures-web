"use client";
import Image from "next/image";
import { useState } from "react";

const WHY_BOOK = [
  { icon: "dollar.png", label: "No-hassle best price guarantee" },
  { icon: "music.png", label: "Customer care available 24/7" },
  { icon: "star1.png", label: "Hand-picked Tours & Activities" },
  { icon: "round.png", label: "Free Travel Insurance" },
];

export default function BookingWidget({ price = 350 }) {
  const [date, setDate] = useState("2026-01-13");
  const [people, setPeople] = useState("");
  const [bookingDone, setBookingDone] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleBooking = () => {
    if (!date) return alert("Please select a date!");
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 3000);
  };

  const formatDate = (val) => {
    if (!val) return "";
    const d = new Date(val);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 320,
        margin: "0 auto",
      }}
    >
      {/* ── MAIN CARD ── */}
      <div
        style={{
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
          marginBottom: 10,
        }}
        className="rounded-[10]"
      >
        {/* Header */}
        <div
          style={{
            background: "#1a2e5a",
          }}
        >
          <div
            style={{
              background: "#2C487AE5",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 10,
              padding: "10px 16px",
            }}
          >
            Book Now
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
            }}
          >
            {/* Tag icon */}
            <Image
              src="/assets/icons/book1.png"
              alt="Start icon"
              width={30}
              height={30}
              className="max-w-[20px] w-full h-auto"
            />
            <span style={{ color: "#c8d0e0", fontSize: 13 }}>From</span>
            <span
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              ${price}
            </span>
            {/* Info icon */}
            <Image
              src="/assets/icons/book.png"
              alt="Start icon"
              width={30}
              height={30}
              className="max-w-[20px] w-full h-auto"
            />
          </div>
        </div>

        {/* White body */}
        <div style={{ background: "#fff" }}>
          {/* Date Row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "16px 16px 0",
              gap: 12,
            }}
          >
            {/* Calendar icon */}
            <div style={{ paddingTop: 2 }}>
              <Image
                src="/assets/icons/calendar.png"
                alt="Start icon"
                width={30}
                height={30}
                className="max-w-[20px] w-full h-auto"
              />
            </div>
            <div style={{ flex: 1 }}>
              {/* Custom date select look */}
              <div
                style={{
                  border: "1px solid #dde3ee",
                  borderRadius: 6,
                  padding: "9px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: 13,
                    color: "#1a2e5a",
                    fontWeight: 500,
                    background: "transparent",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#999",
                  marginTop: 5,
                  paddingLeft: 2,
                }}
              >
                Available: 10 seats
              </div>
            </div>
          </div>

          {/* People Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: 12,
              marginTop: 16,
            }}
          >
            <Image
              src="/assets/icons/people.png"
              alt="Start icon"
              width={30}
              height={30}
              className="max-w-[20px] w-full h-auto"
            />

            <div style={{ flex: 1 }}>
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #dde3ee",
                  borderRadius: 6,
                  padding: "9px 12px",
                  fontSize: 13,
                  color: people ? "#1a2e5a" : "#aaa",
                  fontWeight: 500,
                  background: "#fff",
                  outline: "none",
                  cursor: "pointer",
                  appearance: "auto",
                }}
              >
                <option value="" disabled>
                  Number Of People
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Person" : "People"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Button Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 16px 16px",
              gap: 12,
              marginTop: 16,
            }}
          >
            <Image
              src="/assets/icons/light.png"
              alt="Start icon"
              width={20}
              height={20}
              className="max-w-[15px] w-full h-auto"
            />
            <button
              onClick={handleBooking}
              style={{
                flex: 1,
                padding: "13px 0",
                background: bookingDone ? "#2e7d32" : "#1a2e5a",
                color: "#fff",
                border: "none",
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.2,
                cursor: "pointer",
                transition: "background 0.3s",
                textTransform: "uppercase",
              }}
            >
              {bookingDone ? "✓ Booking Confirmed!" : "PROCEED BOOKING"}
            </button>
          </div>

          {/* Wishlist & Views */}
          <div className="flex justify-center px-[16px] pb-[20px] gap-2 items-center">
            <button
              onClick={() => setWishlisted(!wishlisted)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: wishlisted ? "#e74c3c" : "#666",
                fontWeight: 500,
                padding: 0,
              }}
            >
              <Image
                src="/assets/icons/heart.png"
                alt="Start icon"
                width={20}
                height={20}
                className="max-w-[15px] w-full h-auto"
              />
              Save To Wish List
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "#888",
              }}
            >
              <Image
                src="/assets/icons/eye.png"
                alt="Start icon"
                width={20}
                height={20}
                className="max-w-[15px] w-full h-auto"
              />
              326
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY BOOK WITH US ── */}
      <div
        style={{
          background: "#f4f6fb",
          borderRadius: 10,
          padding: "16px 18px",
          marginBottom: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h4
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#1a2e5a",
            margin: "0 0 12px 0",
            letterSpacing: 0.2,
          }}
        >
          Why Book With Us?
        </h4>
        {WHY_BOOK.map((item, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
              }}
            >
              <Image
                src={`/assets/icons/${item.icon}`}
                alt="Start icon"
                width={20}
                height={20}
                className="max-w-[15px] w-full h-auto "
              />

              <span style={{ fontSize: 13, color: "#444", fontWeight: 400 }}>
                {item.label}
              </span>
            </div>
            {i < WHY_BOOK.length - 1 && (
              <div style={{ height: 1, background: "#e2e7f0" }} />
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/form.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div
          style={{
            position: "relative",
            padding: "20px 18px 22px",
          }}
        >
          <h4
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 6px 0",
            }}
          >
            Get a Question?
          </h4>
          <p
            style={{
              fontSize: 12,
              color: "#c8d0e0",
              margin: "0 0 16px 0",
              lineHeight: 1.6,
            }}
          >
            Do not hesitate to give us a call. We are an expert team and we are
            happy to talk to you.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <div>
              <Image
                src={`/assets/icons/call.png`}
                alt="Start icon"
                width={20}
                height={20}
                className="max-w-[15px] w-full h-auto "
              />
            </div>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
              +92 347 4598096
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div>
              <Image
                src={`/assets/icons/mail.png`}
                alt="Start icon"
                width={20}
                height={20}
                className="max-w-[15px] w-full h-auto "
              />
            </div>
            <span
              className="text-white underline"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              info@apexwonders.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
