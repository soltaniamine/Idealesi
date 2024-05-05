import '@fontsource/kalam'
import ContentEditable from "react-contenteditable";

import { cn, colorToCss, getContrastingTextColor } from "../../constants/index";
import { useMutation } from "../../../liveblocks.config";


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


export const Sharpsquare = ({layer, onPointerDown, id, selectionColor}) => {
  const { x, y, width, height, fill, value } = layer;

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
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
      }}
    >
      <ContentEditable
        html={value ? value : ""}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? getContrastingTextColor(fill) : "#000",
          fontFamily: 'Kalam, cursive',
          backgroundColor: fill ? colorToCss(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};