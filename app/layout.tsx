import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { NextUIProvider } from "@nextui-org/system";

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

export const metadata: Metadata = {
  title: "SpiritsOS",
  description: "Your own private social network with AI virtual Spirits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <Nav /> {children} <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
