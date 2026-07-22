import { Download, ExternalLink } from "lucide-react";

const cvPath = "/autoCV.pdf";

export default function CVPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-secondary/40 py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-dancing text-4xl font-bold text-primary md:text-5xl">
              My CV
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm text-primary transition-colors hover:bg-secondary"
            >
              <ExternalLink size={16} /> Open PDF
            </a>
            <a
              href={cvPath}
              download="Bui-Le-Huy-Phuoc-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition-colors hover:bg-accent"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <object
            data={`${cvPath}#view=FitH&toolbar=1&navpanes=0`}
            type="application/pdf"
            aria-label="Bui Le Huy Phuoc CV"
            className="h-[75vh] min-h-[640px] w-full md:h-[calc(100vh-10rem)]"
          >
            <div className="flex min-h-[640px] flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-muted-foreground">
                Your browser cannot display the PDF preview.
              </p>
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-5 py-2 text-primary-foreground"
              >
                Open the CV in a new tab
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
