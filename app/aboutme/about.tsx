import {
  GraduationCap,
  Award,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

type TimelineItem = {
  icon: LucideIcon;
  title: string;
  place: string;
  time: string;
  link?: string;
};

const timeline: TimelineItem[] = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Networks and Data Communications",
    place: "University of Information Technology - VNU-HCM",
    time: "2023 — 2027",
  },
  {
    icon: Award,
    title: "TOEIC 915",
    place: "Listening & Reading",
    time: "2026/04/07 — 2028/04/07",
    link: "https://your-certificate-link.com",
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center" data-aos="fade-up">
          <h1 className="font-extrabold font-dancing text-5xl text-primary">
            A Little About Me
          </h1>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <p className="mb-6 leading-relaxed text-muted-foreground">
             I am an enthusiastic developer with knowledge of both frontend and backend development, passionate about turning ideas into practical digital products. I focus on writing clean code, optimizing performance, and creating thoughtful user experiences.

            </p>

            <p className="mb-8 leading-relaxed text-muted-foreground">
             I am seeking an internship opportunity where I can apply my skills, gain hands-on experience, and grow in a professional environment. I look forward to collaborating with a team, contributing to meaningful projects, and pursuing my passion for software development.

            </p>
          </div>

          <div className="space-y-5">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-left"
                  data-aos-delay={index * 120}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-primary">{item.title}</h3>

                        <p className="text-sm text-muted-foreground">
                          {item.place}
                        </p>

                        <p className="mt-1 text-xs text-accent">
                          {item.time}
                        </p>
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${item.title}`}
                          title="View certificate"
                          className="text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
