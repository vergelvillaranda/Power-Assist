"use client";

import { useEffect, useRef } from "react";
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
    description: "Every virtual assistant is carefully vetted and trained to deliver excellence.",
  },
  {
    icon: LifebuoyIcon,
    title: "Reliable Support",
    description: "Consistent, dependable assistance you can count on every single day.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Tailored Solutions",
    description: "Customized support designed to fit your unique business needs.",
  },
  {
    icon: HandThumbUpIcon,
    title: "Partnership-Driven",
    description: "Built on trust and shared success, not just transactions.",
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll(".reveal");
    if (!targets) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.animation = "none";
            el.offsetHeight; // force reflow to restart animation
            el.style.animation = "";
            el.style.animationPlayState = "running";
          } else {
            el.style.animationPlayState = "paused";
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 pb-42 px-6 sm:px-20 lg:px-24 overflow-hidden">
      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          opacity: 0;
          animation: revealUp 0.7s ease forwards;
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div
        className="reveal max-w-3xl mx-auto text-center mb-16"
        style={{ animationDelay: "0ms" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B7BB9] mb-4 tracking-tight">
          Why Choose PowerAssist?
        </h2>
        <p className="text-[#7DB8E0] text-base md:text-lg font-normal leading-relaxed">
          We provide more than just virtual assistants — we deliver partnership and reliability.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className="reveal flex flex-col items-center text-center group rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#AED6F1]/40 hover:bg-[#EBF5FB]"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="w-24 h-24 rounded-full bg-[#AED6F1] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2B7BB9] group-hover:shadow-lg group-hover:shadow-[#AED6F1]/50">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-[#2B7BB9] font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-[#1a5f8a]">
              {title}
            </h3>
            <p className="text-[#7DB8E0] text-sm leading-relaxed max-w-60 transition-colors duration-300 group-hover:text-[#5a9cbd]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}