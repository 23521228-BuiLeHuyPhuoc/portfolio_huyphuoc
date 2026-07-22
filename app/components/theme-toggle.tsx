"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-accent hover:border-accent transition-colors"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
