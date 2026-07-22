import Link from "next/link";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/aboutme" },
  { label: "Skills", to: "/skill" },
  { label: "Projects", to: "/project" },
  { label: "CV", to: "/cv" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-dancing text-3xl">
          Thank you for visiting my portfolio!
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Bùi Lê Huy Phước
        </p>
      </div>
    </footer>
  );
}
