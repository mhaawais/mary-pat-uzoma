import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const faviconVersion = "v1.2"; // Declare it here

export const metadata: Metadata = {
  title: {
    template: "%s | Marypee Official",
    default: "Marypee Official",
  },
  description: "Marypee Official - Inspiring books and blogs by Mary Pat Mbamah Uzoma on faith, life, and family.",
  icons: {
    icon: [
      `/assets/logo/windowtablogo.png?v=${faviconVersion}`,
      // "/favicon.ico",
    ],
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

