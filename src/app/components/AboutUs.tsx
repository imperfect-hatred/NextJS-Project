import Image from "next/image";
import ReadMore from "./ReadMore";

export default function AboutUs() {
  return (
    <div className="py-15 px-4 flex flex-col items-center min-[1125]:flex-row 2xl:px-20"> 
      <Image className="hidden pr-15 min-[1125]:block"
        src={"/About-image.png"}
        width={626}
        height={636}
        alt=""
        />
      <div className="text-[#1A1E42]">
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className=" text-5xl pt-3">About us: <br /> Our Story and Mission</h1>
        <p className="opacity-80 pt-8">
          We explored various aspects of cryptocurrencies, including using
          Bitcoin for payments, mining, and trading with different strategies.
          We also considered starting a company and extensively researched
          Ethereum and smart contracts. However, we struggled to find a viable
          business model. Concerns about government intervention and the
          potential ban of Bitcoin always lingered. As a result, we pursued
          other entrepreneurial ventures and found some validation when the ICO
          wave ended with a crash.
        </p>
        <p className="opacity-80 pt-8">
          The positive developments in 2020 took us by surprise. The influx of
          capital from established institutions, including the financial
          industry, made it increasingly challenging for the government to ban
          Bitcoin. However, we acknowledge that they may still attempt to do so.
          Recently, when we attempted to transfer our old, now more valuable
          Bitcoin and Ether to a new wallet, we discovered that we had lost
          access to them completely. We were unable to locate our wallets in the
          first place.
        </p>
        <ReadMore/>
      </div>
        <Image className=" min-[1125]:hidden"
        src={'/About-image.png'}
        width={626}
        height={636}
        alt=""
        />
    </div>
  );
}
