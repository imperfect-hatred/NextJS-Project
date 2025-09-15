'use client';
import Image from "next/image";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
})

export default function Footer() {
    return(
        <div className="bg-gray-100 py-[32px] px-[16px] 2xl:px-[80px]">
            <div className="text-3xl text-[#1A1E42] pb-6">
                <a href="#" className={montserrat.className}>ReWallet</a>
            </div>
            <ul className="flex flex-col gap-4 text-gray-600">
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Why ReWallet?</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">About us</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">How does it work</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">FAQ</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Wallets</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Blog</a>
                </li>
            </ul>
            <div className="pt-[24px]">
                <Image 
                    src="/Trustpilot-Rating.svg"
                    width={177}
                    height={64}
                    alt="Rating"
                />
            </div>
            <div className="border-t-gray-300 border-t-1 flex gap-10 mt-[40px] pt-[32px]">
                <Image
                    src="/made-in-germany.png"
                    width={74}
                    height={40}
                    alt="germany"
                />
                <Image
                    src="/Bundesblock.png"
                    width={108}
                    height={40}
                    alt="germany"
                />
            </div>
            <div className="flex flex-col gap-6 pt-6">
                <p className="text-gray-400">© Copyright 2023 ReWallet</p>
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Imprint</a></li>
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

    )
}