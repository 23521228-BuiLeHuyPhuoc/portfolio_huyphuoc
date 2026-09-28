import {
  GraduationCap,
  Award,
  Briefcase,
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
    link: "https://res.cloudinary.com/dcollo5h4/image/upload/v1784880995/toeicRL_nkaitl.jpg",
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
              I am an enthusiastic third-year student with a passion for both frontend and backend development. I have completed all required coursework and only have my graduation thesis remaining, allowing me to work full-time. Currently, I am working as an Intern Developer at AIPOWER, gaining practical experience and contributing to enterprise software projects.
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
                  className=" flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-primary">{item.title}</h3>

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

        <div className="mt-16 md:mt-20" data-aos="fade-up">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-dancing text-3xl font-bold text-primary md:text-4xl">
              Work Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary md:text-2xl">
                    Intern Developer
                  </h3>
                  <p className="text-base font-semibold text-foreground/90">
                    AIPOWER
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    Nam Thiên Long — Demand Planning System
                  </p>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  18 Aug 2026 – Present
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Built and refined user interfaces using React and TypeScript for Demand Planning modules, including Seasonal, Scenario Forecast, and Consensus Forecast.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Implemented UI updates to display changes after running Scenario Forecast on the Dashboard and Consensus Forecast views.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Improved the user interface and interactions for the Adjustment module.
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                React
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
