"use client";

import {
  CheckBadgeIcon,
  LifebuoyIcon,
  Cog6ToothIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CheckBadgeIcon,
    title: "Skilled and Trained VAs",
    description:
      "Every virtual assistant is carefully vetted and trained to deliver excellence.",
  },
  {
    icon: LifebuoyIcon,
    title: "Reliable Support",
    description:
      "Consistent, dependable assistance you can count on every single day.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Tailored Solutions",
    description:
      "Customized support designed to fit your unique business needs.",
  },
  {
    icon: HandThumbUpIcon,
    title: "Partnership-Driven",
    description:
      "Built on trust and shared success, not just transactions.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B7BB9] mb-4 tracking-tight">
          Why Choose PowerAssist?
        </h2>
        <p className="text-[#7DB8E0] text-base md:text-lg font-normal leading-relaxed">
          We provide more than just virtual assistants — we deliver partnership and reliability.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-400 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon Circle */}
            <div className="w-24 h-24 rounded-full bg-[#AED6F1] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#AED6F1]/50">
              <Icon className="h-10 w-10 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-[#2B7BB9] font-semibold text-lg mb-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[#7DB8E0] text-sm leading-relaxed max-w-60">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}