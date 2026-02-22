"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-40 cursor-pointer overflow-hidden rounded-full border-2 border-caramel bg-cream p-2 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <span className="relative z-20 inline-block text-coffee transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-x-full text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>
      <div className="absolute left-[20%] top-[40%] z-0 h-2 w-2 scale-[1] rounded-lg bg-caramel transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1]"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
