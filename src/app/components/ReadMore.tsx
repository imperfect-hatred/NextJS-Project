"use client";

import Image from "next/image";
import { useState } from "react";

export default function ReadMore() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <p className="opacity-80 pt-8">
        {isOpen
          ? `In the early days, our focus was on the grand vision of decentralization,
            often overlooking the practicalities of personal security. We treated private
            keys and seed phrases as an afterthought, a mundane detail compared to the
            revolutionary technology they protected. We were architects dreaming of cathedrals,
            forgetting the importance of the foundation. That lesson came at a cost. Years
            later, discovering that access to a wallet—and the appreciating assets within—was
            lost to a forgotten password or a misplaced hardware device was a humbling
            experience.`
          : null}
      </p>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex flex-row text-[#F7931A] cursor-pointer pt-0 gap-1"
      >
        {isOpen ? "Show less" : "Read more"}
        <Image
          src={isOpen ? "/arrow-less.svg" : "/arrow-more.svg"}
          width={24}
          height={24}
          alt=""
        />
      </button>
    </div>
  );
}
