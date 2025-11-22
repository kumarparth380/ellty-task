import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "default",
  className,
  loading = false,
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center",
    "font-sans font-medium text-sm leading-[130%] tracking-[0px]",
    "rounded-[4px] transition-all duration-200 ease-in-out",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "gap-[10px]",

    {
      "w-[340px] h-[40px] py-[10px] px-[20px]": size === "default",
      "w-auto h-[32px] py-[6px] px-[16px]": size === "sm",
      "w-auto h-[48px] py-[12px] px-[24px]": size === "lg",
      "w-full": fullWidth,
    },

    {
      "bg-primary text-secondary-foreground hover:bg-primary-active focus:ring-primary active:bg-primary":
        variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary active:bg-secondary/80":
        variant === "secondary",
    },

    {
      "cursor-wait": loading,
      "cursor-pointer": !disabled && !loading,
    }
  );

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={clsx(baseClasses, className)}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
