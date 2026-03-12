"use client";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-[#EBF5FB] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Mission Card */}
        <div
          className="border-2 border-[#AED6F1] bg-transparent p-10 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:-translate-y-2 cursor-default"
          style={{ borderRadius: "0 2rem 0 2rem" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B7BB9]">
            Our Mission
          </h2>
          <p className="text-[#5DADE2] text-sm md:text-base leading-relaxed max-w-md">
            At PowerAssist VA Agency, our mission is to empower virtual
            assistants and business owners by creating opportunities, delivering
            reliable support, and driving sustainable growth. We are committed
            to excellence, strong partnerships, and building a community where
            success is shared.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="border-2 border-[#AED6F1] bg-transparent p-10 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:-translate-y-2 cursor-default"
          style={{ borderRadius: "2rem 0 2rem 0" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B7BB9]">
            Our Vision
          </h2>
          <p className="text-[#5DADE2] text-sm md:text-base leading-relaxed max-w-md">
            To be a trusted global partner that empowers virtual assistants and
            business owners to grow, succeed, and thrive together through
            meaningful collaboration and unwavering support.
          </p>
        </div>

      </div>
    </section>
  );
}