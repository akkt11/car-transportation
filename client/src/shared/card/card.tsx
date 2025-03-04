import { cva } from "cva";
import { twMerge } from "tailwind-merge";
import { CardProps } from "./types";
import { Typography } from "../typography/typography";

const cardVariants = cva("inline-flex items-center", {
  variants: {
    variant: {
      col: "flex-col gap-[40px] w-[190px] text-center",
      row: "flex-row gap-6",
    },
  },
  defaultVariants: {
    variant: "col",
  },
});

const Card = ({ className, variant, label, description, icon }: CardProps) => {
  const classNameGenerated = twMerge(
    cardVariants({
      variant,
    }),
    className
  );

  return (
    <div className={classNameGenerated}>
      <div
        className={`bg-theme-primary-300 rounded-lg inline-flex justify-center ${
          variant === "row" ? "p-5" : "p-8 w-[112px]"
        }`}
      >
        {icon}
      </div>

      <div className="flex gap-4 flex-col">
        <Typography variant="h4" weight="medium">
          {label}
        </Typography>

        <Typography variant="caption" weight="medium" color="grey-100">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export { Card, cardVariants };
