"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { StarSquareIcon, Brain02Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const drivers = [
  {
    icon: StarSquareIcon,
    title: "Real Experience",
    description:
      "Founded by VAs who've been in the trenches, we understand both sides of the partnership.",
  },
  {
    icon: Brain02Icon,
    title: "Smart Solutions",
    description:
      "We bridge the gap between talent and opportunity with thoughtful matching and support.",
  },
  {
    icon: UserGroupIcon,
    title: "Community First",
    description:
      "We're building a community where VAs are valued and businesses get the support they deserve.",
  },
];

export default function OurPromiseSection() {
  return (
    <>
      {/* Our Promise Banner */}
      <section className="w-full bg-[#AED6F1] py-16 px-6 text-center">
        <h2 className="text-5xl md:text-4xl font-extrabold text-white mb-3">
          Our Promise
        </h2>
        <p className="text-white/80 text-sm md:text-base font-semibold">
          We don't just match you with a VA—we match you with the right VA.
        </p>
      </section>

      {/* What Drives Us */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-black text-[#2B7BB9] text-center mb-14">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {drivers.map(({ icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-25 h-25 rounded-full bg-[#AED6F1] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <HugeiconsIcon icon={icon} size={50} color="#ffffff" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#2B7BB9] font-semibold text-lg">{title}</h3>
                <p className="text-[#7DB8E0] text-md leading-relaxed max-w-70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[#F0F4F8] py-16 px-6 text-center flex flex-col items-center gap-4">
        <h2 className="font-black text-[#2B7BB9]" style={{ fontSize: "3rem" }}>
  Ready to Experience the Difference?
</h2>
        <p className="font-bold text-[#2B7BB9]" style={{ fontSize: "1rem" }}>
  Join the PowerAssist community and discover what true partnership looks like.
</p>
        <Link
          href="/contact"
          className="border-2 mt-2 px-10 py-3 bg-[#AED6F1] hover:bg-[#BEE3F8] transition-colors duration-200 rounded-xl text-white font-bold text-sm shadow-sm"
        >
          Get Started Today
        </Link>
      </section>
    </>
  );
}