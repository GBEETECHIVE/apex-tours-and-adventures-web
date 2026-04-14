export default function OurStorySection() {
  return (
    <section className="w-full bg-[#f5f5f5] pt-20">
      {/* Top Title Area */}
      <div className="bg-[#e9e9e9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-16 lg:py-20">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#3f3f3f] leading-tight">
            Our story
          </h2>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-14 lg:py-16">
        <div className="max-w-[1120px]">
          <h3 className="text-[15px] md:text-[16px] font-semibold text-[#4a4a4a] mb-8">
            The Journey Thus Far...
          </h3>

          <div className="space-y-8 text-[15px] md:text-[16px] leading-[2] text-[#666666] font-normal">
            <p>
              Inayat Ullah Baig began his remarkable journey in 1994 as a humble
              porter, assisting trekkers in the northern regions of Gilgit
              Baltistan. At that time, outdoor activities were barely recognized
              within Pakistan, though the influx of foreign adventurers was quite
              notable. Hailing from the breathtaking valley of Shimshal, Inayat—
              along with his brothers—recognized the growing need for proper
              equipment and support for tours, treks, and mountain expeditions. In
              the early years, he worked for various travel companies, learning the
              ropes of the industry.
            </p>

            <p>
              Coming from a family of renowned mountaineers, he was fortunate to
              learn from the very best. He attributes much of his early guidance to
              his mentors, the late Mr. Rajab Shah and Mr. Meherban Shah—both
              legendary climbers with successful ascents of multiple 8,000-meter
              peaks.
            </p>

            <p>
              Inayat’s first major expedition came in 1998, when he joined the
              Japanese Alpine Club. This proved to be the turning point.
              Opportunities grew rapidly, and demand for his expertise soon became
              overwhelming. To better serve travelers and adventurers, he
              eventually established his own travel and tour company, now based in
              Lahore, Pakistan.
              <br />
              From travel groups to corporate clients, people from all walks of
              life began seeking his services. With more than 20 years of
              experience, Inayat has built a team that is widely regarded as one
              of the best in Pakistan. Over the years, he has also expanded his
              inventory, enabling his company to independently manage even very
              large groups with complete logistical support.
            </p>

            <p>
              From Karachi to Khunjerab, his knowledge of local customs, cultures,
              and cuisines is unmatched. To date, he has served more than{" "}
              <span className="font-semibold text-[#4a4a4a]">12,000 travelers</span>
              —each journey adding to his legacy.
            </p>

            <p className="font-semibold text-[#4a4a4a]">
              And the journey continues...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}