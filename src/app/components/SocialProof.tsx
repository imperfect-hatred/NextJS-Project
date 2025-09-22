import Image from "next/image";

export default function SocialProof() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 pb-10 px-3.5 gap-3 flex-row justify-between items-center min-[1125px]:flex  2xl:px-20 ">
      <a href="#" className="w-40">
        <Image
          src={"/finanzen.net.png"}
          width={160}
          height={42}
          alt="finanzen"
        />
      </a>
      <a href="#" className="w-40">
        <Image 
            src={"/btc-echo.png"}
            width={160} 
            height={42} 
            alt="btc-echo" 
         />
      </a>
      <a href="#" className="w-40">
        <Image
          src={"/finanzfluss.png"}
          width={160}
          height={42}
          alt="finanzfluss"
        />
      </a>
      <a href="#" className="w-40">
        <Image
          src={"/cointelegraph.png"}
          width={160}
          height={42}
          alt="cointg"
        />
      </a>
      <a href="#" className="w-40">
        <Image
          src={"/blocktrainer.png"}
          width={160}
          height={42}
          alt="blocktrainer"
        />
      </a>
      <a href="#" className="w-40">
        <Image
          src={"/bitcoin2go.png"}
          width={160}
          height={42}
          alt="bitcoin2go"
        />
      </a>
    </div>
  );
}
