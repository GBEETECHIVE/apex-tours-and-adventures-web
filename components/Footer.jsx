import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
const socialLinks = [
  { src: "/assets/icons/facebook.png", alt: "Facebook", href: "#" },
  { src: "/assets/icons/insta.png", alt: "Instagram", href: "#" },
  { src: "/assets/icons/linkedin.png", alt: "LinkedIn", href: "#" },
  { src: "/assets/icons/whatsapp.png", alt: "WhatsApp", href: "#" },
  { src: "/assets/icons/youtube.png", alt: "YouTube", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-[#202020] text-white pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-[18px] md:text-[16px] lg:text-[18px] uppercase tracking-widest text-white mb-5">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm text-[#E5E5E5]">
            <li className="flex items-center gap-2 md:gap-1 lg:gap-2 text-[18px]  md:text-[16px] lg:text-[18px]">
              <Phone size={14} className="shrink-0" />
              <a
                href="tel:03554963760"
                className="text-[#E5E5E5] hover:text-orange-400 transition-colors"
              >
                <span className="text-[#467BE7] mr-6 md:mr-1 inline md:hidden lg:inline">
                  Pakistan
                </span>
                03554963760
              </a>
            </li>
            <li className="flex items-center gap-2  md:gap-1 lg:gap-2 text-[18px] md:text-[16px] lg:text-[18px]">
              <Mail size={14} className="  shrink-0" />
              <a
                href="mailto:info@apexwonders.com"
                className="text-[#E5E5E5] hover:text-orange-400 transition-colors"
              >
                <span className="text-[#467BE7] mr-6 md:mr-1 inline md:hidden lg:inline">
                  Email
                </span>
                info@apexwonders.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[18px] md:text-[16px] lg:text-[18px] uppercase tracking-widest text-white mb-5">
            About Us
          </h4>
          <ul className="space-y-2 text-[18px] md:text-[16px] lg:text-[18px] text-[#E5E5E5]">
            {[
              "Our Story",
              "About Pakistan",
              "About Gilgit-Baltistan",
              "Volunteering in Pakistan",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-orange-400 transition-colors leading-[30.6px] mb-1  "
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[18px] md:text-[16px] lg:text-[18px] uppercase tracking-widest text-white mb-5">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-[#E5E5E5]">
            {["Privacy Policy", "Terms and Conditions", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors leading-[30.6px] mb-1 text-[18px] md:text-[16px] lg:text-[18px]"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="  uppercase tracking-widest text-white mb-5 font-semibold text-[18px] md:text-[16px] lg:text-[18px]">
            Follow Us
          </h4>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
