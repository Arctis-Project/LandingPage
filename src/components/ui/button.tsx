import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm hover:shadow-md",
        outline: "border border-[var(--border-strong)] bg-transparent text-[var(--text)] hover:bg-[var(--surface)]",
        secondary: "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-hover)]",
        ghost: "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
        discord: "bg-[#5865F2] text-white hover:bg-[#4752C4] shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-10 px-5 rounded-full text-sm",
        sm: "h-9 px-4 rounded-full text-sm",
        lg: "h-12 px-7 rounded-full text-base",
        xl: "h-14 px-9 rounded-full text-base font-semibold",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
