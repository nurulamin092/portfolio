import type { Metadata } from "next";
import { ActiveSectionProvider } from "@/providers/ActiveSectionProvider";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import PageBackground from "@/components/common/PageBackground";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Nurul Amin | Full Stack Developer",
  description:
    "Portfolio of Nurul Amin - Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, PostgreSQL and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ActiveSectionProvider>
          <Navbar />
          <PageBackground>{children}</PageBackground>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
