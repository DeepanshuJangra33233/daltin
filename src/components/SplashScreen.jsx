"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const SplashScreen = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(card1.current, {
      x: "50vw",
      scale: 1,
      duration: 2,
    })
      .to(card1.current, {
        x: "10vw",
        scale: 0.9,
        z: 1,
        duration: 2,
      })
      .to(
        card2.current,
        {
          x: "40vw",
          scale: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(card2.current, {
        x: "0vw",
        scale: 0.9,
        z: 2,
        duration: 2,
      })
      .to(
        card3.current,
        {
          x: "50vw",
          scale: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(card3.current, {
        x: "0",
        scale: 0.9,
        z: 2,
        duration: 2,
      });
  }, []);

  return (
    <div className="h-screen bg-[url('/assets/images/about_page_bg.webp')] bg-cover bg-center">
      <div className="container mx-auto px-3 2xxl:max-w-[1556px] relative h-full">
        <div
          ref={card1}
          className="absolute top-[50%] -translate-y-1/2 scale-90 left-0"
        >
          <div className="card_parent max-w-[400px] 2xl:max-w-[539px] flex flex-col gap-[38.4px] p-[38.4px] bg-white">
            <Image
              src="/assets/images/find_perfect_match.webp"
              alt="splash"
              width={462}
              height={424}
            />
            <div>
              <p className="text-black ff_raleway sm:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[33.6px] font-semibold text-center leading-[39.45px] mb-5">
                Find Your Perfect Match
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[28.8px] text-black ff_poppins text-center 2xl:!leading-[43.2px]">
                Instantly check your eligibility for top universities and
                courses tailored to your goals
              </p>
            </div>
          </div>
        </div>
        <div
          ref={card2}
          className="absolute top-[50%] -translate-y-1/2 scale-90 left-[90px]"
        >
          <div className="card_parent max-w-[400px] 2xl:max-w-[539px] flex flex-col gap-[38.4px] p-[38.4px] bg-white">
            <Image
              src="/assets/images/stay_in_loop.webp"
              alt="splash"
              width={462}
              height={424}
            />
            <div>
              <p className="text-black ff_raleway sm:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[33.6px] font-semibold text-center leading-[39.45px] mb-5">
                Stay in the Loop, Always
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[28.8px] text-black ff_poppins text-center 2xl:!leading-[43.2px]">
                Track your application progress in real-time and never miss a
                single update
              </p>
            </div>
          </div>
        </div>
        <div
          ref={card3}
          className="absolute top-[50%] -translate-y-1/2 scale-90 left-0"
        >
          <div className="card_parent max-w-[400px] 2xl:max-w-[539px] flex flex-col gap-[38.4px] p-[38.4px] bg-white">
            <Image
              src="/assets/images/expert_support.webp"
              alt="splash"
              width={462}
              height={424}
            />
            <div>
              <p className="text-black ff_raleway sm:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[33.6px] font-semibold text-center leading-[39.45px] mb-5">
                Expert Support, Anytime
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[28.8px] text-black ff_poppins text-center 2xl:!leading-[43.2px]">
                Connect directly with admission experts through chats and calls,
                all within the app
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/register"
          className="let_GetStarted_Button rounded-xl py-4 px-8 text-white font-medium duration-300 hover:bg-white ff_poppins fixed hover:text-[#3777FF] bottom-5 2xl:bottom-[64px] left-1/2 -translate-x-1/2"
        >
          Let's get started
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
