"use client";

import { useEffect, useRef } from "react";

export default function MissionVisionSection() {
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
    <section ref={sectionRef} className="w-full bg-[#EBF5FB] py-20 px-6 sm:px-20 lg:px-24 overflow-hidden">
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
        .mv-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .mv-card:hover {
          background: linear-gradient(135deg, #2B7BB9, #AED6F1);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
          border-color: transparent;
        }
        .mv-card:hover h2,
        .mv-card:hover p {
          color: white;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Mission Card */}
        <div
          className="reveal mv-card border-2 border-[#AED6F1] bg-transparent p-7 flex flex-col items-center text-center gap-3 cursor-default"
          style={{ borderRadius: "0 2rem 0 2rem", animationDelay: "0ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B7BB9] transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-[#5DADE2] text-sm md:text-base leading-relaxed transition-colors duration-300">
            At PowerAssist VA Agency, our mission is to empower virtual
            assistants and business owners by creating opportunities, delivering
            reliable support, and driving sustainable growth. We are committed
            to excellence, strong partnerships, and building a community where
            success is shared.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="reveal mv-card border-2 border-[#AED6F1] bg-transparent p-7 flex flex-col items-center text-center gap-3 cursor-default"
          style={{ borderRadius: "2rem 0 2rem 0", animationDelay: "150ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B7BB9] transition-colors duration-300">
            Our Vision
          </h2>
          <p className="text-[#5DADE2] text-sm md:text-base leading-relaxed transition-colors duration-300">
            To be a trusted global partner that empowers virtual assistants and
            business owners to grow, succeed, and thrive together through
            meaningful collaboration and unwavering support.
          </p>
        </div>

      </div>
    </section>
  );
}