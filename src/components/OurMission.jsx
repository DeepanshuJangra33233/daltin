import Image from "next/image";
import React from "react";

const OurMission = ({  refElement}) => {
  return (
    <div   ref={refElement} className="h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="flex flex-col-reverse gap-3 sm:gap-5 md:gap-8 lg:gap-11 xl:gap-[52px] lg:flex-row items-center container mx-auto px-3 2xxl:max-w-[1556px]">
        <div className="w-full lg:w-1/2 2xl:w-[40%]">
          <h2 className="font-semibold mt-5 lg:mt-0 text-3xl sm:text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl text-black ff_raleway">
            Our Mission & Vision
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-start text-center font-medium ff_poppins xl:leading-9 2xl:!leading-[46px]">
            We seek to simplify the educational landscape using technology. We
            are empowering students to make more informed decisions about their
            educational paths. Everything is right here, with us, right now.
            <br /> We seek to simplify the educational landscape using
            technology. We are empowering students to make more informed
            decisions about their educational paths. Everything is right here,
            with us, right now.
          </p>
        </div>
        <div className="w-full lg:w-[45%] xl:w-1/2 2xxl:w-[56%]">
          <Image
            className="w-full"
            src={"/assets/images/our_mission.png"}
            alt="our-story"
            width={873}
            height={654}
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
