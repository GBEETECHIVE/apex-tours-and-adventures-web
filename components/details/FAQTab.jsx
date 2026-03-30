"use client";
import { useState } from "react";

export default function FAQTab({ tour }) {
  const [openFaq, setOpenFaq] = useState(null);

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
        Frequently Asked Questions
      </h2>
      {tour.faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: 10,
            marginBottom: 12,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            style={{
              width: "100%",
              padding: "16px 20px",
              background: openFaq === i ? "#fff8ee" : "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              fontSize: 14,
              fontWeight: 600,
              color: "#1a1a2e",
              transition: "background 0.2s",
            }}
          >
            <span>{faq.q}</span>
            <span
              style={{
                color: "#FFB156",
                fontSize: 20,
                fontWeight: 300,
                flexShrink: 0,
                marginLeft: 12,
                transition: "transform 0.2s",
                transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {openFaq === i && (
            <div
              style={{
                padding: "0 20px 16px",
                fontSize: 14,
                color: "#666",
                lineHeight: 1.8,
                background: "#fff8ee",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
