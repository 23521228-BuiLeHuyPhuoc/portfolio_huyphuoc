"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { HeaderTypewriter } from "./HieuUngGoChu";
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/aboutme" },
  { label: "Skills", to: "/skill" },
  { label: "Projects", to: "/project" },
  { label: "CV", to: "/cv" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className=" max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="min-w-0 flex-1 overflow-hidden whitespace-nowrap font-extrabold font-dancing text-sm md:flex-none md:w-72 md:text-xs lg:w-[28rem] lg:text-base xl:w-[30rem] xl:text-lg shrink-0"
        >
          <HeaderTypewriter />
        </Link>

        <ul className="hidden md:flex items-center gap-4 lg:gap-8 mx-auto shrink-0">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className={`text-lg transition-colors ${
                  isActive(l.to)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className={`transition-colors ${
                isActive(l.to)
                  ? "text-accent"
                  : "text-foreground/80 hover:text-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
