"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, SmartPhone01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home",     href: "/"        },
  { label: "About Us", href: "/about"   },
  { label: "Contact",  href: "/contact" },
];

const contactInfo = [
  { icon: Mail01Icon,        text: "admin@powerassistva.com",       href: "mailto:admin@powerassistva.com" },
  { icon: SmartPhone01Icon,  text: "0912-345-6789",                 href: "tel:09123456789"                },
  { icon: Location01Icon,    text: "Lag-on, Daet, Camarines Norte", href: "#"                             },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#AED6F1]">

      {/* CTA Banner */}
      <div className="w-full py-12 sm:py-16 px-6 text-center flex flex-col items-center gap-5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Ready to Power Up Your Business?
        </h2>
        <p className="text-white/80 text-base sm:text-lg font-medium">
          Let's find the perfect virtual assistant for your needs!
        </p>
        <Link
          href="/contact#application-form"
          className="mt-2 px-8 py-4 bg-[#BEE3F8] hover:bg-[#D6EEF9] transition-colors duration-200 rounded-xl text-[#2B7BB9] font-bold text-base shadow-sm"
        >
          Get Started Today
        </Link>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-2 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/pas.jpg"
              alt="PowerAssist VA Agency"
              width={72}
              height={72}
              className="rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl sm:text-3xl leading-tight">
                <span className="text-[#5DADE2]">Power</span>
                <span className="text-[#E74C3C]">Assist</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="flex-1 h-px bg-red-400" />
                <span className="text-white text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
                  VA Agency
                </span>
                <span className="flex-1 h-px bg-red-500" />
              </div>
              <span className="text-black text-sm italic">
                Powering Your Business Virtually.
              </span>
            </div>
          </div>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm">
            Empowering virtual assistants and business owners by creating
            opportunities, delivering reliable support, and driving sustainable
            growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg mb-1">Quick Links</h3>
          {quickLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg mb-1">Get in Touch</h3>
          {contactInfo.map(({ icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-start gap-3 text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-150"
            >
              <HugeiconsIcon icon={icon} size={18} color="white" strokeWidth={1.5} className="mt-0.5 shrink-0" />
              <span>{text}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-5 px-6 text-center">
        <p className="text-white/70 text-sm sm:text-base">
          © 2026 PowerAssist VA Agency. All rights reserved.
        </p>
      </div>

    </footer>
  );
}