import Image from "next/image";

const teamMembers = [
  { name: "John doe", role: "Founder and CEO" },
  { name: "John doe", role: "Resort Manager" },
  { name: "John doe", role: "Tour Manager" },
  { name: "John doe", role: "Tour Manager" },
  { name: "John doe", role: "Marketing expert" },
  { name: "John doe", role: "Contact Manager" },
  { name: "John doe", role: "Contact Manager" },
  { name: "John doe", role: "Resort Manager" },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#f5f5f5] pt-20">
      
      {/* Top Title Area */}
      <div className="bg-[#e9e9e9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16 lg:py-20">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#3f3f3f]">
            Meet our team
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14 gap-x-8 justify-items-center">
{teamMembers.map((member, index) => (
  <div key={index} className="text-center">
    
    {/* Dummy Circle */}
    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gray-300 mx-auto mb-5" />

    {/* Name */}
    <h3 className="text-[15px] md:text-[16px] font-semibold text-[#4a4a4a]">
      {member.name}
    </h3>

    {/* Role */}
    <p className="text-[13px] md:text-[14px] text-[#777777] mt-1">
      {member.role}
    </p>

  </div>
))}

        </div>
      </div>
    </section>
  );
}