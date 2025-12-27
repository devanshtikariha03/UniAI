import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={clsx(
        "group rounded-xl border border-border bg-background p-6 transition-all duration-300",
        hover &&
          "cursor-pointer hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

