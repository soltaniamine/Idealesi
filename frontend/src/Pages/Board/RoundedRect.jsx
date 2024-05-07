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


export const RoundedRect = ({layer, onPointerDown, id, selectionColor}) => {
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
      width={width} 
      height={height} 
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
        overflow: 'visible' 
      }}
      className="shadow-md drop-shadow-xl"
    >
    </foreignObject>
  );

  
};