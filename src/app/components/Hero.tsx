"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col px-[16px] py-[40px] text-[#1A1E42] min-[1125px]:flex-row items-center 2xl:px-[80px]">
            <div>
                <ul>
                    <li>
                        <h1 className="text-5xl">
                        Regain access to your{" "}
                        <div className="text-[#F7931A]">crypto wallet</div>
                        </h1>
                    </li>
                    <li>
                        <p className="py-[24px] text-[18px] opacity-80 z-0 ">
                        You've lost access to your crypto wallet? Then you've come to the
                        right place. We can help you recover your wallet - quickly, easily
                        and on a pure success basis. You don't pay anything until you have
                        access to your wallet again.
                        </p>
                    </li>
                    <a href="#">
                        <li className="mt-[24px] py-[10px] text-[18px] bg-[#F7931A] text-white text-center rounded-md hover:bg-[#1A1E42] transition delay-25 duration-250">
                        {" "}
                        Unlock your Wallet now
                        </li>
                    </a>
                </ul>
                <div className="text-gray-400 mt-[48px] mb-[40px]">
                <p>Our most recovered wallets:</p>
                <ul className="grid grid-cols-2 gap-4 pb-[16px] pt-[16px]">
                    <li className="flex items-center gap-2">
                    <Image
                        src="Ledger-Nano-S-logo.svg"
                        width={40}
                        height={40}
                        alt="Ledger"
                    />
                    <p className="text-[16px]">Ledger Nano S</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image
                        src="Trezor-Wallet-logo.svg"
                        width={40}
                        height={40}
                        alt="Trezor"
                    />
                    <p className="text-[16px]">Trezor Wallet</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image
                        src="Blockchain-logo.svg"
                        width={40}
                        height={40}
                        alt="Blockchain"
                    />
                    <p className="text-[16px]">Blockchain.com</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image
                        src="Electrum-Wallet-logo.svg"
                        width={40}
                        height={40}
                        alt="Electrum"
                    />
                    <p className="text-[16px]">Electrum Wallet</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image
                        src="Multibit-Wallet-logo.svg"
                        width={40}
                        height={40}
                        alt="Multibit"
                    />
                    <p className="text-[16px]">Multibit Wallet</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image
                        src="Bitcoin-core-logo.svg"
                        width={40}
                        height={40}
                        alt="Bitcoin"
                    />
                    <p className="text-[16px]">Bitcoin core</p>
                    </li>
                </ul>
                <p className="pb-[40px]">and many others.</p>
                </div>
            </div>
                <Image src="/Hero-image.png" width={720} height={720} alt="Bitcoin" />
    </div>
  );
}
