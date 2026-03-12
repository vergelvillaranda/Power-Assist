"use client";

import { useEffect, useRef } from "react";
import { Users, Lightbulb, Handshake } from "lucide-react";

const storyCards = [
  {
    icon: Users,
    title: "Born from Experience",
    text: "Built by three virtual assistants who experienced the realities of the industry firsthand — on both sides of the table.",
  },
  {
    icon: Lightbulb,
    title: "We Saw the Gap",
    text: "Business owners struggling to find reliable support. VAs struggling to find opportunities where they're truly valued.",
  },
  {
    icon: Handshake,
    title: "We Built the Bridge",
    text: "PowerAssist was created to connect skilled VAs with businesses that need them — and to make sure both sides win.",
  },
];

export default function AboutHeroSection() {
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
        .story-card {
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .story-card:hover {
          background: linear-gradient(135deg, #2B7BB9, #AED6F1);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 123, 185, 0.25);
        }
        .story-card:hover h3,
        .story-card:hover p {
          color: white;
        }
        .story-card:hover .card-icon {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .card-icon {
          transition: background 0.3s ease, color 0.3s ease;
        }
      `}</style>

      {/* Heading */}
      <div
        className="reveal text-center mb-12"
        style={{ animationDelay: "0ms" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
          <span style={{ color: "#1A6FA8" }}>About </span>
          <span className="text-[#2B7BB9]">PowerAssist</span>
        </h1>
        <p style={{ color: "#1A6FA8" }} className="text-sm sm:text-base font-semibold italic">
          Built by VAs, for VAs and business owners who believe in shared success.
        </p>
      </div>

      {/* Story Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {storyCards.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="reveal story-card bg-[#EBF5FB] rounded-2xl p-7 flex flex-col gap-4 cursor-default border border-[#D6EAF8]"
            style={{ animationDelay: `${(i + 1) * 120}ms` }}
          >
            <div className="card-icon w-12 h-12 rounded-xl bg-[#AED6F1]/40 flex items-center justify-center">
              <Icon size={24} className="text-[#2B7BB9]" />
            </div>
            <h3 className="text-[#2B7BB9] font-bold text-base transition-colors duration-300">
              {title}
            </h3>
            <p style={{ color: "#1A5F8F" }} className="text-sm leading-relaxed transition-colors duration-300">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Body Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">

        <div
          className="reveal flex flex-col gap-4 text-sm sm:text-base leading-relaxed"
          style={{ animationDelay: "480ms", color: "#1A5F8F" }}
        >
          <p>
            PowerAssist VA Agency was built by{" "}
            <strong className="text-[#2B7BB9]">three virtual assistants</strong>{" "}
            who experienced the realities of the industry firsthand.
          </p>
          <p>
            Working with different clients, they saw both sides — the challenges
            business owners face when trying to find reliable support, and the
            struggles virtual assistants go through in finding the right
            opportunities where they are valued and empowered.
          </p>
          <p>They realized something was missing.</p>
          <p>So instead of staying on the sidelines, they decided to create a solution.</p>
        </div>

        {/* Blockquote Panel */}
        <div
          className="reveal bg-gradient-to-br from-[#2B7BB9] to-[#AED6F1] rounded-2xl p-8 flex flex-col gap-3 text-white shadow-lg"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">
            Our Shared Mission
          </p>
          <p className="text-white text-lg sm:text-xl font-bold leading-snug">
            "To help both clients and virtual assistants succeed together."
          </p>
          <div className="h-px bg-white/30 my-1" />
          <p className="text-white/80 text-sm leading-relaxed">
            Because for us, success isn't one-sided. When our VAs win, our
            clients win. And when our clients grow, we all grow.
          </p>
        </div>

      </div>

      {/* Closing */}
      <div
        className="reveal text-center py-8 px-6 rounded-2xl bg-[#EBF5FB] border border-[#D6EAF8]"
        style={{ animationDelay: "720ms" }}
      >
        <p className="text-gray-700 font-bold text-base sm:text-lg mb-1">
          That's the power of the right support system.
        </p>
        <p className="text-[#2B7BB9] font-extrabold text-lg sm:text-xl">
          That's the PowerAssist way.
        </p>
      </div>

    </section>
  );
}