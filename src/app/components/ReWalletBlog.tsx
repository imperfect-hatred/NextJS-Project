import Image from "next/image";

export default function ReWalletBlog() {
  return (
    <div className="py-15 px-4 2xl:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className="text-5xl pt-3">Rewallet blog</h1>
        <p className="opacity-80 pt-3">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div className="flex flex-col justify-between min-[1125px]:flex-row pt-12 gap-6">
        <div>
          <div className="flex flex-col">
            <Image src={"/BlogImage1.svg"} width={1124} height={212} alt="" />
            <div className="flex items-center justify-between py-5 text-gray-400">
              <div className="flex items-center gap-2 ">
                <Image
                  className="rounded-4xl"
                  src={"/BrunoKrauss.png"}
                  width={46}
                  height={46}
                  alt=""
                />
                <p>Bruno Krauss</p>
              </div>
              <p>28/04/2023</p>
            </div>
            <a className="flex items-start text-2xl cursor-pointer gap-3">
              How to Recover Your Ethereum Presale Wallet: Tips To Recover Your
              Presale ETH
              <Image src={"/arrow-blog.svg"} width={32} height={32} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <Image src={"/BlogImage2.svg"} width={1124} height={212} alt="" />
            <div className="flex items-center justify-between py-5 text-gray-400">
              <div className="flex items-center  gap-2 ">
                <Image
                  className="rounded-4xl"
                  src={"/BrunoKrauss.png"}
                  width={46}
                  height={46}
                  alt=""
                />
                <p>Bruno Krauss</p>
              </div>

              <p>28/04/2023</p>
            </div>
            <a className="flex items-start text-2xl cursor-pointer gap-3">
              Trezor Lost Passphrase: What Is an Optional Passphrase and What to
              Do If You Lose It
              <Image src={"/arrow-blog.svg"} width={32} height={32} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <Image src={"/BlogImage3.svg"} width={1124} height={212} alt="" />
            <div className="flex items-center justify-between py-5 text-gray-400">
              <div className="flex items-center gap-2 ">
                <Image
                  className="rounded-4xl"
                  src={"/BastianKnaf.png"}
                  width={46}
                  height={46}
                  alt=""
                />
                <p>Bastian Knaf</p>
              </div>
              <p>28/04/2023</p>
            </div>
            <a className="flex items-start text-2xl cursor-pointer gap-3">
              Lost or Invalid Trezor Seed Phrase? How to Recover Trezor Wallet &
              Troubleshoot Issues
              <Image src={"/arrow-blog.svg"} width={32} height={32} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <a
          href="#"
          className="block py-[10px] px-6 text-[18px] bg-[#F7931A] text-white text-center rounded-md hover:bg-[#1A1E42] transition delay-25 duration-250 min-[1125]:justify-self-center"
        >
          See more articles
        </a>
      </div>
    </div>
  );
}
