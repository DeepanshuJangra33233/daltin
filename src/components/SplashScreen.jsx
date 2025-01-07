import Image from "next/image";
import React from "react";

const SplashScreen = () => {
  return (
    <div>
      <div className="card_parent max-w-[539px] flex flex-col gap-[38.4px] p-[38.4px]">
        <Image
          src="/assets/images/expert_support.webp"
          alt="splash"
          width={462}
          height={424}
        />
        <div>
          <p className="text-black ff_raleway sm:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[33.6px] font-semibold text-center leading-[39.45px] mb-5">
            Expert Support, Anytime
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[28.8px] text-black ff_poppins text-center 2xl:!leading-[43.2px]">
            Connect directly with admission experts through chats and calls, all
            within the app
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
