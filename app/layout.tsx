import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UniAI - The unified homebase for AI",
  description: "Discover tools, track news, compare stacks, share templates, and ship AI products safely. The homebase for AI builders.",
  keywords: ["AI", "AI tools", "AI agents", "AI development", "AI builders", "machine learning", "ML"],
  authors: [{ name: "UniAI" }],
  openGraph: {
    title: "UniAI - The unified homebase for AI",
    description: "Discover tools, track news, compare stacks, share templates, and ship AI products safely.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniAI - The unified homebase for AI",
    description: "Discover tools, track news, compare stacks, share templates, and ship AI products safely.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

