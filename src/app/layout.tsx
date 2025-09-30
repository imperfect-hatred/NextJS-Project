import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";
import { ReactNode } from "react";

const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="ru">
      <body className={space_grotesk.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}