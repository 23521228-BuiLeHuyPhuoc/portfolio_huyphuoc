import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";

const projects = [
  {
    title: "Analytics Dashboard",
    desc: "Bảng điều khiển phân tích dữ liệu thời gian thực với biểu đồ tương tác và bộ lọc linh hoạt.",
    tags: ["React", "Recharts", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "E-commerce Platform",
    desc: "Nền tảng thương mại điện tử với giỏ hàng, thanh toán và quản lý đơn hàng.",
    tags: ["Next.js", "Supabase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Task Management App",
    desc: "Ứng dụng quản lý công việc theo nhóm với kéo-thả và cập nhật realtime.",
    tags: ["React", "TypeScript", "DnD"],
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Data Visualization Tool",
    desc: "Công cụ trực quan hóa dữ liệu lớn với hiệu năng cao và giao diện tinh gọn.",
    tags: ["React", "D3", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent mb-1">Portfolio</p>
          <h1 className="font-dancing text-5xl text-primary">Dự án tiêu biểu</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
