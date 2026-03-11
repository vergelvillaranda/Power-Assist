"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, SmartPhone01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: Mail01Icon,
    text: "admin@powerassistva.com",
    href: "mailto:admin@powerassistva.com",
  },
  {
    icon: SmartPhone01Icon,
    text: "0912-345-6789",
    href: "tel:09123456789",
  },
  {
    icon: Location01Icon,
    text: "Lag-on, Daet, Camarines Norte",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#AED6F1]">
      {/* CTA Banner */}
      <div className="w-full py-16 px-6 text-center flex flex-col items-center gap-5">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Ready to Power Up Your Business?
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-medium">
          Let's find the perfect virtual assistant for your needs!
        </p>
        <Link
          href="/contact"
          className="mt-2 px-12 py-5 bg-[#BEE3F8] hover:bg-[#D6EEF9] transition-colors duration-200 rounded-xl text-[#2B7BB9] font-bold text-lg shadow-sm"
        >
          Get Started Today
        </Link>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 pt-1 pb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-0 -ml-60 -mt-11">
          <div className="flex items-center gap-4">
            <Image
              src="/pas.jpg"
              alt="PowerAssist VA Agency"
              width={200}
              height={200}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-5xl leading-tight">
                <span className="text-[#5DADE2]">Power</span>
                <span className="text-[#E74C3C]">Assist</span>
              </span>
              <div className="flex items-center gap-2">
  <span className="flex-1 h-px bg-red-400" />
  <span className="text-white text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
    VA Agency
  </span>
  <span className="flex-1 h-px bg-red-500" />
</div>
              <span className="text-black text-lg italic">
                Powering Your Business Virtually.
              </span>
            </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed w-100 ml-20">
            Empowering virtual assistants and business owners by creating 
            opportunities, delivering reliable support, and driving sustainable
            growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 ml-40">
          <h3 className="text-white font-bold text-xl mb-1">Quick Links</h3>
          {quickLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/80 hover:text-white text-base transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-4 ml-50">
          <h3 className="text-white font-bold text-xl mb-1">Get in Touch</h3>
          {contactInfo.map(({ icon, text, href }) => (
            <Link
              key={text}
              href={href}
              className="flex items-start gap-3 text-white/80 hover:text-white text-base transition-colors duration-150"
            >
              <HugeiconsIcon icon={icon} size={20} color="white" strokeWidth={1.5} className="mt-0.5 shrink-0" />
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-6 px-6 text-center -mt-11">
        <p className="text-white/70 text-base">
          © 2026 PowerAssist VA Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}