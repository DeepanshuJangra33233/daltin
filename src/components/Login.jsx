import React from "react";
import { Input } from "@/components/ui/input";
import GradientButton from "./common/GradientButton";
import Link from "next/link";
import { Apple, Google } from "./common/Icons";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  return (
    <div className="flex align-center h-screen w-full flex-col lg:flex-row justify-center lg:justify-between">
      <div className="lg:w-[58%] max-w-[551px]  w-full mx-auto h-full lg:flex flex-col justify-center items-center p-5">
        <p className="font-bold ff_raleway text-3xl xl:text-4xl 2xl:text-[48px] text-center text-[#3777FF] leading-[56.35px] mb-5 2xl:mb-9 2xxl:mb-16">
          Login to daltin
        </p>
        <form className="w-full flex flex-col gap-5 2xl:gap-7 2xxl:gap-10">
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Email Address"
          />
          <Input
            className="border-[1.5px] placeholder:text-[#959595] text-[#3777ff] font-medium !text-xl border-black h-[50px] xl:h-[55px] 2xl:h-[60px] placeholder:text-xl"
            placeholder="Password"
          />
          <div className="flex sm:items-center gap-2 justify-between flex-col sm:flex-row">
            <div className="flex items-center gap-3 sm:gap-4">
              <Checkbox />
              <p className="text-[#333333] sm:text-lg leading-[27px] ff_poppins">
                Remember me
              </p>
            </div>
            <p className="sm:text-lg ff_poppins">Forgot your password?</p>
          </div>
          <GradientButton text={"Login"} />
        </form>

        <p className="text-center my-5 2xl:my-[40px] ff_poppins text-xl leading-[30px] text-[#3777ff] before:w-[43%] lg:before:w-[47%] after:w-[43%] lg:after:w-[47%] relative before:h-[1px] max-w-[551px] after:h-[1px] before:bg-black w-full after:bg-black before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0">
          OR
        </p>
        <div className="gap-4 flex items-center justify-center w-full max-w-[551px]">
          <div className="border border-black flex items-center justify-center rounded-[4px] py-2 sm:py-3 lg:py-[14px] w-full cursor-pointer">
            <Google />
          </div>
          <div className="border border-black flex items-center justify-center rounded-[4px] py-2 sm:py-3 lg:py-[14px] w-full cursor-pointer">
            <Apple />
          </div>
        </div>
        <p className="text-lg text-black mt-[24px] leading-[27px] my-6 lg:my-[32px] text-center">
          Don’t have an account yet?{" "}
          <Link href={"/"} className="text-[#3777FF] font-bold">
            Register
          </Link>
        </p>
      </div>
      <div className="bg-[url('/assets/images/auth_login.webp')] hidden bg-right bg-cover lg:bg-center px-3 lg:w-[42%] h-full lg:flex flex-col justify-center items-center">
        <h2 className="lg:mb-7 xl:mb-10 2xl:mb-16 text-2xl md:text-3xl lg:text-4xl xl:text-[50px] 2xl:text-[50px] 2xxl:text-[56px] font-bold text-white text-center ff_raleway lg:leading-[55px] xl:leading-[70px] 2xl:leading-[65.74px] max-w-[535px] mx-auto">
          Welcome Back, Future Achiever!
        </h2>
        <p className="text-center font-medium md:text-lg lg:text-xl xl:text-[25px] 2xl:text-[28px] 2xxl:text-[32px] ff_poppins text-white lg:leading-7 xl:leading-9 2xl:!leading-[48px] w-full max-w-[558px] mx-auto">
          We’re excited to continue where you left off.
        </p>
      </div>
    </div>
  );
};

export default Login;
