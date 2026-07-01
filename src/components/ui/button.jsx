import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "bg-white/80 text-foreground border border-border shadow-soft hover:bg-white",
  ghost:
    "bg-transparent text-foreground hover:bg-white/60"
};

export function Button({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
