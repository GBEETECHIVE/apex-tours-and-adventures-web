"use client";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const contactDetails = [
  {
    Icon: Phone,
    label: "REACH US BY PHONE",
    value: "+92 347 4598096",
    href: "tel:+923474598096",
  },
  {
    Icon: Mail,
    label: "EMAIL",
    value: "info@Apex Tours and Adventure.com",
    href: "mailto:info@apextours.com",
  },
  {
    Icon: MapPin,
    label: "ADDRESS",
    value:
      "Office # 180, Street 11 Rifle Range Road, New Iqbal Park, Lahore Cantt",
    href: null,
  },
  {
    Icon: MessageCircle,
    label: "WHATSAPP",
    value: "+92 345 4354348",
    href: "https://wa.me/923454354348",
  },
];
const ContactusForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the terms and policy.");
      return;
    }
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start my-2">
      <div>
        <h2 className="text-[18px] font-bold uppercase tracking-[2px] text-[#444444] mb-8 leading-relaxed">
          We're here to help! If you have any questions or concerns, please
          don't hesitate to contact us
        </h2>

        <ul className="space-y-7 mt-20">
          {contactDetails.map(({ Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              {/* Orange circle icon */}
              <div className="shrink-0 w-11 h-11 rounded-full bg-[#FF9400] flex items-center justify-center">
                <Icon size={18} className="text-[#000000]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#444444] mb-1">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-[15px] text-[#133A67] hover:text-[#0b2b4f] transition-colors "
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[15px] text-[#133A67] max-w-[285px] w-full">
                    {value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-[18px] font-bold uppercase tracking-widest text-[#444444] mb-6">
          Use the form below
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4  mt-20">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-gray-700 placeholder-[#133A67] focus:outline-none focus:border-[#133A67]  transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-gray-700 placeholder-[#133A67]  focus:outline-none focus:border-[#133A67]  transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-gray-700 placeholder-[#133A67]  focus:outline-none focus:border-[#133A67]  transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-gray-700 placeholder-[#133A67]  focus:outline-none focus:border-[#133A67]  transition-colors resize-none"
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-0.5 accent-[#133A67] w-4 h-4 cursor-pointer"
            />
            <span className="text-sm text-[#133A67]">
              by clicking here you agree to{" "}
              <a
                href="#"
                className="text-[#133A67] underline hover:text-[#133A67]"
              >
                our terms and policy
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            className="my-2 max-w-[150px] w-full cursor-pointer bg-[#133A67] hover:bg-[#0c2a4c] text-white text-sm font-semibold px-8 py-3 rounded transition-colors"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactusForm;
