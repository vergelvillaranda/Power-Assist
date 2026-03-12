"use client";

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
            <span className="text-[#7DB8E0]">About </span>
            <span className="text-[#2B7BB9]">PowerAssist</span>
          </h1>
          <p className="text-[#5DADE2] text-sm sm:text-base font-semibold italic">
            Built by VAs, for VAs and business owners who believe in shared success.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 text-[#5DADE2] text-sm sm:text-base leading-relaxed">
          <p>
            PowerAssist VA Agency was built by{" "}
            <strong className="text-[#2B7BB9]">three virtual assistants</strong>{" "}
            who experienced the realities of the industry firsthand.
          </p>

          <p>
            Working with different clients, they saw both sides—the challenges business owners face
            when trying to find reliable support, and the struggles virtual assistants go through in
            finding the right opportunities where they are valued and empowered.
          </p>

          <p>They realized something was missing.</p>
          <p>So instead of staying on the sidelines, they decided to create a solution.</p>

          <p>
            PowerAssist VA Agency was born from the desire to bridge that gap—connecting business
            owners with dependable, skilled virtual assistants, while also creating a space where VAs
            are supported, trained, and empowered to grow.
          </p>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#AED6F1] bg-gray-50 px-4 sm:px-5 py-4 rounded-r-xl">
            <p className="text-gray-700 text-sm font-semibold mb-1">
              What started as shared experience turned into a shared mission:
            </p>
            <p className="text-[#5DADE2] text-base sm:text-lg font-semibold">
              To help both clients and virtual assistants succeed together.
            </p>
          </blockquote>

          <p>Because for us, success isn't one-sided.</p>
          <p>It's shared.</p>
          <p>When our VAs win, our clients win.</p>
          <p>And when our clients grow, we all grow.</p>

          {/* Closing */}
          <div className="text-center mt-3">
            <p className="text-gray-800 font-bold text-sm sm:text-base">
              That's the power of the right support system.
            </p>
            <p className="text-[#2B7BB9] font-bold text-sm sm:text-base">
              That's the PowerAssist way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}