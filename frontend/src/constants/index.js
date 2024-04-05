import { twMerge } from "tailwind-merge"
import { Side } from "../../types/canvas"
import clsx from "clsx"

export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"]

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId){
    return COLORS[connectionId % COLORS.length]
}

export function pointerEventToCanvasPoint(e, camera){
    return{
        x: Math.round(e.clientX) - camera.x,
        y: Math.round(e.clientY) - camera.y,
    }
}

export function colorToCss(color) {
    return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`
}

export function resizeBounds(bounds, corner,  point){
    const result = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
    }
  
    if ((corner & Side.Left) === Side.Left) {
      result.x = Math.min(point.x, bounds.x + bounds.width)
      result.width = Math.abs(bounds.x + bounds.width - point.x)
    }
  
    if ((corner & Side.Right) === Side.Right) {
      result.x = Math.min(point.x, bounds.x)
      result.width = Math.abs(point.x - bounds.x)
    }
  
    if ((corner & Side.Top) === Side.Top) {
      result.y = Math.min(point.y, bounds.y + bounds.height)
      result.height = Math.abs(bounds.y + bounds.height - point.y)
    }
  
    if ((corner & Side.Bottom) === Side.Bottom) {
      result.y = Math.min(point.y, bounds.y)
      result.height = Math.abs(point.y - bounds.y)
    }
  
    return result
}
  
export function findIntersectingLayersWithRectangle(layerIds, layers, a, b) {
  const rect = {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y),
  };

  const ids = [];

  for (const layerId of layerIds) {
    const layer = layers.get(layerId);

    if (layer == null) {
      continue;
    }

    const { x, y, height, width } = layer;

    if (
      rect.x + rect.width > x &&
      rect.x < x + width && 
      rect.y + rect.height > y &&
      rect.y < y + height
    ) {
      ids.push(layerId);
    }
  }

  return ids;
};

export function getContrastingTextColor(color) {
  const luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;

  return luminance > 182 ? "black" : "white";
};