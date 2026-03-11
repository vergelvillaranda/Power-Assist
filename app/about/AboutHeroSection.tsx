"use client";

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-370 mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
            <span className="text-[#7DB8E0]">About </span>
            <span className="text-[#2B7BB9]">PowerAssist</span>
          </h1>
          <p className="text-[#5DADE2] text-lg md:text-xl font-semibold italic">
            Built by VAs, for VAs and business owners who believe in shared success.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 text-[#5DADE2] text-lg md:text-xl leading-relaxed">
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
          <blockquote className="border-l-4 border-[#AED6F1] bg-gray-50 px-6 py-5 rounded-r-xl ml-22">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              What started as shared experience turned into a shared mission:
            </p>
            <p className="text-[#5DADE2] text-xl md:text-2xl font-semibold">
              To help both clients and virtual assistants succeed together.
            </p>
          </blockquote>

          <p>Because for us, success isn't one-sided.</p>
          <p>It's shared.</p>
          <p>When our VAs win, our clients win.</p>
          <p>And when our clients grow, we all grow.</p>

          {/* Closing */}
          <div className="text-center mt-4">
            <p className="text-gray-800 font-bold text-lg md:text-xl">
              That's the power of the right support system.
            </p>
            <p className="text-[#2B7BB9] font-bold text-lg md:text-xl">
              That's the PowerAssist way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 