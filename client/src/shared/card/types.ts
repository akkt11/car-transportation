import { ComponentProps, ReactNode } from "react";
import { VariantProps } from "cva";
import { cardVariants } from "./card";

export interface CardProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  label: string;
  description: string;
  icon: ReactNode;
}
