import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  
const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset,
  }) => {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent
            className="text-white bg-black border-black"
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            <p className="font-semibold capitalize">
              {label}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

export default Hint