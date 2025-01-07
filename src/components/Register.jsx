import React from "react";
import { Input } from "@/components/ui/input";
import GradientButton from "./common/GradientButton";
import Link from "next/link";
import { Apple, Google } from "./common/Icons";

const Register = () => {
  return (
    <div className="flex align-center h-screen w-full flex-col lg:flex-row justify-center lg:justify-between">
      <div className="bg-[url('/assets/images/auth.webp')] hidden bg-right bg-cover lg:bg-center px-3 lg:w-[42%] h-full lg:flex flex-col justify-center items-center">
        <h2 className="lg:mb-7 xl:mb-10 2xl:mb-16 text-2xl md:text-3xl lg:text-4xl xl:text-[50px] 2xl:text-[50px] 2xxl:text-[56px] font-bold text-white text-center ff_raleway lg:leading-[55px] xl:leading-[70px] 2xl:leading-[65.74px] max-w-[535px] mx-auto">
          Your Journey Abroad Starts Here!
        </h2>
        <p className="text-center font-medium md:text-lg lg:text-xl xl:text-[25px] 2xl:text-[28px] 2xxl:text-[32px] ff_poppins text-white lg:leading-7 xl:leading-9 2xl:!leading-[48px] w-full max-w-[558px] mx-auto">
          Join thousands of students who’ve found their dream universities with
          us.
        </p>
      </div>
      <div className="lg:w-[58%] max-w-[551px] mx-auto w-full h-full lg:flex flex-col justify-center items-center p-5">
        <p className="font-bold ff_raleway text-center text-3xl xl:text-4xl 2xl:text-[48px] text-[#3777FF] leading-[56.35px] mb-5 2xl:mb-9 2xxl:mb-16">
          Create an account
        </p>
        <form className=" w-full flex flex-col gap-5 2xl:gap-7 2xxl:gap-10">
          <Input
            className="border-[1.5px] placeholder:text-[#959595] font-medium !text-xl border-black text-[#3777ff] h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Full Name"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] font-medium !text-xl border-black text-[#3777ff] h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Email Address"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] font-medium !text-xl border-black text-[#3777ff] h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Password"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] font-medium !text-xl border-black text-[#3777ff] h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Confirm Address"
          />
          <GradientButton text={"Register Now"} />
        </form>
        <p className="text-lg text-black mt-[24px] leading-[27px] text-center">
          Already have an account ?{" "}
          <Link href={"/"} className="text-[#3777FF] font-bold">
            Login Now
          </Link>
        </p>
        <p className="text-center ff_poppins text-xl leading-[30px] text-[#3777ff] before:w-[43%] lg:before:w-[47%] after:w-[43%] lg:after:w-[47%] relative before:h-[1px] max-w-[551px] after:h-[1px] before:bg-black w-full after:bg-black before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0">
          OR
        </p>
        <div className="gap-4 py-5 2xl:pt-8 2xxl:mt-[44px] flex items-center justify-center w-full max-w-[551px]">
          <div className="border border-black flex items-center justify-center rounded-[4px] py-2 sm:py-3 lg:py-[14px] w-full cursor-pointer">
            <Google />
          </div>
          <div className="border border-black flex items-center justify-center rounded-[4px] py-2 sm:py-3 lg:py-[14px] w-full cursor-pointer">
            <Apple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
