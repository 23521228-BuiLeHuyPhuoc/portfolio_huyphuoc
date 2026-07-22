import type { Metadata } from "next";
import { Dancing_Script, EB_Garamond } from "next/font/google";
import "./globals.scss";
import "./tailwind.css";
import AOSProvider from "./components/AOSProvider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin", "vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bùi Lê Huy Phước — Portfolio",
  description: "Frontend and full-stack developer portfolio",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <AOSProvider>
          <main className="flex-1 pt-16">{children}</main>
        </AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
