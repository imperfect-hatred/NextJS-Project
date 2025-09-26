import Image from "next/image";
import Number from "./Number";

export default function HowDoesItWork() {
  return (
    <div className="bg-[#1A1E42] text-white py-15 px-4 2xl:px-20">
      <div>
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className=" text-5xl pt-3">Our process</h1>
        <p className="opacity-80 pt-4">
          Just fill out our questionnaire and we will see if we can help you.
        </p>
      </div>
      <div className="flex flex-col py-12 min-[1125px]:grid grid-cols-2 gap-12">
        <div>
          <Number num={1} />
          <h1 className="text-2xl pt-5">Fill out our questionnaire</h1>
          <p className="opacity-80 pt-3 pb-6">
            By clicking on "Start now" you can easily access our questionnaire,
            which we use to collect the first important information.
          </p>
        </div>
        <div>
          <Number num={2} />
          <h1 className="text-2xl pt-5">We check your request</h1>
          <p className="opacity-80 pt-3 pb-6">
            Based on your information, we will check whether we can help you. We
            promise that we will get back to you with our assessment within 24
            hours.
          </p>
        </div>
        <div>
          <Number num={3} />
          <h1 className="text-2xl pt-5">We send you the contract</h1>
          <p className="opacity-80 pt-3 pb-6">
            If we can help you, we will send you our contract for your legal
            protection. You then send us the other information we need for our
            work.
          </p>
        </div>
        <div>
          <Number num={4} />
          <h1 className="text-2xl pt-5">We get to work</h1>
          <p className="opacity-80 pt-3 pb-6">
            Once we have all the required information, we will start immediately
            and can restore your wallet within 48-72h, in the best case.
          </p>
        </div>
      </div>
      <div className="pt-12">
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className="text-5xl pt-3">Our promise to you</h1>
        <div className="flex flex-col grid-cols-3 grid-rows-1 gap-6 pt-12 min-[1125px]:grid">
          <div className="bg-[#2A2D51] p-8 rounded-lg">
            <Image src={"/rocket.svg"} width={44} height={44} alt="" />
            <h1 className="text-2xl pt-6">Speed</h1>
            <p className="opacity-80 pt-3 pb-6">
              We will give you feedback within 24 hours following your request.
              If we can help you, we usually have your wallet restored after a
              couple of days.
            </p>
          </div>
          <div className="bg-[#2A2D51] p-8 rounded-md">
            <Image src={"/wallet.svg"} width={44} height={44} alt="" />
            <h1 className="text-2xl pt-6">Success-based commission</h1>
            <p className="opacity-80 pt-3 pb-6">
              You are guaranteed not to pay anything until you have access to
              your wallet again. In case of a successful recovery, we charge a
              commission of 20% of your wallet.
            </p>
          </div>
          <div className="bg-[#2A2D51] p-8 rounded-md">
            <Image src={"/settings.svg"} width={44} height={44} alt="" />
            <h1 className="text-2xl pt-6">Service</h1>
            <p className="opacity-80 pt-3 pb-6">
              You can always call or write us to talk about your problems with
              your wallet.
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
    </div>
  );
}
