import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-[350ms] ease-[cubic-bezier(0.42,1.67,0.21,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-m3-primary text-m3-on-primary shadow-[var(--m3-sys-elevation-1)] hover:shadow-[var(--m3-sys-elevation-2)] hover:scale-[1.03]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline:
          "border-2 border-border bg-transparent hover:bg-m3-surface-variant hover:border-foreground/20 hover:shadow-[var(--m3-sys-elevation-1)]",
        secondary:
          "bg-m3-secondary-container text-m3-on-secondary-container hover:shadow-[var(--m3-sys-elevation-1)] hover:scale-[1.02]",
        ghost:
          "hover:bg-m3-surface-variant hover:shadow-[var(--m3-sys-elevation-1)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-[var(--m3-sys-shape-full)]",
        sm: "h-9 rounded-[var(--m3-sys-shape-full)] px-4 text-[0.8125rem]",
        lg: "h-13 rounded-[var(--m3-sys-shape-full)] px-8 text-[1rem]",
        xl: "h-14 rounded-[var(--m3-sys-shape-full)] px-10 text-[1.0625rem] font-semibold",
        icon: "h-11 w-11 rounded-[var(--m3-sys-shape-full)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
