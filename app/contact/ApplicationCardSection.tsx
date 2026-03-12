"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Building04Icon, CustomerSupportIcon } from "@hugeicons/core-free-icons";

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
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeRzcrdIMjED4YVgO3YR94qIU0K_d0HYByl87mS_6c8Jy4kdg/viewform?usp=sharing&ouid=117770786715472095330",
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
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeRzcrdIMjED4YVgO3YR94qIU0K_d0HYByl87mS_6c8Jy4kdg/viewform?usp=sharing&ouid=117770786715472095330",
  },
];

export default function ApplicationCardsSection() {
  return (
    <section className="w-full bg-[#F0F4F8] py-10 sm:py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map(({ icon, title, description, bullets, cta, href }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-full bg-[#AED6F1] flex items-center justify-center">
              <HugeiconsIcon icon={icon} size={22} color="#ffffff" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[#2B7BB9] font-extrabold text-base sm:text-lg">{title}</h3>
              <p className="text-[#7DB8E0] text-xs sm:text-sm leading-relaxed">{description}</p>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-1.5">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#7DB8E0] text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c5876] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-2">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-[#AED6F1] hover:bg-[#BEE3F8] transition-all duration-200 rounded-lg text-white font-semibold text-xs sm:text-sm hover:-translate-y-0.5 hover:shadow-md"
              >
                {cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}