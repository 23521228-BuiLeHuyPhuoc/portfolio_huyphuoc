import { ArrowRight, FileText, Github, Mail } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "./image-with-fallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 overflow-hidden"
    >
      <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="text-accent text-[24px] tracking-wide mb-3">Hi, I&apos;m</p>
          <h1 className="font-dancing font-extrabold text-6xl md:text-7xl text-primary leading-tight mb-2">
            Bùi Lê Huy Phước
          </h1>
          <h2 className="text-xl  md:text-2xl font-bold text-accent mb-6">
            I&apos;m currently looking for
            Frontend / Backend Developer Internship opportunity
          </h2>
          <p className=" text-muted-foreground  max-w-md mb-8 text-[17px] leading-relaxed">
            I am passionate about web development and seeking opportunity to work in a dynamic team where I can gain hands-on experience by
            contributing to real-world projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/project"
              className="inline-flex font-bold items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-accent transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="/cv"
              className="inline-flex font-bold items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary hover:bg-secondary transition-colors"
            >
              <FileText size={18} /> View CV
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/23521228-BuiLeHuyPhuoc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="mailto:huyphuoc09112005@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-accent/20 rotate-6" />
            <ImageWithFallback
              src="https://res-console.cloudinary.com/dcollo5h4/thumbnails/v1/image/upload/v1784694990/MTc4NDY5NDk3NDIyMV8yMDgxNTEzMTUxMzk1MDk4Mjk5Xzc4MDgyNDU2NDAyMTYwNjAxNjRfYjllZjhkYTRhYTQ5ZDJlMGE0ODg4MDk3NDUyZGVlOWRfbmRjNGRt/drilldown"
              alt="Portrait of Bùi Lê Huy Phước"
              className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
