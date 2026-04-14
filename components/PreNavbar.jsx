import { Phone, Mail } from "lucide-react";

const PreNavbar = () => {
  return (
    <div className="w-full border-b border-white/80 h-18 text-white text-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-10 px-6 md:px-16 py-6">
        
        <div className="flex items-center text-base font-normal gap-2">
          <Phone size={16} />
          <span>03554963760</span>
        </div>

        <div className="flex items-center text-base font-normal gap-2">
          <Mail size={16} />
          <span>info@apexwonders.com</span>
        </div>

      </div>
    </div>
  );
};

export default PreNavbar;