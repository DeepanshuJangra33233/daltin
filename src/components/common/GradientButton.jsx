import React from "react";

const GradientButton = ({ text, className }) => {
  return (
    <button
      className={`font-semibold xl:text-xl w-full 2xl:text-[24px] ff_poppins leading-[22px] bg_gradientButton rounded-[12px] text-white py-4 lg:py-[18px] 2xl:py-[26.5px] ${className}`}
    >
      {text}
    </button>
  );
};

export default GradientButton;
