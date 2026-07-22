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
        <div className="mx-auto max-w-6xl px-6">
          <nav className="flex h-16 items-center justify-between gap-2 lg:gap-4">
          <Link
            href="/"
            className="block min-w-0 flex-1 shrink-0 overflow-hidden whitespace-nowrap py-1 font-dancing font-extrabold md:w-[22rem] md:flex-none lg:w-[32rem] xl:w-[40rem]"
          >
            <HeaderTypewriter />
          </Link>

          <ul className="mx-auto hidden shrink-0 items-center gap-4 md:flex lg:gap-6 xl:gap-8">
            {links.map((l) => {
              const active = isActive(l.to);

              return (
                <li key={l.to} className="relative">
                  <Link
                    href={l.to}
                    aria-current={active ? "page" : undefined}
                    className={`relative block border-b-2 py-1 text-base transition-colors lg:text-lg ${
                      active
                        ? "border-accent text-accent"
                        : "border-transparent text-foreground/80 hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </nav>
        </div>

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
