"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkSquare02Icon } from "@hugeicons/core-free-icons";

const values = [
  {
    title: "Empowerment First",
    description:
      "We believe in uplifting both virtual assistants and business owners—giving them the tools, confidence, and support to succeed.",
  },
  {
    title: "Excellence in Execution",
    description:
      "We deliver high-quality, reliable work that businesses can trust—every task, every time.",
  },
  {
    title: "Partnership Over Transactions",
    description:
      "We don't just provide services—we build long-term relationships rooted in trust, communication, and shared success.",
  },
  {
    title: "Integrity & Accountability",
    description:
      "We show up, take ownership, and do what we say we will—because trust is everything.",
  },
  {
    title: "Growth Mindset",
    description:
      "We continuously learn, adapt, and improve—so our VAs and clients can grow and stay ahead.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="w-full bg-[#EBF5FB] py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B7BB9] mb-3 tracking-tight">
          Our Core Values
        </h2>
        <p className="text-[#5DADE2] text-base sm:text-lg font-semibold">
          The 5 pillars that guide everything we do
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map(({ title, description }) => (
          <div
            key={title}
            className="group bg-white hover:bg-[#AED6F1] rounded-2xl p-6 shadow-sm border border-white/80 hover:border-[#AED6F1] flex flex-col gap-3 cursor-default transition-colors duration-300"
          >
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquare02Icon}
                size={22}
                color="#D4B85A"
                strokeWidth={1.5}
              />
              <h3 className="text-[#2B7BB9] group-hover:text-white font-semibold text-base transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-[#7DB8E0] group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>
        ))}

        {/* CTA Card — unchanged */}
        <div className="bg-[#AED6F1] hover:bg-[#75baff] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 shadow-sm cursor-default transition-colors duration-300">
          <h3 className="text-white font-bold text-xl tracking-tight">
            The PowerAssist Way
          </h3>
          <p className="text-white/80 text-sm font-medium">
            Built on trust and shared success
          </p>
        </div>
      </div>
    </section>
  );
}