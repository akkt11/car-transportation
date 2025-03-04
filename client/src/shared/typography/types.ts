import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "paragraph"
  | "caption"
  | "link";

export type TypographyFormats =
  | "normal"
  | "capitalize"
  | "uppercase"
  | "lowercase";

export type TypographyColors =
  | "black"
  | "white"
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "grey-100"
  | "grey-150"
  | "grey-200"
  | "grey-300";

export type TypographyWeights = "regular" | "medium" | "semibold" | "bold";

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariants;
  className?: ClassNameValue;
  color?: TypographyColors;
  weight?: TypographyWeights;
  format?: TypographyFormats;
}

export interface TypographyTags {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  paragraph: string;
  caption: string;
  link: string;
}
