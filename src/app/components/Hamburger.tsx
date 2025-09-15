"use client";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger rounded
        size={24} 
        toggled={open} 
        toggle={setOpen} 
      />
        {open && <div className="fixed top-0 right-0
        w-[360px] h-screen py-[24px] px-[16px]
        text-black bg-gray-100 z-100">
            <main className="flex-col  justify-between">
                <div className="flex justify-end text-gray-500">
                <Hamburger rounded 
                size={24} 
                toggled={open} 
                toggle={setOpen} 
                />
                </div>
                <ul className="flex-col items-center text-base text-gray-500 text-right">
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">Why ReWallet?</a></li>
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">About us</a></li>
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">How does it work</a></li>
                    <li><a href="#" className="hover:text-[#F7931A] transition delay-50 duration-250">FAQ</a></li>
                    <li>
                        <a href="#" className="flex gap-2 items-center justify-end hover:text-[#F7931A] transition delay-50 duration-250 text-right">
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
                <ul className="flex-col gap-10">
                    <li>
                        <a href="#" className="flex items-center justify-end gap-1 text-gray-500 hover:text-[#F7931A] transition delay-50 duration-250 ">
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
                        <li className="border-1 text-center px-[26px] py-[10px] rounded-sm text-blue-950 hover:text-[#F7931A] transition delay-50 duration-250">
                            Start now
                        </li>
                    </a>
                </ul>
            </main>

        </div>
        }    
    </div>
    
  );
}
