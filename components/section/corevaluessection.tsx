"use client";

import { useEffect, useRef } from "react";
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
    <section ref={sectionRef} className="w-full bg-[#EBF5FB] py-16 sm:py-20 px-6 sm:px-20 lg:px-24 overflow-hidden">
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
        .value-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .value-card:hover {
          background: linear-gradient(135deg, #2B7BB9, #AED6F1);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
          border-color: transparent;
        }
        .value-card:hover h3,
        .value-card:hover p {
          color: white;
        }
        .value-card:hover .icon-wrap {
          background: rgba(255,255,255,0.2);
          transform: scale(1.15) rotate(6deg);
        }
        .icon-wrap {
          transition: background 0.3s ease, transform 0.3s ease;
          border-radius: 10px;
          padding: 6px;
        }
        .cta-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-card:hover {
          background: linear-gradient(135deg, #75baff, #2B7BB9);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
        }
      `}</style>

      {/* Header */}
      <div
        className="reveal max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        style={{ animationDelay: "0ms" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B7BB9] mb-3 tracking-tight">
          Our Core Values
        </h2>
        {/* Was #5DADE2 — darkened to #1A6FA8, bumped to text-lg sm:text-xl */}
        <p style={{ color: "#1A6FA8" }} className="text-lg sm:text-xl font-semibold">
          The 5 pillars that guide everything we do
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridAutoRows: "1fr" }}>
        {values.map(({ title, description }, i) => (
          <div
            key={title}
            className="reveal value-card bg-white rounded-2xl p-7 shadow-sm border border-[#D6EAF8] flex flex-col gap-4 cursor-default h-full"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="icon-wrap">
                <HugeiconsIcon
                  icon={CheckmarkSquare02Icon}
                  size={24}
                  color="#D4B85A"
                  strokeWidth={1.5}
                />
              </div>
              {/* Bumped from text-base to text-lg */}
              <h3 className="text-[#2B7BB9] font-semibold text-lg transition-colors duration-300">
                {title}
              </h3>
            </div>
            {/* Was #7DB8E0 — darkened to #1A5F8F, bumped from text-sm to text-base */}
            <p style={{ color: "#1A5F8F" }} className="text-base leading-relaxed transition-colors duration-300 flex-1">
              {description}
            </p>
          </div>
        ))}

        {/* CTA Card */}
        <div
          className="reveal cta-card bg-[#AED6F1] rounded-2xl p-7 flex flex-col items-center justify-center text-center gap-3 shadow-sm border border-[#AED6F1] cursor-default h-full"
          style={{ animationDelay: `${values.length * 120}ms` }}
        >
          <h3 className="text-white font-bold text-2xl tracking-tight">
            The PowerAssist Way
          </h3>
          <p className="text-white/90 text-base font-medium">
            Built on trust and shared success
          </p>
        </div>
      </div>
    </section>
  );
}