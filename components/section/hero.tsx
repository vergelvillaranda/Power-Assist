"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const images1 = ["/va1.jpg", "/va2.jpg", "/va3.jpg"];
const images2 = ["/va2.jpg", "/va3.jpg", "/va1.jpg"];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-white overflow-hidden flex items-center">

      {/* Animated blobs */}
      <div className="absolute top-0 right-[10%] w-24 h-24 md:w-36 md:h-36 rounded-full opacity-40"
        style={{ background: "#b8e0ff", animation: "floatA 7s ease-in-out infinite" }} />
      <div className="absolute top-[10%] right-[2%] w-12 h-12 md:w-20 md:h-20 rounded-full opacity-30"
        style={{ background: "#d4f0c0", animation: "floatB 9s ease-in-out infinite" }} />
      <div className="absolute bottom-[12%] right-[18%] w-10 h-10 md:w-14 md:h-14 rounded-full opacity-50"
        style={{ background: "#ffb3b3", animation: "floatC 6s ease-in-out infinite" }} />
      <div className="absolute bottom-[5%] right-[5%] w-18 h-18 md:w-28 md:h-28 rounded-full opacity-25"
        style={{ background: "#9AD0FC", animation: "floatA 8s ease-in-out infinite reverse" }} />
      <div className="hidden md:block absolute top-[40%] right-[38%] w-10 h-10 rounded-full opacity-20"
        style={{ background: "#b8e0ff", animation: "floatB 10s ease-in-out infinite" }} />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 md:py-14">

        {/* LEFT — Text */}
        <div className="flex flex-col gap-4 -mt-15 pl-9" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            <span style={{ color: "#9AD0FC" }}>Empowered</span>{" "}
            <span className="text-[#1a3a5c]">Virtual</span>
            <br />
            <span className="text-[#1a3a5c]">Assistants.</span>{" "}
            <span style={{ color: "#75baff" }}>Stronger</span>
            <br />
            <span style={{ color: "#75baff" }}>Businesses.</span>
          </h1>

          <p
            className="text-[#9AD0FC] text-sm sm:text-base max-w-sm leading-relaxed"
            style={{ animation: "fadeSlideUp 0.8s 0.15s ease both" }}
          >
            Scale your business with reliable, highly-trained virtual
            assistants — so you can focus on what truly matters.
          </p>

          <div
            className="flex items-center gap-3 flex-wrap"
            style={{ animation: "fadeSlideUp 0.8s 0.3s ease both" }}
          >
            <Link href="/hire">
              <Button className="bg-[#75baff] hover:bg-[#4da3f5] text-white font-semibold px-5 py-2 h-auto rounded-md text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-1.5">
                Hire a VA <ArrowRight size={14} />
              </Button>
            </Link>
            <Link href="/join">
              <Button variant="outline" className="border-[#75baff] text-[#75baff] font-semibold px-5 py-2 h-auto rounded-md text-sm hover:bg-[#75baff] hover:text-white hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-1.5">
                <Users size={14} /> Join as a VA
              </Button>
            </Link>
          </div>

          <p
            className="text-[#9AD0FC] text-xs sm:text-sm max-w-sm leading-relaxed"
            style={{ animation: "fadeSlideUp 0.8s 0.45s ease both" }}
          >
            We match you with skilled, trusted virtual assistants so you
            can focus on growth — while we handle the rest.
          </p>
        </div>

        {/* RIGHT — Overlapping images */}
        <div className="hidden md:flex relative items-center justify-center w-full h-[380px] lg:h-[480px]">

          {/* Image 1 — Ken Burns */}
          <div
            className="absolute left-0 top-0 w-[55%] lg:w-[300px] h-[340px] lg:h-[410px] rounded-2xl overflow-hidden shadow-xl border border-white/60"
            style={{ animation: "floatImage 5s ease-in-out infinite" }}
          >
            <div className="absolute inset-0">
              <Image src={images1[0]} alt="VA base" fill sizes="340px" className="object-cover" priority />
            </div>
            {images1.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0"
                style={{
                  animation: `kenBurns${(i % 3) + 1} 12s ease-in-out infinite`,
                  animationDelay: `${i * 4}s`,
                  opacity: 0,
                }}
              >
                <Image src={src} alt={`VA image ${i + 1}`} fill sizes="340px" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          {/* Image 2 — Slide up, counter-rotated */}
          <div
            className="absolute right-11 bottom-25 w-[42%] lg:w-[260px] h-[300px] lg:h-[300px] rotate-90"
            style={{ animation: "floatImage 6s ease-in-out infinite reverse" }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image src={images2[0]} alt="VA base" fill sizes="270px" className="object-cover -rotate-90 scale-125" priority />
              </div>
              {images2.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0"
                  style={{
                    animation: `slideUp 12s ease-in-out infinite`,
                    animationDelay: `${i * 4}s`,
                    opacity: 0,
                  }}
                >
                  <Image src={src} alt={`VA image ${i + 1}`} fill sizes="270px" className="object-cover -rotate-90 scale-125" priority={i === 0} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile-only single image */}
        <div className="md:hidden relative w-full h-52 rounded-2xl overflow-hidden shadow-xl">
          <Image src={images1[0]} alt="VA" fill className="object-cover" priority />
        </div>

      </div>

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-12px) translateX(8px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(14px); }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenBurns1 {
          0%   { opacity: 0; transform: scale(1.0) translate(0%, 0%); }
          3%   { opacity: 1; }
          30%  { opacity: 1; transform: scale(1.12) translate(-2%, -2%); }
          35%  { opacity: 0; transform: scale(1.15) translate(-3%, -3%); }
          100% { opacity: 0; transform: scale(1.15) translate(-3%, -3%); }
        }
        @keyframes kenBurns2 {
          0%   { opacity: 0; transform: scale(1.1) translate(2%, 1%); }
          3%   { opacity: 1; }
          30%  { opacity: 1; transform: scale(1.0) translate(-1%, -1%); }
          35%  { opacity: 0; transform: scale(0.98) translate(-2%, -2%); }
          100% { opacity: 0; transform: scale(0.98) translate(-2%, -2%); }
        }
        @keyframes kenBurns3 {
          0%   { opacity: 0; transform: scale(1.05) translate(-1%, 2%); }
          3%   { opacity: 1; }
          30%  { opacity: 1; transform: scale(1.15) translate(2%, -1%); }
          35%  { opacity: 0; transform: scale(1.18) translate(3%, -2%); }
          100% { opacity: 0; transform: scale(1.18) translate(3%, -2%); }
        }
        @keyframes slideUp {
          0%   { opacity: 0;  transform: translateY(100%); }
          5%   { opacity: 1;  transform: translateY(0%); }
          30%  { opacity: 1;  transform: translateY(0%); }
          35%  { opacity: 0;  transform: translateY(-100%); }
          100% { opacity: 0;  transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
}