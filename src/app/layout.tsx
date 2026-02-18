import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Covi Franklin — AI Governance & Policy",
    template: "%s | Covi Franklin",
  },
  description:
    "Covi Franklin — AI governance and policy researcher. Former UN/WFP professional with expertise in crisis response systems, institutional resilience, and international security.",
  openGraph: {
    title: "Covi Franklin — AI Governance & Policy",
    description:
      "AI governance and policy researcher. Former UN/WFP professional specializing in crisis response and institutional resilience.",
    type: "website",
    locale: "en_US",
    siteName: "Covi Franklin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Covi Franklin — AI Governance & Policy",
    description:
      "AI governance and policy researcher. Former UN/WFP professional.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-white text-charcoal-900 dark:bg-navy-900 dark:text-offwhite antialiased font-sans min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
