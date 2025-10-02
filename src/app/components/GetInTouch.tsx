import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="px-4 py-15">
      <div className="bg-[#1A1E42] rounded-lg px-6 py-8 flex flex-col gap-8 min-[1125px]:flex-row">
        <div>
          <Image
            className="rounded-lg"
            src={"/GetInTouch.png"}
            width={160}
            height={160}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[44px] text-white">Get in touch!</h1>
          <span className="text-gray-300 text-[22px] pt-4">
            Your contact - Bastian Knaf
          </span>
          <div className="flex flex-col gap-8 pt-8 min-[1125px]:flex-row">
            <div className="flex text-gray-300 text-[22px] items-center gap-2.5">
              <Image src={"/email.svg"} width={24} height={24} alt="" />
              <span>team@rewallet.de</span>
            </div>
            <div className="flex text-gray-300 text-[22px] items-center gap-2.5">
              <Image src={"/phone.svg"} width={24} height={24} alt="" />
              <span>+49 (0) 30 2359 13270</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
