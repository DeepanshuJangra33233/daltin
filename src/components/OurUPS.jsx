import Image from "next/image";
import React from "react";

const OurUPS = ({refElement}) => {
  return (
    <div ref={refElement} className="h-[calc(100vh-72px)] flex items-center  justify-center opacity-0 pt-[70px] md:pt-0 w-full fixed top-0 left-0">
      <div className="flex justify-between flex-col-reverse gap-3 sm:gap-5 md:gap-8 lg:gap-11 xl:gap-[52px] lg:flex-row items-center container mx-auto px-3 2xxl:max-w-[1556px]">
        <div className="w-full lg:w-1/2 2xl:w-[40%]">
          <h2 className="font-semibold text-3xl sm:text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl text-black ff_raleway">
            Our USPs
          </h2>
          <p className="font-medium ff_poppins text-center lg:text-start text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] mb-3 mt-1">
            Unique selling points encompass:
          </p>
          <ul className="ps-5">
            <li className="text-base sm:text-lg md:text-xl lg:text-start text-start font-medium ff_poppins xl:leading-9 2xl:!leading-[46px] list-disc">
              Course Finder seamlessly integrated with student information,
              providing an extensive and swift list of available university and
              course selections.
            </li>
            <li className="text-base sm:text-lg md:text-xl lg:text-start text-start font-medium ff_poppins xl:leading-9 2xl:!leading-[46px] list-disc">
              My Office, a comprehensive CRM tool designed for agents and their
              teams, facilitates access to all documentation, tracks employee
              performance, and offers the flexibility of branch integration.
            </li>
            <li className="text-base sm:text-lg md:text-xl lg:text-start text-start font-medium ff_poppins xl:leading-9 2xl:!leading-[46px] list-disc">
              An intuitive Easy Dashboard featuring scholarships, open intakes,
              application fee waivers, and the ability to explore top colleges
              and universities at a single click.
            </li>
          </ul>
        </div>
        <div className="w-[65%] lg:w-[45%] xl:w-1/2 2xxl:w-[43%]">
          <Image
            className="w-full"
            src={"/assets/images/our_ups.png"}
            alt="our-story"
            width={873}
            height={654}
          />
        </div>
      </div>
    </div>
  );
};

export default OurUPS;
