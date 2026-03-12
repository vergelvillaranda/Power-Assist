"use client";

export default function ContactHeroSection() {
  return (
    <section id="application-form"className="w-full bg-white py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
            <span className="text-[#7DB8E0]">Let's </span>
            <span className="text-[#2B7BB9]">Power </span>
            <span className="text-[#7DB8E0]">Your </span>
            <span className="text-[#2B7BB9]">Business Together</span>
          </h1>
          <p className="text-[#7DB8E0] text-xs sm:text-sm">
            Tell us what you need, and we'll match you with the right virtual assistant.
          </p>
        </div>

        {/* CTA Card */}
        <div className="w-full bg-[#AED6F1] rounded-2xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-center text-center gap-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xs sm:text-sm max-w-md">
            Fill out our quick application form and we'll get back to you within 24 hours to match
            you with the perfect virtual assistant.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRzcrdIMjED4YVgO3YR94qIU0K_d0HYByl87mS_6c8Jy4kdg/viewform?usp=sharing&ouid=117770786715472095330"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-6 py-2.5 bg-[#BEE3F8] hover:bg-[#D6EEF9] transition-colors duration-200 rounded-lg text-[#2B7BB9] font-semibold text-sm shadow-sm"
          >
            Complete Application Form
          </a>
          <p className="text-white/60 text-xs">
            The form takes approximately 3–5 minutes to complete.
          </p>
        </div>

      </div>
    </section>
  );
}