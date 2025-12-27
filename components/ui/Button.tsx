import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    outline: "border border-border bg-transparent hover:bg-muted",
    ghost: "bg-transparent hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
      }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white/10"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </motion.button>
  );
}

