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
  title: "Drugs Free Youth - Stand Strong, Stay Awake, Save Youth",
  description: "Join our mission to create a drug-free nation. Report drug peddlers anonymously and help save our youth from the menace of drugs. Partnership with MakeAChange Foundation and Mangaluru City Police.",
  keywords: "drug free youth, anti-drug campaign, report drug peddlers, drug awareness, youth safety, Mangaluru police, MakeAChange Foundation",
  authors: [{ name: "Drugs Free Youth" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Drugs Free Youth - Stand Strong, Stay Awake, Save Youth",
    description: "Join our mission to create a drug-free nation. Report drug peddlers anonymously.",
    type: "website",
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
