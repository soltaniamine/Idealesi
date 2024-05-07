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


export const BrainwritingShape = ({layer, onPointerDown, id, selectionColor}) => {
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
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
        overflow: 'visible' // Ensure inner SVG content is visible outside the bounds
      }}
      className="shadow-md drop-shadow-xl"
      id={`${id}`}
    >

    </foreignObject>
  );

  
};