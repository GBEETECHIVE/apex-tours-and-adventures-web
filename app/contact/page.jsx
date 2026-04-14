"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactusForm";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Get in touch with us to plan your next adventure. We're here to answer your questions and help you create unforgettable experiences"
        backgroundImage="/assets/contact.png"
      />
      <Container className="mt-30">
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
