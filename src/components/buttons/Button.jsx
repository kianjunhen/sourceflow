// Button.jsx
import React from "react";
import clsx from "clsx";

const baseStyles =
  "px-2 py-1 md:px-4 md:py-[12px] font-bold border-radius-[30px] text-[12px] md:text-base w-max";

const variantStyles = {
  danger: "bg-[#F99D76] text-[#451B09]",
  warning: "bg-[#FCDF69] text-[#451B09]",
};

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
