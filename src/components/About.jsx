import Image from "next/image";
import React from "react";

const About = ({ refElement }) => {
  return (
    <div
      // className=" w-full fixed top-0 left-0"
      className=" h-[calc(100vh-72px)] flex items-center justify-center xl:mt-[2.4%] 2xl:mt-[3%] w-full fixed top-0 left-0 pt-[70px] md:pt-0"
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
          <div className="lg:absolute right-0 w-full lg:w-[55%] top-[17%]">
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
