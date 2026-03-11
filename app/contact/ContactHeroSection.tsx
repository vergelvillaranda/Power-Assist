"use client";

import Link from "next/link";

export default function ContactHeroSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            <span className="text-[#7DB8E0]">Let's </span>
            <span className="text-[#2B7BB9]">Power </span>
            <span className="text-[#7DB8E0]">Your </span>
            <span className="text-[#2B7BB9]">Business Together</span>
          </h1>
          <p className="text-[#7DB8E0] text-sm md:text-base">
            Tell us what you need, and we'll match you with the right virtual assistant.
          </p>
        </div>

        {/* CTA Card */}
        <div className="w-260 bg-[#AED6F1] rounded-2xl px-8 py-12 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md">
            Fill out our quick application form and we'll get back to you within 24 hours to match
            you with the perfect virtual assistant.
          </p>
          <Link
            href="#application-form"
            className="mt-2 px-8 py-3 bg-[#BEE3F8] hover:bg-[#D6EEF9] transition-colors duration-200 rounded-xl text-[#2B7BB9] font-bold text-sm shadow-sm"
          >
            Complete Application Form
          </Link>
          <p className="text-white/60 text-xs mt-2">
            The form takes approximately 3–5 minutes to complete.
          </p>
        </div>
      </div>
    </section>
  );
}