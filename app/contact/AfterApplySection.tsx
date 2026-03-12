"use client";

import { useEffect, useRef } from "react";

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
            el.offsetHeight;
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
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-20 px-6 sm:px-20 lg:px-24 overflow-hidden">
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
        .step-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .step-card:hover {
          background: linear-gradient(135deg, #2B7BB9, #AED6F1);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
        }
        .step-card:hover h3,
        .step-card:hover p {
          color: white;
        }
        .step-card:hover .step-number {
          background: rgba(255,255,255,0.2);
          transform: scale(1.15) rotate(6deg);
        }
        .step-number {
          transition: background 0.3s ease, transform 0.3s ease;
        }
      `}</style>

      <div
        className="reveal text-center mb-10"
        style={{ animationDelay: "0ms" }}
      >
        <h2 className="text-2xl sm:text-3xl font-black text-[#2B7BB9]">
          What happens after you apply?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map(({ number, title, description }, i) => (
          <div
            key={number}
            className="reveal step-card bg-[#EBF5FB] rounded-2xl p-7 flex flex-col items-center text-center gap-4 cursor-default border border-[#D6EAF8]"
            style={{ animationDelay: `${(i + 1) * 120}ms` }}
          >
            <div className="step-number w-10 h-10 rounded-full bg-[#AED6F1] flex items-center justify-center text-white font-extrabold text-base">
              {number}
            </div>
            <h3 className="text-[#2B7BB9] font-bold text-base transition-colors duration-300">
              {title}
            </h3>
            <p className="text-[#7DB8E0] text-sm leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}