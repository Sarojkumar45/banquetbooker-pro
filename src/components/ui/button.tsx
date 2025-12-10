import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_8px_30px_-8px_hsl(38_65%_50%_/_0.3)] hover:shadow-[0_20px_50px_-15px_hsl(220_30%_20%_/_0.15)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-br from-[hsl(38_65%_50%)] to-[hsl(38_55%_65%)] text-[hsl(40_33%_98%)] border-0 shadow-[0_8px_30px_-8px_hsl(38_65%_50%_/_0.3)] hover:shadow-[0_20px_50px_-15px_hsl(220_30%_20%_/_0.15)] hover:scale-105 uppercase tracking-widest",
        elegant: "bg-transparent border-2 border-[hsl(38_65%_50%)] text-[hsl(38_65%_50%)] hover:bg-[hsl(38_65%_50%)] hover:text-[hsl(40_33%_98%)] uppercase tracking-widest",
        navy: "bg-gradient-to-br from-[hsl(220_30%_20%)] to-[hsl(220_25%_30%)] text-secondary-foreground hover:opacity-90 shadow-[0_10px_40px_-10px_hsl(220_30%_20%_/_0.1)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
