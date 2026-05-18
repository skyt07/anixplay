import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
//Vercel Analytics
import { Analytics } from "@vercel/analytics/next";

// styles
import "../styles/themes.css";
import "../styles/globals.css";
import "../styles/animate.css";
import "../styles/utils.css";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// META`S AND SEO OPTIMIZED
export const metadata: Metadata = {
  title: "AnixPlay - Watch Anime Online",
  description:
    "Stream your favorite anime online for free. Browse trending anime and more.",
  keywords: ["anime", "streaming", "watch anime", "anime online", "AnixPlay"],
  // authors: [{ name: "unknown" }],
  openGraph: {
    title: "AnixPlay - Watch Anime Online",
    description: "Stream your favorite anime online for free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Vercel Analytics */}
        <Analytics />
        {/* Theme Provider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
