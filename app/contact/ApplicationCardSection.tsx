"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Building04Icon, CustomerSupportIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const cards = [
  {
    icon: Building04Icon,
    title: "For Business Owners",
    description:
      "Looking to hire a skilled virtual assistant? Our application form will help us understand your business needs so we can match you with the perfect VA.",
    bullets: [
      "Tell us about your business and needs",
      "Select the services you require",
      "We'll match you with qualified VAs",
      "Get a response within 24 hours",
    ],
    cta: "Hire a VA",
    href: "#hire-form",
  },
  {
    icon: CustomerSupportIcon,
    title: "For Virtual Assistants",
    description:
      "Ready to join our team of empowered VAs? Fill out the application to start your journey with PowerAssist and access better opportunities.",
    bullets: [
      "Share your skills and experience",
      "Join a supportive VA community",
      "Access training and development",
      "Connect with quality clients",
    ],
    cta: "Join as a VA",
    href: "#va-form",
  },
];

export default function ApplicationCardsSection() {
  return (
    <section className="w-full bg-[#F0F4F8] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(({ icon, title, description, bullets, cta, href }) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#AED6F1] flex items-center justify-center">
              <HugeiconsIcon icon={icon} size={30} color="#ffffff" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#2B7BB9] font-extrabold text-xl">{title}</h3>
              <p className="text-[#7DB8E0] text-sm leading-relaxed">{description}</p>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#7DB8E0] text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2c5876] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-4">
              <Link
                href={href}
                className="inline-block px-8 py-2.5 bg-[#AED6F1] hover:bg-[#BEE3F8] transition-colors duration-200 rounded-xl text-white font-bold text-sm"
              >
                {cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}