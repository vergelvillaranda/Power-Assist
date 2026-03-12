"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home",    href: "/"        },
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6"  x2="20" y2="6"  />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 sm:px-20 lg:px-24 py-2 flex items-center justify-between shadow-md sticky top-0 z-50"
  style={{ backgroundColor: "#9AD0FC" }}
>
  {/* LEFT — Logo + Text */}
  <Link
  href="/"
  className="flex items-center gap-2 cursor-pointer group"
>
  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_3px_#1a3a5c]">
    <Image
      src="/pas.jpg"
      alt="Logo"
      fill
      className="object-cover rounded-full"
      priority
    />
  </div>
  <span className="font-bold text-lg sm:text-xl leading-tight text-[#1a3a5c] transition-all duration-300 group-hover:tracking-wide group-hover:text-[#0d2a4a]">
    PowerAssist
  </span>
</Link>

  {/* RIGHT — Nav Links + Get Started together */}
  <div className="hidden md:flex items-center gap-4 lg:gap-6">
    {navLinks.map(({ label, href }) => (
  <Link key={label} href={href} className="cursor-pointer">
    <Button
      variant="ghost"
      className="cursor-pointer font-semibold text-base bg-transparent hover:bg-transparent relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#1a3a5c] after:transition-all after:duration-300 hover:after:w-full rounded-xl transition-colors duration-200"
      style={{ color: "#1a3a5ccc" }}
      onMouseEnter={e => (e.currentTarget.style.color = "#0d2a4a")}
      onMouseLeave={e => (e.currentTarget.style.color = "#1a3a5ccc")}
    >
      {label}
    </Button>
  </Link>
))}

    <Link href="/contact#application-form" className="cursor-pointer">
  <Button
    className="cursor-pointer text-white font-bold text-sm lg:text-base px-8 py-3 h-auto rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 hover:bg-[#1a6fc4]"
    style={{ backgroundColor: "#75baff" }}
    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a6fc4")}
    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#75baff")}
  >
    Get Started
  </Button>
</Link>
  </div>

  {/* Mobile Hamburger */}
  <div className="md:hidden">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer text-[#1a3a5c] hover:bg-white/30 rounded-xl"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-64 flex flex-col gap-3 pt-10"
        style={{ backgroundColor: "#9AD0FC" }}
      >
        {navLinks.map(({ label, href }) => (
          <Link key={label} href={href} onClick={() => setOpen(false)} className="cursor-pointer">
            <Button
              variant="ghost"
              className="cursor-pointer w-full justify-start text-[#1a3a5c] font-semibold text-lg hover:bg-white/30 hover:-translate-y-0.5 transition-transform duration-150 rounded-xl"
            >
              {label}
            </Button>
          </Link>
        ))}

        <Link href="/contact#application-form" onClick={() => setOpen(false)} className="cursor-pointer">
          <Button className="cursor-pointer w-full mt-2 bg-[#1a6fc4] text-white font-bold text-lg px-8 py-3 h-auto rounded-xl shadow-md hover:-translate-y-0.5 transition-transform duration-150">
            Get Started
          </Button>
        </Link>
      </SheetContent>
    </Sheet>
  </div>
</nav>
  );
}