import '@fontsource/kalam'
import ContentEditable from "react-contenteditable";

import { cn, colorToCss, getContrastingTextColor } from "../../constants/index";
import { useMutation } from "../../../liveblocks.config";
import { Button } from '@/components/ui/button';
import { color } from 'framer-motion';


const calculateFontSize = (width, height) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(
    fontSizeBasedOnHeight, 
    fontSizeBasedOnWidth, 
    maxFontSize
  );
}


export const PriorityMoscow = ({layer, onPointerDown, id, selectionColor}) => {
  const { x, y, width, height , fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e) => {
    updateValue(e.target.value);
  };
  return (
    <foreignObject
      x={x}
      y={y}
      width={width} // Ensure this is sufficient for the widest element
      height={height } // Adjust to accommodate both areas
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{

        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
        overflow: 'visible' // Ensure inner SVG content is visible outside the bounds
      }}
      className="shadow-md drop-shadow-xl"
    >
      <svg width={'100%'} height={'100%'}>

        <rect
          x="0"
          y= "0" // Starts right after the end of the first shape
          width={width/2} // Full width of the parent
          height={height/2 } // Relative height
          fill="rgba(236, 246, 255, 1)"
        />
  

        <rect
          x={width/2}
          y="0" // Positioned lower in the SVG
          width={width/2 }
          height={height/2}
          fill="rgba(229, 255, 240, 1)"
        />
        <rect
            x="0"
            y={height/2} // Positioned lower in the SVG
            width={width/2}
            height={height /2}
            fill="rgba(255, 243, 209, 1)"

        />
        <rect
            x={width/2}
            y={height/2} // Positioned lower in the SVG
            width={width/2 }
            height={height /2}
            fill="rgba(255, 217, 217, 1)"

        />

      </svg>
    </foreignObject>
  );

  
};