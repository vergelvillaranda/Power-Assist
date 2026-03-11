"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const images1 = ["/va1.jpg", "/va2.jpg", "/va3.jpg"];
const images2 = ["/va2.jpg", "/va3.jpg", "/va1.jpg"];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex items-center">

      {/* Animated blobs */}
      <div className="absolute -top-15right-[10%] w-48 h-48 rounded-full opacity-40"
        style={{ background: "#b8e0ff", animation: "floatA 7s ease-in-out infinite" }} />
      <div className="absolute top-[10%] right-[2%] w-28 h-28 rounded-full opacity-30"
        style={{ background: "#d4f0c0", animation: "floatB 9s ease-in-out infinite" }} />
      <div className="absolute bottom-[12%] right-[18%] w-20 h-20 rounded-full opacity-50"
        style={{ background: "#ffb3b3", animation: "floatC 6s ease-in-out infinite" }} />
      <div className="absolute bottom-[5%] right-[5%] w-36 h-36 rounded-full opacity-25"
        style={{ background: "#9AD0FC", animation: "floatA 8s ease-in-out infinite reverse" }} />
      <div className="absolute top-[40%] right-[38%] w-16 h-16 rounded-full opacity-20"
        style={{ background: "#b8e0ff", animation: "floatB 10s ease-in-out infinite" }} />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* LEFT — Text */}
        <div className="flex flex-col gap-6 -ml-43 -mt-20" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
          <h1 className="text-7xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span style={{ color: "#9AD0FC" }}>Empowered</span>{" "}
            <span className="text-[#1a3a5c]">Virtual</span>
            <br />
            <span className="text-[#1a3a5c]">Assistants.</span>{" "}
            <span style={{ color: "#75baff" }}>Stronger</span>
            <br />
            <span style={{ color: "#75baff" }}>Businesses.</span>
          </h1>

          <p className="text-[#9AD0FC] text-3xl md:text-lg max-w-md leading-relaxed"
            style={{ animation: "fadeSlideUp 0.8s 0.15s ease both" }}>
            Scale your business with reliable, highly-trained virtual
            assistants — so you can focus on what truly matters.
          </p>

          <div className="flex items-center gap-4 flex-wrap"
            style={{ animation: "fadeSlideUp 0.8s 0.3s ease both" }}>
            <Link href="/hire">
              <Button className="bg-[#75baff] hover:bg-[#4da3f5] text-white font-bold px-8 py-7 rounded-md text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-2">
                Hire a VA <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/join">
              <Button variant="outline" className="border-[#75baff] text-[#75baff] font-bold px-8 py-7 rounded-md text-base hover:bg-[#75baff] hover:text-white hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-2">
                <Users size={16} /> Join as a VA
              </Button>
            </Link>
          </div>

          <p className="text-[#9AD0FC] text-lg max-w-none leading-relaxed"
            style={{ animation: "fadeSlideUp 0.8s 0.45s ease both" }}>
            We match you with skilled, trusted virtual assistants so you <br />can
            focus on growth — while we handle the rest.
          </p>
        </div>

        {/* RIGHT — Overlapping images */}
        <div className="relative flex items-center justify-center w-full h-[700px] -ml-13 mt-16">

          {/* Image 1 — Ken Burns: slow zoom + pan, no gaps */}
          <div
            className="absolute left-0 top-0 w-[480px] h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/60"
            style={{ animation: "floatImage 5s ease-in-out infinite" }}
          >
            {/* Base layer — always visible, prevents white flash */}
            <div className="absolute inset-0">
              <Image src={images1[0]} alt="VA base" fill sizes="480px" className="object-cover" priority />
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
                <Image
                  src={src}
                  alt={`VA image ${i + 1}`}
                  fill
                  sizes="480px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Image 2 — Slide from bottom, counter-rotate photo upright */}
          <div
            className="absolute left-90 bottom-35 w-95 h-[460px] rotate-90"
            style={{ animation: "floatImage 6s ease-in-out infinite reverse" }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Base layer — always visible, prevents white flash */}
              <div className="absolute inset-0">
                <Image src={images2[0]} alt="VA base" fill sizes="460px" className="object-cover -rotate-90 scale-125" priority />
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
                  <Image
                    src={src}
                    alt={`VA image ${i + 1}`}
                    fill
                    sizes="460px"
                    className="object-cover -rotate-90 scale-125"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-22px) scale(1.04); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-14px) translateX(10px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(18px); }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* IMAGE 1 — Ken Burns: 3 variants with different zoom/pan directions */
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

        /* IMAGE 2 — Slide up from bottom */
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