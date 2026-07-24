import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/image-with-fallback";

const projects = [
  {
    title: "Travel Booking and Smart Tour Recommendation Platform",
    desc: "Built an MVC-based travel booking platform using Node.js, Express.js, PUG, and MongoDB, featuring tour search, reservations, reviews, vouchers, role-based administration, and VNPay/ZaloPay payments. Developed a hybrid recommendation system combining content-based cosine similarity, collaborative filtering with ALS/SVD matrix factorization, popularity ranking, behavior tracking, and TensorFlow.js contextual re-ranking.",
    tags: [
      "JavaScript",
      "PUG",
      "HTML",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Express"
    ],
    link: "https://project-backend-plum.vercel.app/",
    github:
      "https://github.com/23521228-BuiLeHuyPhuoc/Project-Backend",
    image:
      "https://res.cloudinary.com/dcollo5h4/image/upload/v1784695592/Screenshot_2026-07-22_114219_thryfl.png",
  },
  {
    title: "AI Copywriting Platform with Fine-Tuning and Plagiarism Detection",
    desc: "Built a full-stack AI copywriting platform using Next.js, TypeScript, Node.js, Express.js, and MongoDB. Integrated Gemini, GPT-4, and Llama APIs for customizable content generation, with project management, templates, subscriptions, Vertex AI fine-tuning, and Vietnamese–English plagiarism detection using hybrid text matching and multilingual embeddings.",
    tags: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Neon",
      "TailwindCSS",
      "GPT-4",
      "Llama 3.3",
      "Gemini Flash",
      "Vertex AI",
      "SerpAPI",
      "Common Crawl"
    ],
    link: "https://nt-114-q21-web-copy-writing.vercel.app/",
    github:
      "https://github.com/23521228-BuiLeHuyPhuoc/NT114.Q21-Web-Copy-Writing",
    image:
      "https://res.cloudinary.com/dcollo5h4/image/upload/v1784696166/Screenshot_2026-07-22_115515_jmj5br.png",
  },
  {
    title: "Course Registration and Tuition Management System",
    desc: "Built a course registration and tuition management system using Node.js, Express.js, PUG, Prisma ORM, and PostgreSQL. Implemented transactional registration with prerequisite, schedule, credit-limit, and capacity validation, alongside tuition calculation, VNPay/ZaloPay payments, role-based administration, student appeals, notifications, and Excel reporting.",
    tags: [
      "PUG",
      "JavaScript",
      "Neon",
      "PostgreSQL",
      "Node.js",
      "Express"
    ],
    link: "https://se104-q22-qltinchivahocphi.onrender.com/",
    github:
      "https://github.com/23521228-BuiLeHuyPhuoc/SE104.Q22-QLTinChiVaHocPhi",
    image:
      "https://res.cloudinary.com/dcollo5h4/image/upload/v1784697049/Screenshot_2026-07-22_120952_os7eqw.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="font-extrabold font-dancing text-5xl text-primary">
            Featured Projects
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 120}
              className="font-bold group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <a
                    href={`${p.link}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={`${p.github}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary"
                  >
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
