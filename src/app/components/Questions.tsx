"use client";

import Image from "next/image";
import { useState } from "react";

interface QuestionItem {
  question: string;
  answer: string;
}

export default function Questions() {
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const questions: QuestionItem[] = [
    {
      question: "Can you recover my wallet?",
      answer: `We cannot guarantee that we will be able to help you with your wallet. However, we have already helped many clients with the recovery of their wallets in the past. Through our word libraries, our software tools and our optimized scripts, which we run on high-performance hardware, we can help you find your wallet password or your seedphrase. We can also help you with the physical recovery of your wallet. Please send us a request via the contact form and we will give you feedback if and how we can help you.`
    },
    {
      question: "Which wallets do you support?",
      answer: `We support a wide range of wallets including MetaMask, Trust Wallet, Ledger, Trezor, and many others. Our team is constantly updating our capabilities to support new wallet types as they emerge in the market.`
    },
    {
      question: "How do I start a request?",
      answer: `To start a recovery request, simply fill out our contact form with details about your situation. Include information about the wallet type, what you remember about your password or seed phrase, and any other relevant details. Our team will review your case and get back to you within 24-48 hours.`
    },
    {
      question: "How does payment work?",
      answer: `We operate on a "no recovery, no fee" basis. If we successfully recover your wallet, we charge a percentage of the recovered funds. The exact percentage depends on the complexity of the case. There are no upfront costs or hidden fees.`
    },
    {
      question: "Can I communicate with you in encrypted form?",
      answer: `Yes, we prioritize security and privacy. We offer encrypted communication channels including PGP encryption for emails and secure messaging platforms. Upon engagement, we will provide you with our encryption details for secure communication.`
    }
  ];

  return (
    <div className="bg-gray-50 py-15 px-4 flex flex-col gap-6 min-[1125px]:gap-15">
      <div className="flex flex-col items-center text-center">
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className="text-5xl pt-3">Frequently asked questions</h1>
      </div>
      <div className="flex flex-col gap-8 min-[800px]:px-20 min-[1125px]:px-40 min-[1500px]:px-80">
        {questions.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-[22px]">{item.question}</h1>
              <Image
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer"
                src={openQuestions[index] ? "/minus-button.svg" : "/plus-button.svg"}
                width={24}
                height={24}
                alt=""
              />
            </div>
            {openQuestions[index] && (
              <p className="text-lg text-[#1A1E42] opacity-80 mt-2">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}