import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-3xl border transition-all duration-300", {
  variants: {
    variant: {
      default: "border-border bg-background/40",

      elevated: "border-border bg-background/60 shadow-lg",

      glass: "border-white/10 bg-white/5 backdrop-blur-xl",
    },

    hover: {
      true: "hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl",

      false: "",
    },

    padding: {
      none: "",

      sm: "p-4",

      md: "p-6",

      lg: "p-8",
    },
  },

  defaultVariants: {
    variant: "default",
    hover: true,
    padding: "lg",
  },
});

type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  hover,
  padding,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          hover,
          padding,
        }),
        className,
      )}
      {...props}
    />
  );
}
