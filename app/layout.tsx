import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeScript } from "@/components/theme-script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://younousswatt.netlify.app"),
  title: {
    default: "Younouss Watt — AI & Big Data Engineering Student",
    template: "%s | Younouss Watt",
  },
  description:
    "Younouss Watt is an engineering student and full-stack developer building digital products across software, data, AI and telecommunications.",
  keywords: [
    "Younouss Watt",
    "AI engineer",
    "Big Data",
    "full-stack developer",
    "portfolio",
    "Sénégal",
    "Dakar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Younouss Watt — AI & Big Data Engineering Student",
    description:
      "Engineering student and full-stack developer building digital products across software, data, AI and telecommunications.",
    url: "https://younousswatt.netlify.app",
    siteName: "Younouss Watt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Younouss Watt — AI & Big Data Engineering Student",
    description:
      "Younouss Watt is an engineering student and full-stack developer building digital products across software, data, AI and telecommunications.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[var(--accent-soft)]">
        <div className="mx-auto max-w-[1600px] px-0">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
