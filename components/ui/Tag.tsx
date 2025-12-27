"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
  size?: "sm" | "md";
}

export function Tag({ children, variant = "default", size = "sm" }: TagProps) {
  const variants = {
    default: "bg-muted text-foreground",
    accent: "bg-accent/10 text-accent",
    muted: "bg-muted/50 text-muted-foreground",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "inline-flex items-center rounded-full font-medium transition-all",
        variants[variant],
        sizes[size]
      )}
    >
      {children}
    </motion.span>
  );
}

