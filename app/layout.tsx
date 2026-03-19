import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ResizeNav from "@/components/globals/Nav";
import { MainContentReveal } from "@/components/globals/ScrollReveal";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/globals/ModeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cailee Averill",
  description: "Cailee Averill is a software engineer with a passion for building scalable and efficient systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResizeNav />
          <div className="flex flex-1 flex-col lg:max-w-7xl mx-auto justify-center px-4 py-20 min-h-0">
            <MainContentReveal>{children}</MainContentReveal>
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
