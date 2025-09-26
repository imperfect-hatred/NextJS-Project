import type { Metadata } from "next";
import "./globals.css";
import Header from  './components/Header'
import { Montserrat, Space_Grotesk } from "next/font/google";
import Hero from './components/Hero'
import Footer from './components/Footer'
import SocialProof from "./components/SocialProof";
import WhyReWallet from "./components/WhyReWallet";
import AboutUs from "./components/AboutUs";
import HowDoesItWork from "./components/HowDoesItWork";
import Testimonials from "./components/Testimonials";

const montserrat = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
})



export default function RootLayout({
}: Readonly<{
}>) {
  return (
    <html lang="ru">
      <body className={space_grotesk.className}>
        <Header/>
        <Hero/>
        <SocialProof/>
        <WhyReWallet/>
        <AboutUs/>
        <HowDoesItWork/>
        <Testimonials/>
        <Footer/>
      </body>
    </html>
  );
}
