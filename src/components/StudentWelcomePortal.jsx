import React from "react";
import GradientButton from "./common/GradientButton";
import { Input } from "./ui/input";

const StudentWelcomePortal = () => {
  return (
    <div className=" py-5 bg-[url('/assets/images/student_portal.webp')] flex items-center justify-center bg-cover bg-center min-h-screen w-full px-3">
      <div>
        <h2 className="lg:mb-3 xl:mb-[28px] text-2xl md:text-3xl lg:text-4xl xl:text-[50px] 2xl:text-[50px] 2xxl:text-[56px] font-bold text-[#3777FF] text-center ff_raleway lg:leading-[55px] xl:leading-[70px] 2xl:leading-[65.74px] max-w-[535px] mx-auto">
          Hey, Somya
        </h2>
        <p className="text-center font-medium md:text-lg lg:text-xl xl:text-[25px] 2xl:text-[28px] 2xxl:text-[32px] ff_poppins text-[#3777FF] lg:leading-7 xl:leading-9 2xl:!leading-[48px] w-full max-w-[789px] mx-auto">
          Let’s get to know you better so we can map out your perfect study
          journey
        </p>
        <div className="flex flex-col gap-5 2xl:gap-6 2xxl:gap-8 mt-11 2xl:mt-16 mb-7 lg:mb-10 xl:mb-12 2xl:mb-[64px]">
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Name"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Middle Name (Optional)"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Last Name"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Email Address"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Primary Contact Number"
          />
        </div>
        <GradientButton text={"Verify"} />
      </div>
    </div>
  );
};

export default StudentWelcomePortal;
