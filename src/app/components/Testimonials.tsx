"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="py-15 px-4">
      <div className="flex flex-col text-center items-center justify-center">
        <Image src={"/Line.svg"} width={48} height={0} alt="" />
        <h1 className="text-5xl pt-3">Testimonials</h1>
        <p className="opacity-80 pt-4">
          Don't take our word for it. See what customers are saying about us.
        </p>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        navigation={false}
        modules={[Pagination, Navigation]}
        breakpoints={{
          1125: {
            slidesPerView: 2.3,
            centeredSlides: true,
            spaceBetween: 136,
            navigation: true
          },
        }}
        className="mt-12"
      >
        <SwiperSlide className="p-6 mb-3 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            By a stupid mistake, I wrote down only 11 of 12 words of my seed
            phrase. Desperately I tried it myself but gave up after a short
            time. By chance, I came across ReWallet and asked if it would be
            possible to restore access to my wallet. Shorthand later we arranged
            a meeting in Berlin for the delivery of the seed phrase. About 4
            weeks later I got the email that they have restored the access.
            Guys, you are great, we need people like you.
          </p>
          <p>Kai Olaf W.</p>
        </SwiperSlide>

        <SwiperSlide className="p-6 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            I accidentally sent ETH to a Bitcoin address and thought my funds
            were gone forever. ReWallet's team walked me through the recovery
            process with incredible patience. Their technical expertise saved me
            from a $15,000 mistake. The service was worth every penny and the
            peace of mind is priceless.
          </p>
          <p>Sarah M.</p>
        </SwiperSlide>

        <SwiperSlide className="p-6 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            After my laptop crashed, I lost access to my wallet containing
            significant crypto assets. ReWallet helped me recover everything
            within 72 hours. Their security protocols were impeccable, and they
            maintained transparent communication throughout the entire process.
            Highly professional service I'd recommend to anyone.
          </p>
          <p>James T.</p>
        </SwiperSlide>

        <SwiperSlide className="p-6 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            My hardware wallet got damaged and I couldn't access my retirement
            crypto savings. ReWallet not only recovered my assets but also
            educated me on better security practices. They treated my case with
            urgency and care. This service is essential for the crypto space.
          </p>
          <p>Maria L.</p>
        </SwiperSlide>

        <SwiperSlide className="p-6 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            I inherited crypto assets but had no knowledge of how to access
            them. ReWallet provided end-to-end guidance and legal consultation.
            They handled everything with sensitivity and professionalism during
            a difficult time. Their holistic approach goes beyond technical
            recovery.
          </p>
          <p>Robert K.</p>
        </SwiperSlide>

        <SwiperSlide className="p-6 shadow-lg rounded-lg inset-ring-2 inset-ring-gray-200/30">
          <Image
            src={"/testimonials_rating.svg"}
            width={120}
            height={22.5}
            alt="rating"
          />
          <p className="py-6 opacity-80">
            As a crypto newbie, I fell for a phishing scam and lost access to my
            wallet. ReWallet's team was not only technically brilliant but also
            incredibly supportive. They explained each step clearly and restored
            my confidence in crypto. Their educational approach sets them apart.
          </p>
          <p>Jennifer P.</p>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-12">
        <button className="cursor-pointer flex gap-2 items-center self-center justify-center bg-[#00B67A] text-white py-2.5 px-6 rounded-lg">
          See our Reviews on 
          <div className="flex items-center">
            <Image src={'/star.svg'} width={17} height={17} alt="star" /> 
            Trustpilot
          </div>
        </button>
      </div>
    </div>
  );
}