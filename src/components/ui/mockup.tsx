import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  },
);

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {
  width?: string; // Tambahkan prop untuk lebar
  height?: string; // Tambahkan prop untuk tinggi
}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, width, height, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        mockupVariants({ type, className }),
        width && `w-[${width}]`, // Gunakan width jika disediakan
        height && `h-[${height}]`, // Gunakan height jika disediakan
      )}
      style={{
        width: width ? `var(--mockup-width, ${width})` : undefined,
        height: height ? `var(--mockup-height, ${height})` : undefined,
      }}
      {...props}
    />
  ),
);
Mockup.displayName = "Mockup";

// Komponen MockupFrame tetap sama
const frameVariants = cva(
  "bg-accent/5 flex relative z-10 overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: "p-2",
        large: "p-4",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

export interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(frameVariants({ size, className }))}
      {...props}
    />
  ),
);
MockupFrame.displayName = "MockupFrame";

export { Mockup, MockupFrame };