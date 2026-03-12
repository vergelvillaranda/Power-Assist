"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { StarSquareIcon, Brain02Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const drivers = [
  {
    icon: StarSquareIcon,
    title: "Real Experience",
    description: "Founded by VAs who've been in the trenches, we understand both sides of the partnership.",
  },
  {
    icon: Brain02Icon,
    title: "Smart Solutions",
    description: "We bridge the gap between talent and opportunity with thoughtful matching and support.",
  },
  {
    icon: UserGroupIcon,
    title: "Community First",
    description: "We're building a community where VAs are valued and businesses get the support they deserve.",
  },
];

export default function OurPromiseSection() {
  return (
    <>
      {/* Our Promise Banner */}
      <section className="w-full bg-[#AED6F1] py-10 sm:py-12 px-5 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Our Promise
        </h2>
        <p className="text-white/80 text-sm font-semibold">
          We don't just match you with a VA—we match you with the right VA.
        </p>
      </section>

      {/* What Drives Us */}
      <section className="w-full bg-white py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2B7BB9] text-center mb-8 sm:mb-10">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {drivers.map(({ icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#AED6F1] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <HugeiconsIcon icon={icon} size={32} color="#ffffff" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#2B7BB9] font-semibold text-sm sm:text-base">{title}</h3>
                <p className="text-[#7DB8E0] text-xs sm:text-sm leading-relaxed max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[#F0F4F8] py-10 sm:py-12 px-5 sm:px-8 text-center flex flex-col items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-black text-[#2B7BB9]">
          Ready to Experience the Difference?
        </h2>
        <p className="font-semibold text-[#2B7BB9] text-sm">
          Join the PowerAssist community and discover what true partnership looks like.
        </p>
        <Link
          href="/contact"
          className="border-2 mt-1 px-6 py-2.5 bg-[#AED6F1] hover:bg-[#BEE3F8] transition-colors duration-200 rounded-lg text-white font-semibold text-sm shadow-sm"
        >
          Get Started Today
        </Link>
      </section>
    </>
  );
}