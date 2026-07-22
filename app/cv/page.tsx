"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Download,
  Printer,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";

const contact = [
  { icon: Mail, text: "huyphuoc@example.com" },
  { icon: Phone, text: "+84 123 456 789" },
  { icon: MapPin, text: "TP. Hồ Chí Minh, Việt Nam" },
  { icon: Github, text: "github.com/23521228-BuiLeHuyPhuoc" },
  { icon: Globe, text: "huyphuoc.dev" },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js / Express",
  "PostgreSQL / Supabase",
  "Git & CI/CD",
];

const languages = [
  { name: "Tiếng Việt", level: "Bản ngữ" },
  { name: "Tiếng Anh", level: "TOEIC 800 / Giao tiếp tốt" },
];

const experience = [
  {
    role: "Front-end Developer Intern",
    company: "Công ty Công nghệ ABC",
    time: "06/2024 — nay",
    points: [
      "Phát triển giao diện web bằng React & TypeScript, tối ưu hiệu năng render.",
      "Phối hợp với đội thiết kế để hiện thực hóa UI từ Figma với độ chính xác cao.",
      "Tham gia review code và viết unit test cho các component quan trọng.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Dự án cá nhân & khách hàng nhỏ",
    time: "2023 — 2024",
    points: [
      "Xây dựng landing page và website giới thiệu cho khách hàng địa phương.",
      "Triển khai và bảo trì sản phẩm trên Vercel, tối ưu SEO cơ bản.",
    ],
  },
];

const education = [
  {
    degree: "Cử nhân Công nghệ Thông tin",
    school: "Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
    time: "2021 — 2025",
    detail: "GPA: 3.4/4.0 — Chuyên ngành Kỹ thuật phần mềm.",
  },
];

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-border pb-2">
      <Icon size={18} className="text-accent" />
      <h2 className="text-primary">{title}</h2>
    </div>
  );
}

export default function CVPage() {
  return (
    <section className="py-16 bg-secondary/40 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-end gap-3 mb-6 print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm text-primary hover:bg-secondary transition-colors"
          >
            <Printer size={16} /> In CV
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-accent transition-colors"
          >
            <Download size={16} /> Tải PDF
          </button>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-primary text-primary-foreground p-8">
            <h1 className="font-dancing text-5xl mb-1">Bùi Lê Huy Phước</h1>
            <p className="text-primary-foreground/80">
              Lập trình viên Front-end / Full-stack
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
              {contact.map((c) => (
                <span
                  key={c.text}
                  className="flex items-center gap-2 text-sm text-primary-foreground/90"
                >
                  <c.icon size={15} /> {c.text}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <SectionTitle icon={Briefcase} title="Kinh nghiệm làm việc" />
                <div className="space-y-6 mt-4">
                  {experience.map((e) => (
                    <div key={e.role}>
                      <div className="flex justify-between flex-wrap gap-1">
                        <h3 className="text-primary">{e.role}</h3>
                        <span className="text-xs text-accent">{e.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {e.company}
                      </p>
                      <ul className="space-y-1.5">
                        {e.points.map((p) => (
                          <li
                            key={p}
                            className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle icon={GraduationCap} title="Học vấn" />
                <div className="space-y-4 mt-4">
                  {education.map((ed) => (
                    <div key={ed.degree}>
                      <div className="flex justify-between flex-wrap gap-1">
                        <h3 className="text-primary">{ed.degree}</h3>
                        <span className="text-xs text-accent">{ed.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{ed.school}</p>
                      <p className="text-sm text-muted-foreground">{ed.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <SectionTitle icon={Star} title="Kỹ năng" />
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle icon={Globe} title="Ngoại ngữ" />
                <div className="space-y-3 mt-4">
                  {languages.map((l) => (
                    <div key={l.name}>
                      <p className="text-sm text-foreground">{l.name}</p>
                      <p className="text-xs text-muted-foreground">{l.level}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle icon={Star} title="Mục tiêu" />
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Trở thành một Full-stack Developer giỏi, đóng góp vào các sản
                  phẩm chất lượng và không ngừng học hỏi công nghệ mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
