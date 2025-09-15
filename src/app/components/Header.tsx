'use client';
import Image from "next/image";
import HamburgerComponent from "./Hamburger";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
})

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[16px] py-[24px] 2xl:px-[80px]">
            <div className="text-3xl font-Montserrat text-blue-950 min-[1125px]:hidden">
                <a href="#" className={montserrat.className}>ReWallet</a>
            </div>
        <ul className="hidden min-[1125px]:flex items-center text-base gap-8 text-gray-500 ">
            <li className="text-3xl text-blue-950"><a href="#" className={montserrat.className}>ReWallet</a></li>
            <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Why ReWallet?</a></li>
            <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">About us</a></li>
            <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">How does it work</a></li>
            <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">FAQ</a></li>
            <li>
                <a href="#" className="flex gap-2 items-center hover:text-[#F7931A] transition delay-50 duration-250">
                    Wallets
                    <Image 
                        src="arrow-bottom.svg"
                        width={15}
                        height={15}
                        alt="arrow"
                    />
                </a>
            </li>
            <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Blog</a></li>
        </ul>
        <ul className="hidden min-[1125px]:flex items-center gap-10">
            <li >
                <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-[#F7931A] transition delay-50 duration-250">
                    <Image 
                        src="language.svg"
                        width={20}
                        height={20}
                        alt="lang"
                    />
                    English
                </a>
            </li>
            <a href="#">
                <li className="border-1 px-[26px] py-[10px] rounded-md text-blue-950 hover:text-[#F7931A] transition delay-50 duration-250">
                    Start now
                </li>
            </a>
        </ul>
        <div className="text-gray-500 flex justify-end min-[1125px]:hidden">
            <HamburgerComponent/>
        </div>
    </header>
  );
}
