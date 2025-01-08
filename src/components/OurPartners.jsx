import Image from "next/image";
import React from "react";

const OurPartners = ({ refElement }) => {
  return (
    <div
      ref={refElement}
      className="h-[calc(100vh-72px)] flex items-center justify-center w-full xl:mt-[3%] opacity-0 fixed top-0 left-0 pt-[70px] md:pt-0"
    >
      <div className="container mx-auto px-3 2xxl:max-w-[1556px]">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <h2 className="font-semibold text-3xl sm:text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl text-black ff_raleway">
            Our Partners
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-start text-center font-medium ff_poppins xl:leading-9 2xl:!leading-[46px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[903px] w-full">
            Discover the incredible organizations we partner with to bring you
            the best opportunities and resources. Together, we’re creating
            pathways to help you achieve your goals and unlock your potential.
            Meet our trusted partners on the journey to success!
          </p>
        </div>
        <div className="flex items-center justify-center mt-[20px] lg:mt-[40px] xl:mt-[60px] 2xl:mt-[74px] gap-3 lg:gap-6 2xl:gap-[36px] flex-wrap">
          <Image
            className="w-[30%] md:w-[18%] lg:w-[18%] xl:w-[18.4%] 2xl:w-[17%]"
            src={"/assets/images/person1.png"}
            alt="our-story"
            width={873}
            height={654}
          />
          <Image
            className="w-[30%] md:w-[18%] lg:w-[18%] xl:w-[18.4%] 2xl:w-[17%]"
            src={"/assets/images/girl1.png"}
            alt="our-story"
            width={873}
            height={654}
          />
          <Image
            className="w-[30%] md:w-[18%] lg:w-[18%] xl:w-[18.4%] 2xl:w-[17%]"
            src={"/assets/images/girl2.png"}
            alt="our-story"
            width={873}
            height={654}
          />
          <Image
            className="w-[30%] md:w-[18%] lg:w-[18%] xl:w-[18.4%] 2xl:w-[17%]"
            src={"/assets/images/girl1.png"}
            alt="our-story"
            width={873}
            height={654}
          />
          <Image
            className="w-[30%] md:w-[18%] lg:w-[18%] xl:w-[18.4%] 2xl:w-[17%]"
            src={"/assets/images/person1.png"}
            alt="our-story"
            width={873}
            height={654}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
