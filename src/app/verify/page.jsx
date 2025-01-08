"use client";
import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import GradientButton from "./common/GradientButton";
import Link from "next/link";
import GradientButton from "@/components/common/GradientButton";
const StudentVerifyPortal = () => {
  return (
    <div className=" py-5 relative bg-[url('/assets/images/student_portal_verify.webp')] flex items-center justify-center bg-cover bg-center min-h-screen w-full flex-col px-3">
      <h2 className="lg:mb-3 xl:mb-[28px] text-2xl md:text-3xl 2xl:text-4xl 2xxl:text-[48px] font-bold text-[#3777FF] text-center ff_raleway lg:leading-[55px] xl:leading-[70px] 2xl:leading-[65.74px] max-w-[535px] mx-auto">
        Verify Your Code
      </h2>
      <p className="text-center font-medium md:text-lg  2xl:text-xl 2xxl:text-[24px] ff_poppins text-black lg:leading-7 xl:leading-9 2xl:!leading-[48px] w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[737px] mx-auto">
        Enter the code you just received on your mobile number ending with
        *******456.
      </p>
      <div className="py-5 sm:py-8 lg:py-10 xl:py-12 2xl:py-[64px]">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Link href={"/"} className="max-w-[549px] mx-auto w-full">
        <GradientButton text={"Verify Now"} />
      </Link>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <Link href={"/"} className="text-base xl:text-lg underline">
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default StudentVerifyPortal;
