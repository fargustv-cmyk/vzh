import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font
const forum = localFont({
  src: "../public/fonts/Forum-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-forum",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vozhakin.group",
  description: "Yasha Vozhakin — Founder by Vozhakin Group",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "vozhakin.group",
    description: "Yasha Vozhakin — Founder by Vozhakin Group",
    url: "https://vozhakin.group",
    siteName: "vozhakin.group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// -----------------------------
//   ROOT LAYOUT
// -----------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} ${poppins.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
