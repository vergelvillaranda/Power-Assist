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
    <section className="w-full bg-white py-10 sm:py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-[#2B7BB9] text-center mb-6 sm:mb-8">
          What happens after you apply?
        </h2>

        <div className="border border-gray-100 rounded-xl shadow-sm px-5 sm:px-8 py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center text-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#AED6F1] flex items-center justify-center text-white font-extrabold text-sm">
                {number}
              </div>
              <h3 className="text-[#2B7BB9] font-semibold text-xs sm:text-sm">{title}</h3>
              <p className="text-[#7DB8E0] text-xs leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}