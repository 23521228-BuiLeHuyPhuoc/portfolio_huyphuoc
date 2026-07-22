import { GraduationCap, Briefcase, Award } from "lucide-react";

const stats = [
  { value: "2+", label: "Năm kinh nghiệm" },
  { value: "15+", label: "Dự án hoàn thành" },
  { value: "10+", label: "Khách hàng hài lòng" },
];

const timeline = [
  {
    icon: GraduationCap,
    title: "Cử nhân Công nghệ Thông tin",
    place: "Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
    time: "2021 — 2025",
  },
  {
    icon: Briefcase,
    title: "Front-end Developer Intern",
    place: "Công ty Công nghệ ABC",
    time: "2024 — nay",
  },
  {
    icon: Award,
    title: "Chứng chỉ React & TypeScript",
    place: "Meta / freeCodeCamp",
    time: "2023",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent mb-1">Về tôi</p>
          <h1 className="font-dancing text-5xl text-primary">Đôi nét giới thiệu</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tôi là một lập trình viên trẻ đầy nhiệt huyết, yêu thích việc biến
              những ý tưởng thành sản phẩm thực tế. Với nền tảng vững về React và
              TypeScript, tôi luôn chú trọng đến chất lượng mã nguồn, hiệu năng và
              trải nghiệm người dùng.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tôi đang tìm kiếm cơ hội để phát triển sự nghiệp trong môi trường
              chuyên nghiệp, nơi tôi có thể học hỏi, đóng góp và cùng đội ngũ tạo
              ra những sản phẩm có giá trị.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-card border border-border p-4 text-center"
                >
                  <div className="font-dancing text-4xl text-accent">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {timeline.map((t) => (
              <div
                key={t.title}
                className="flex gap-4 rounded-xl bg-card border border-border p-5"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <t.icon size={20} />
                </div>
                <div>
                  <h3 className="text-primary">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                  <p className="text-xs text-accent mt-1">{t.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
