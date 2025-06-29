import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilkomp 24",
  description: "Selamat datang di halaman resmi Angkatan 2024 Ilmu Komputer. Temukan informasi kegiatan, dokumentasi, dan semangat kolaborasi mahasiswa Ilkom 2024 yang inovatif dan inspiratif.",
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  authors: [{ name: "Ilkomp 24 Team" }],
  keywords: ["ilkom", "ilmu komputer", "angkatan 2024", "UHO ilmu komputer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap" rel="stylesheet" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
