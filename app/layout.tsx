import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/lib/providers";
import SmoothScroll from "@/components/SmoothScroll";
import TopHeader from "@/components/github/TopHeader";
import GitFooter from "@/components/github/GitFooter";
import CommandPalette from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: "abedinalways (Sheikh Minhajul Abedin)",
  description:
    "Jr. Frontend Engineer at Softvence Delta — 2.5 years of experience building scalable, production-grade web apps with React, Next.js and TypeScript. Pinned projects, contribution graph and résumé.",
  keywords: [
    "Sheikh Minhajul Abedin",
    "abedinalways",
    "frontend engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Bangladesh",
  ],
  openGraph: {
    title: "abedinalways (Sheikh Minhajul Abedin)",
    description:
      "Jr. Frontend Engineer — React, Next.js & TypeScript. Building production-grade web applications.",
    url: "https://abedin.vercel.app",
    siteName: "abedinalways",
    locale: "en_US",
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-bg text-text">
        <AppProvider>
          <SmoothScroll>
            <TopHeader />
            <main className="flex-1">{children}</main>
            <GitFooter />
            <CommandPalette />
          </SmoothScroll>
        </AppProvider>
      </body>
    </html>
  );
}
