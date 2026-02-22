"use client";

import React from "react";
import { motion, type AnimationProps } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps: AnimationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

type ShinyButtonVariant = 'caramel' | 'beige' | 'sage';

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ShinyButtonVariant;
}

const variantColors: Record<ShinyButtonVariant, { bg: string; text: string; shine: string }> = {
  caramel: { bg: 'bg-caramel', text: 'text-white', shine: '#8E593A' },
  beige: { bg: 'bg-beige', text: 'text-coffee', shine: '#E5BE9E' },
  sage: { bg: 'bg-sage', text: 'text-white', shine: '#86A397' },
};

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  variant = 'caramel',
  ...props
}) => {
  const colors = variantColors[variant];

  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-lg",
        colors.bg,
        colors.text,
        className
      )}
      style={{
        background: `radial-gradient(circle at 50% 0%, ${colors.shine}20 0%, transparent 60%), ${colors.shine}`,
      }}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide font-semibold"
        style={{
          maskImage:
            "linear-gradient(-75deg,white calc(var(--x) + 20%),transparent calc(var(--x) + 30%),white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
          background: `linear-gradient(-75deg,${colors.shine}20 calc(var(--x)+20%),${colors.shine}60 calc(var(--x)+25%),${colors.shine}20 calc(var(--x)+100%))`,
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      ></span>
    </motion.button>
  );
};

export default { ShinyButton };
