import type { Metadata } from "next";
import "./globals.css";
import Header from  './components/Header'
import { Montserrat, Space_Grotesk } from "next/font/google";
import Hero from './components/Hero'
import Footer from './components/Footer'
import SocialProof from "./components/SocialProof";
import WhyReWallet from "./components/WhyReWallet";
import AboutUs from "./components/AboutUs";

const montserrat = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={space_grotesk.className}>
        <Header/>
        <Hero/>
        <SocialProof/>
        <WhyReWallet/>
        <AboutUs/>
        <Footer/>
      </body>
    </html>
  );
}
