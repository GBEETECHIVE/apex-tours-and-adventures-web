// import { useState } from "react";
// import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
// import Layout from "@/components/Layout";
// import HeroSection from "../components/HeroSection";

// const contactDetails = [
//   {
//     Icon: Phone,
//     label: "REACH US BY PHONE",
//     value: "+92 347 4598096",
//     href: "tel:+923474598096",
//   },
//   {
//     Icon: Mail,
//     label: "EMAIL",
//     value: "info@Apex Tours and Adventure.com",
//     href: "mailto:info@apextours.com",
//   },
//   {
//     Icon: MapPin,
//     label: "ADDRESS",
//     value: "Office # 180, Street 11 Rifle Range Road, New Iqbal Park, Lahore Cantt",
//     href: null,
//   },
//   {
//     Icon: MessageCircle,
//     label: "WHATSAPP",
//     value: "+92 345 4354348",
//     href: "https://wa.me/923454354348",
//   },
// ];

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     subject: "",
//     message: "",
//     agreed: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.agreed) {
//       alert("Please agree to the terms and policy.");
//       return;
//     }
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <Layout>
//       <HeroSection
//         title="Contact Us"
//         description="Get in touch with us to plan your next adventure. We're here to answer your questions and help you create unforgettable experiences"
//         backgroundImage="/images/contact/hero.jpg"
//       />

//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

//           {/* Left — Contact Info */}
//           <div>
//             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-8 leading-relaxed">
//               We're here to help! If you have any questions or concerns, please
//               don't hesitate to contact us
//             </h2>

//             <ul className="space-y-7">
//               {contactDetails.map(({ Icon, label, value, href }) => (
//                 <li key={label} className="flex items-start gap-4">
//                   {/* Orange circle icon */}
//                   <div className="shrink-0 w-11 h-11 rounded-full bg-orange-400 flex items-center justify-center">
//                     <Icon size={18} className="text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-1">
//                       {label}
//                     </p>
//                     {href ? (
//                       <a
//                         href={href}
//                         className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
//                         target={href.startsWith("http") ? "_blank" : undefined}
//                         rel="noopener noreferrer"
//                       >
//                         {value}
//                       </a>
//                     ) : (
//                       <p className="text-sm text-gray-600">{value}</p>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right — Contact Form */}
//           <div>
//             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-6">
//               Use the form below
//             </h2>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name*"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject*"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message*"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
//               />

//               {/* Checkbox */}
//               <label className="flex items-start gap-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="agreed"
//                   checked={formData.agreed}
//                   onChange={handleChange}
//                   className="mt-0.5 accent-orange-500 w-4 h-4 cursor-pointer"
//                 />
//                 <span className="text-sm text-gray-600">
//                   by clicking here you agree to{" "}
//                   <a href="#" className="text-blue-600 underline hover:text-blue-800">
//                     our terms and policy
//                   </a>
//                   .
//                 </span>
//               </label>

//               <button
//                 type="submit"
//                 className="w-fit bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-8 py-3 rounded transition-colors"
//               >
//                 Submit Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default ContactUs;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page