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
      width="32"
      height="32"
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
    <nav
      className="w-full px-6 py-1EEEEEEEEEEEEEE flex items-center justify-between shadow-md sticky top-0 z-50"
      style={{ backgroundColor: "#9AD0FC" }}
    >
      {/* LEFT — Logo + Text as one button */}
      <Link href="/" className="flex items-center pl-40">
        <div className="relative w-20 h-20 transition-transform duration-200">
          <Image
            src="/pas.jpg"
            alt="Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <span className="text-[#1a3a5c] font-bold text-2xl leading-tight transition-transform duration-200">
          Power Assist
        </span>
      </Link>

      {/* RIGHT — Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 pr-40">
       {navLinks.map(({ label, href }) => (
  <Link key={label} href={href}>
    <Button
      variant="ghost"
      className="text-[#1a3a5c]/80 font-semibold text-xl bg-transparent hover:bg-transparent hover:text-[#0d2a4a] relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#1a3a5c] after:transition-all after:duration-300 hover:after:w-full rounded-xl"
    >
      {label}
    </Button>
  </Link>
))}

        <Link href="/get-started">
          <Button
            className="ml-3 bg-[#75baff] text-white font-bold text-xl px-3 py-2 rounded-md border-[#75baff] border-15 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-150"
            style={{ backgroundColor: "#75baff" }}
          >
            Get Started
          </Button>
        </Link>
      </div>

      {/* RIGHT — Mobile Hamburger */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#1a3a5c] hover:bg-white/30 rounded-xl"
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
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[#1a3a5c] font-semibold text-lg hover:bg-white/30 hover:-translate-y-1 transition-transform duration-150 rounded-xl"
                >
                  {label}
                </Button>
              </Link>
            ))}

            <Link href="/get-started" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 bg-[#1a6fc4] text-white font-bold text-lg rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-150">
                Get Started
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}