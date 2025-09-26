import Image from "next/image";

export default function WhyReWallet() {
  return (
    <div className="bg-[#1A1E42] px-4 py-15 2xl:px-20">
      <Image src={"/Line.svg"} width={48} height={0} alt="" />
      <div className="text-white py-3">
        <h1 className="text-5xl">Why ReWallet?</h1>
        <p className="text-[#D0D5DD] text-lg pt-4">
          We had the same problem as you. After countless all-nighters and a lot
          of lost nerves, we were finally able to recover our wallets. Since
          then, we can offer our experience, know-how and toolkit to help you
          recover your wallets.
        </p>
      </div>
      <div className="flex flex-col gap-6 pt-12 min-[1125]:grid grid-cols-3 grid-row">
        <div className="bg-[#2A2D51] p-8 rounded-sm">
          <Image src={"/settings.svg"} width={44} height={44} alt="settings" />
          <h1 className="text-white text-2xl pt-6">Toolkit</h1>
          <p className="text-[#D0D5DD] text-lg pt-4">
            Based on our own experience and from work with our clients, we have
            developed our own toolkit that enables us to recover crypto wallets
            in a few steps.
          </p>
        </div>
        <div className="bg-[#2A2D51] p-8 rounded-sm">
          <Image src={"/case.svg"} width={44} height={44} alt="case" />
          <h1 className="text-white text-2xl pt-6">Experience</h1>
          <p className="text-[#D0D5DD] text-lg pt-4">
            Starting with the wallets of our friends and people we know, we have
            since helped numerous clients recover their wallets.
          </p>
        </div>
        <div className="bg-[#2A2D51] p-8 rounded-sm">
          <Image src={"/defend.svg"} width={44} height={44} alt="defend" />
          <h1 className="text-white text-2xl pt-6">Trust</h1>
          <p className="text-[#D0D5DD] text-lg pt-4">
            We know how much trust it takes to send a stranger on the internet
            details about your wallet. We use a legal contract based on law,
            which protects you comprehensively.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="block mt-12 py-[10px] px-6 text-[18px] bg-[#F7931A] text-white text-center rounded-md hover:bg-[#1A1E42] transition delay-25 duration-250 min-[1125]:justify-self-center"
      >
        Unlock your Wallet now
      </a>
    </div>
  );
}
