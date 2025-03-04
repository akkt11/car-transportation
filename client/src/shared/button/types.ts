import { ComponentProps } from "react";
import { VariantProps } from "cva";
import { buttonVariants } from "./button";

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}
