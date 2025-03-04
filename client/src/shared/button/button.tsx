import { ComponentProps, forwardRef } from "react";
import { cva } from "cva";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

const buttonVariants = cva(
  [
    "flex",
    "leading-none",
    "items-center",
    "justify-center",
    "outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "disabled:cursor-not-allowed",
    "cursor-pointer",
    "rounded-lg",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-theme-primary-100",
          "text-theme-white",
          "hover:bg-theme-primary-200",
          "active:bg-theme-primary-400",
          "focus-visible:bg-theme-primary-300",
          "disabled:bg-theme-grey-100",
          "disabled:text-theme-grey-400",
          "focus-visible:ring-theme-primary-100",
        ],
        outline: [
          "bg-theme-white",
          "text-theme-black",
          "hover:bg-theme-grey-200",
          "border",
          "border-theme-grey-200",
          "active:bg-theme-grey-300",
          "focus-visible:bg-theme-white",
          "disabled:bg-theme-grey-100",
          "disabled:text-theme-grey-400",
          "focus-visible:ring-theme-blue-400",
        ],
        ghost: [
          "bg-transparent",
          "text-theme-black",
          "hover:bg-theme-grey-200",
          "active:bg-theme-grey-300",
          "focus-visible:bg-theme-white",
          "disabled:bg-theme-grey-100",
          "disabled:text-theme-grey-400",
          "focus-visible:ring-theme-blue-400",
        ],
      },
      size: {
        sm: ["py-4", "px-8"],
        md: ["py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

const Button = forwardRef<ComponentProps<"button">, ButtonProps>((props) => {
  const { children, variant, size, className, ...rest } = props;

  const classNameGenerated = twMerge(
    buttonVariants({
      variant,
      size,
    }),
    className
  );

  return (
    <button {...rest} aria-label="button" className={classNameGenerated}>
      {children}
    </button>
  );
});

export { Button, buttonVariants };
