import Image from "next/image";
import React from "react";

const About = ({ refElement }) => {
  return (
    <div
      className="relative mt-[17%] lg:mt-[35%] xl:mt-[25%] 2xl:mt-[15%]"
      ref={refElement}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center flex-wrap container mx-auto px-3 2xxl:max-w-[1556px]">
        <div className="lg:w-[41%]">
          <h2 className="font-semibold mt-5 lg:mt-0 text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl text-black ff_raleway">
            About The Company
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-start text-center font-medium ff_poppins 2xl:!leading-[46px] mt-[18px]">
            At Daltin, we connect students with universities worldwide through
            our innovative all-in-one platform, streamlining the student
            recruiting process. We empower students with educational
            opportunities that enhance their quality of life and promote global
            betterment. By bridging international education providers and
            recruiting partners, we provide students access to diverse study
            options from anywhere in the world, transforming lives through
            education.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="lg:absolute right-0 w-full lg:w-[55%] -top-[15%]">
            <Image
              className="w-full"
              src={"/assets/images/about_the_company.png"}
              alt="about"
              width={1093}
              height={570}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
