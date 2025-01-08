import Image from "next/image";
import React from "react";

const OurStory = ({  refElement}) => {
  return (
    <div className="h-[calc(100vh-72px)] flex items-center justify-center"   ref={refElement}>
      <div className="flex flex-col gap-8 lg:gap-11 xl:gap-[52px] lg:flex-row items-center container mx-auto px-3 2xxl:max-w-[1556px]">
        <div className="w-full lg:w-[45%] xl:w-1/2 2xxl:w-[56%]">
          <Image
            className="w-full"
            src={"/assets/images/our_story.png"}
            alt="our-story"
            width={873}
            height={654}
          />
        </div>
        <div className="w-full lg:w-1/2 2xl:w-[40%]">
          <p className="text-base sm:text-lg md:text-xl lg:text-start text-center font-medium ff_poppins 2xl:!leading-[46px]">
            Founded in April 2023, Daltin aims to transform education by
            blending global best practices with cutting-edge technology.
            Partnering with over 500 institutions worldwide, we provide
            innovative, tech-driven study options that meet the evolving needs
            of students. Our AI-based portal combines traditional teaching with
            advanced tools, including virtual assistants and chatbots, for
            real-time support, creating a dynamic and interactive learning
            experience. Daltin is pioneering a new era in international
            education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
