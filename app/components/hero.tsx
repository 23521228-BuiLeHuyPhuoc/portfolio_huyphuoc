import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
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
          <p className="text-accent tracking-wide mb-3">Xin chào, tôi là</p>
          <h1 className="font-dancing text-6xl md:text-7xl text-primary leading-tight mb-2">
            Bùi Lê Huy Phước
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Lập trình viên Front-end / Full-stack
          </h2>
          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Tôi xây dựng những sản phẩm web đẹp, nhanh và dễ dùng. Đam mê tạo ra
            trải nghiệm người dùng mượt mà bằng React, TypeScript và những công
            nghệ web hiện đại.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-accent transition-colors"
            >
              Xem dự án <ArrowRight size={18} />
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary hover:bg-secondary transition-colors"
            >
              <FileText size={18} /> Xem CV
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/23521228-BuiLeHuyPhuoc" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:huyphuoc@example.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-accent/20 rotate-6" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Chân dung Bùi Lê Huy Phước"
              className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
