"use client";

import { useEffect, useRef } from "react";
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
  const promiseRef = useRef<HTMLElement>(null);
  const drivesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const allRefs = [promiseRef, drivesRef, ctaRef];
    const observers: IntersectionObserver[] = [];

    allRefs.forEach((ref) => {
      const targets = ref.current?.querySelectorAll(".reveal");
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
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
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
        .driver-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .driver-card:hover {
          background: linear-gradient(135deg, #2B7BB9, #AED6F1);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
        }
        .driver-card:hover h3,
        .driver-card:hover p {
          color: white;
        }
        .driver-card:hover .driver-icon {
          background: rgba(255,255,255,0.2);
          transform: scale(1.15) rotate(6deg);
        }
        .driver-icon {
          transition: background 0.3s ease, transform 0.3s ease;
        }
      `}</style>

      {/* Our Promise Banner */}
      <section ref={promiseRef} className="w-full bg-[#AED6F1] py-10 sm:py-12 px-6 sm:px-20 lg:px-24 text-center overflow-hidden">
        <div className="reveal" style={{ animationDelay: "0ms" }}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Our Promise
          </h2>
          <p className="text-white/80 text-sm font-semibold">
            We don't just match you with a VA — we match you with the right VA.
          </p>
        </div>
      </section>

      {/* What Drives Us */}
      <section ref={drivesRef} className="w-full bg-white py-16 sm:py-20 px-6 sm:px-20 lg:px-24 overflow-hidden">
        <div
          className="reveal text-center mb-10"
          style={{ animationDelay: "0ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#2B7BB9]">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {drivers.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className="reveal driver-card bg-[#EBF5FB] rounded-2xl p-7 flex flex-col items-center text-center gap-4 cursor-default border border-[#D6EAF8]"
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="driver-icon w-16 h-16 rounded-xl bg-[#AED6F1] flex items-center justify-center">
                <HugeiconsIcon icon={icon} size={30} color="#ffffff" strokeWidth={1.5} />
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

      
    </>
  );
}