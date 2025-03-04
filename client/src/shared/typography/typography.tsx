import { createElement, FC } from "react";
import { cva } from "cva";
import { twMerge } from "tailwind-merge";
import { TypographyProps, TypographyTags } from "./types";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      paragraph: "text-base",
      caption: "text-sm",
      link: "text-sm hover:underline cursor-pointer",
    },
    color: {
      black: "text-theme-black",
      white: "text-theme-white",
      "primary-100": "text-theme-primary-100",
      "primary-200": "text-theme-primary-200",
      "primary-300": "text-theme-primary-300",
      "grey-100": "text-theme-grey-100",
      "grey-150": "text-theme-grey-150",
      "grey-200": "text-theme-grey-200",
      "grey-300": "text-theme-grey-300",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    weight: "regular",
  },
});

const Typography: FC<TypographyProps> = (props) => {
  const { children, className, variant, color, weight, ...rest } = props;

  const Tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    paragraph: "p",
    caption: "p",
    link: "a",
  };

  return createElement(
    Tags[variant as keyof TypographyTags],
    {
      className: twMerge(
        typographyVariants({ variant, weight, color }),
        className
      ),
      ...rest,
    },
    children
  );
};

export { Typography, typographyVariants };
