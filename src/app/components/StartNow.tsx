"use client";

import Image from "next/image";
import { useState } from "react";

export default function StartNow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    {
      title: "What wallet is it?",
      options: ["Bitcoin", "Ethereum (ERC-20)", "Dogecoin", "Other"],
    },
    {
      title: "What is your problem?",
      options: [
        "Forgot password",
        "Lost seed phrase",
        "Hardware wallet broken",
        "Other problem",
      ],
    },
    {
      title: "How can we contact you?",
      options: ["Email", "Telegram", "WhatsApp", "Other method"],
    },
    {
      title: "Additional information",
      options: [
        "I have backup files",
        "I remember part of password",
        "No additional info",
        "Other details",
      ],
    },
  ];

  const handleOptionSelect = (option: string) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const currentStepData = steps[currentStep];

  if (isCompleted) {
    return (
      <div className="py-15 px-4 flex flex-col gap-12 min-[1125px]:flex-row 2xl:px-20">
        <div>
          <Image src={"/Line.svg"} width={48} height={0} alt="" />
          <h1 className="text-5xl pt-3">Start now</h1>
          <p className="text-lg text-[#1A1E42] opacity-80 pt-4">
            You have lost access to your crypto wallet? Then you are in the
            right place. Submit your request in just a few steps.
          </p>
          <ul className="pt-8">
            <li className="flex items-start pt-4 gap-3">
              <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
              <span className="text-lg text-[#1A1E42] opacity-80">
                Free evaluation of your case
              </span>
            </li>
            <li className="flex items-start pt-4 gap-3">
              <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
              <span className="text-lg text-[#1A1E42] opacity-80">
                Success Based Remuneration
              </span>
            </li>
            <li className="flex items-start pt-4 gap-3">
              <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
              <span className="text-lg text-[#1A1E42] opacity-80">
                Service agreement in compliant with EU and US Law
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#1A1E42] px-6 py-8 rounded-lg flex flex-col items-center justify-center gap-10 min-[1125px]:min-w-[616px]">
          <div className="text-white text-4xl font-bold">Success!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-15 px-4 flex flex-col gap-12 min-[1125px]:flex-row 2xl:px-20">
      <div>
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className="text-5xl pt-3">Start now</h1>
        <p className="text-lg text-[#1A1E42] opacity-80 pt-4">
          You have lost access to your crypto wallet? Then you are in the right
          place. Submit your request in just a few steps.
        </p>
        <ul className="pt-8">
          <li className="flex items-start pt-4 gap-3">
            <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
            <span className="text-lg text-[#1A1E42] opacity-80">
              Free evaluation of your case
            </span>
          </li>
          <li className="flex items-start pt-4 gap-3">
            <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
            <span className="text-lg text-[#1A1E42] opacity-80">
              Success Based Remuneration
            </span>
          </li>
          <li className="flex items-start pt-4 gap-3">
            <Image src={"/check-circle.svg"} width={26} height={26} alt="" />
            <span className="text-lg text-[#1A1E42] opacity-80">
              Service agreement in compliant with EU and US Law
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-[#1A1E42] px-6 py-8 rounded-lg flex flex-col items-center gap-10 min-[1125px]:min-w-[616px]">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center w-full max-w-xs">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  <div
                    className="w-5 h-5 rounded-full border border-white flex items-center justify-center relative z-10"
                    style={{ backgroundColor: "#2A2D51" }}
                  >
                    {index === currentStep && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-white text-[22px] text-center">
          {currentStepData.title}
        </h1>

        <ul className="flex flex-col justify-between gap-3 w-full text-center min-[1125px]:grid min-[1125px]:grid-cols-2 min-[1125px]:grid-rows-2">
          {currentStepData.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="bg-white cursor-pointer py-4 rounded-lg hover:bg-gray-300 transition delay-50 duration-200"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
