import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Senior MERN + AI Engineer | Building Intelligent Systems",
    template: "%s | Joe Mato",
  },
  description:
    "Full-stack engineer specializing in AI-powered systems, real-time collaboration platforms and production-grade MERN applications. 3 years of experience building scalable solutions.",
  keywords: [
    "MERN Stack",
    "AI Integration",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Real-Time Systems",
    "Machine Learning",
  ],
  authors: [{ name: "Mato" }],
  creator: "Mato",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joemato.com",
    title: "Senior MERN + AI Engineer | Building Intelligent Systems",
    description:
      "Full-stack engineer specializing in AI-powered systems and real-time collaboration platforms.",
    siteName: "Joe Mato",
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Senior MERN + AI Engineer | Building Intelligent Systems",
    description:
      "Full-stack engineer specializing in AI-powered systems and real-time collaboration platforms.",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
