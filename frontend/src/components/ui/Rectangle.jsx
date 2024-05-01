import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Rectangle = React.forwardRef(({
  className,
  color,
  rounded = 'medium',
  asChild = false,
  children,
  height,
  width,
  top,
  left,
  style,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "div";
  const additionalStyles = {
    backgroundColor: color, // Apply the background color
    height,
    width,
    top,
    left,
    ...style
  };

  return (
    <Comp
      className={cn("flex items-center justify-center transition-colors text-center overflow-hidden whitespace-nowrap", className, {
        'rounded-none': rounded === 'none',
        'rounded-sm': rounded === 'small',
        'rounded-md': rounded === 'medium',
        'rounded-lg': rounded === 'large',
      })}
      style={additionalStyles}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});
Rectangle.displayName = "Rectangle";

export { Rectangle };