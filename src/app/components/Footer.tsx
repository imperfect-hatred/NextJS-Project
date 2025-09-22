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
            <div className="flex flex-col items-start min-[1125px]:flex-row min-[1125px]:items-center justify-between">
                <div>
                    <div className="text-3xl text-[#1A1E42] pb-6">
                        <a href="#" className={montserrat.className}>ReWallet</a>
                    </div>
                    <ul className="flex flex-col gap-4 text-gray-600 min-[1125px]:flex-row min-[1125px]:gap-8">
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
                        <li className="hidden min-[1125px]:block">
                            <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Imprint</a>
                        </li>
                        <li className="hidden min-[1125px]:block">
                            <a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Privacy Policy</a>
                        </li> 
                    </ul>
                </div>
                <div className="pt-[24px] min-[1125px]:pt-0">
                        <Image 
                            src="/Trustpilot-Rating.svg"
                            width={177}
                            height={64}
                            alt="Rating"
                        />
                </div>
            </div>
            <div className="border-t-gray-300 border-t-1 pt-[32px] mt-[40px] flex flex-col items-start justify-between min-[1125px]:flex-row  min-[1125px]:items-center">
                <div className="flex gap-10 ">
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
                        alt="blockchain"
                    />
                </div>
                <div className="flex flex-col gap-6 pt-6 min-[1125px]:pt-0">
                    <p className="text-gray-400">© Copyright 2023 ReWallet</p>
                    <ul className="flex gap-4 min-[1125px]:hidden">
                        <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Imprint</a></li>
                        <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="hidden flex-row gap-6 min-[1125px]:flex">
                    <a href="#">
                        <Image
                        src={"/X.svg"}
                        width={24}
                        height={24}
                        alt="X"
                        />
                    </a>
                    <a href="#">
                        <Image
                        src={"/in.svg"}
                        width={24}
                        height={24}
                        alt="in"
                        />
                    </a>
                    <a href="#">
                        <Image
                        src={"/instagram.svg"}
                        width={24}
                        height={24}
                        alt="instagram"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}