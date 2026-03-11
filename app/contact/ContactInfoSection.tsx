"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, CallIcon, Location01Icon } from "@hugeicons/core-free-icons";

const contacts = [
  {
    icon: Mail01Icon,
    title: "Email Us",
    value: "powerassist@gmail.com",
    href: "mailto:powerassist@gmail.com",
  },
  {
    icon: CallIcon,
    title: "Call Us",
    value: "0912-345-6789",
    href: "tel:09123456789",
  },
  {
    icon: Location01Icon,
    title: "Our Location",
    value: "Lag-on, Daet, Camarines Norte",
    href: "#",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B7BB9] mb-2">
            Other Ways to Reach Us
          </h2>
          <p className="text-[#7DB8E0] text-sm md:text-base">
            Have questions? We're here to help
          </p>
        </div>

        {/* Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {contacts.map(({ icon, title, value, href }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-20 h-20 rounded-full bg-[#AED6F1] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <HugeiconsIcon icon={icon} size={32} color="#ffffff" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#2B7BB9] font-bold text-base">{title}</h3>
              <a
                href={href}
                className="text-[#7DB8E0] text-sm hover:text-[#2B7BB9] transition-colors duration-150"
              >
                {value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}