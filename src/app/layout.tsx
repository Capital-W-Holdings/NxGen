import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "NxGeN | Where Capital and Culture Collide",
  description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
  keywords: ["NxGen", "community", "capital", "entrepreneurship", "impact", "next generation", "investors", "builders"],
  openGraph: {
    title: "NxGeN | Where Capital and Culture Collide",
    description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
    url: "https://nxgen.club",
    siteName: "NxGeN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NxGeN | Where Capital and Culture Collide",
    description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
