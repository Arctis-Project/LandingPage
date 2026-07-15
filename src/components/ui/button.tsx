import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-primary)] disabled:pointer-events-none disabled:opacity-38 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        filled: "bg-[var(--md-primary)] text-[var(--md-on-primary)] shadow-sm hover:shadow-md hover:brightness-110",
        tonal: "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)] hover:shadow-sm",
        outlined: "border border-[var(--md-outline)] bg-transparent text-[var(--md-primary)] hover:bg-[var(--md-primary)]/8",
        text: "text-[var(--md-primary)] hover:bg-[var(--md-primary)]/8",
        ghost: "text-[var(--text-sec)] hover:bg-[var(--md-surface-container-high)]",
        discord: "bg-[#5865F2] text-white hover:bg-[#4752C4] shadow-sm",
      },
      size: {
        default: "h-10 px-6 rounded-full",
        sm: "h-9 px-4 rounded-full text-[0.8125rem]",
        lg: "h-12 px-8 rounded-full text-[0.9375rem]",
        xl: "h-14 px-10 rounded-full text-base font-semibold",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: { variant: "filled", size: "default" },
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
