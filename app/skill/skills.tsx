import { ImageWithFallback } from "../components/image-with-fallback";

type Tech = { name: string; slug: string };

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Languages",
    items: [
      {name:"C++", slug:"cplusplus"},
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" }
    ],
  },
  {
    title: "Front-end",
    items: [      
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Scss", slug: "sass" },
      {name:"PUG", slug:"pug"}
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "MongoDB", slug: "mongodb" },
      {name:"Mongoose", slug:"mongoose"},
      {name:"PostgreSQL", slug:"postgresql"}
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      {name:"GitHub", slug:"github"},
      {name:"Cloudinary", slug:"cloudinary"},
      {name:"GitLab", slug:"gitlab"},
      {name:"Neon", slug:"neon"},
      {name:"Yarn", slug:"yarn"},
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="font-extrabold font-dancing text-5xl text-primary">My Skills</h1>
        </div>

        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.title} data-aos="fade-up">
              <h3 className="text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                {g.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                {g.items.map((t) => (
                  <div
                    key={t.name}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-card border border-border p-6 hover:shadow-lg hover:-translate-y-1 hover:border-accent transition-all"
                  >
                    <ImageWithFallback
                      src={t.name === "CSS3" ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" : `https://cdn.simpleicons.org/${t.slug}`}
                      alt={`${t.name} logo`}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-muted-foreground text-center">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
