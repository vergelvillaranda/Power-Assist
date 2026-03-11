"use client";

const steps = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out the quick form with your information and requirements",
  },
  {
    number: 2,
    title: "We Review & Match",
    description: "Our team reviews your needs and finds the perfect match",
  },
  {
    number: 3,
    title: "Get Connected",
    description: "We'll reach out within 24 hours to get you started",
  },
];

export default function AfterApplySection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#2B7BB9] text-center mb-10">
          What happens after you apply?
        </h2>

        <div className="border border-gray-100 rounded-2xl shadow-sm px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AED6F1] flex items-center justify-center text-white font-extrabold text-base">
                {number}
              </div>
              <h3 className="text-[#2B7BB9] font-semibold text-sm md:text-base">{title}</h3>
              <p className="text-[#7DB8E0] text-xs md:text-sm leading-relaxed max-w-[180px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}