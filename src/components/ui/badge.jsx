import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  const styles =
    variant === "secondary"
      ? "bg-white/70 text-muted-foreground border border-border/70"
      : "bg-primary/15 text-primary border border-primary/30";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
        styles,
        className
      )}
      {...props}
    />
  );
}
