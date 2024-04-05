import { useStorage } from '../../liveblocks.config'
import React from 'react'

const HideLayer = ({id, selectionColor}) => {
    const layer = useStorage((root) => root.layers.get(id))
    if(!layer) return null
    const { x, y, width, height } = layer

    return (
      <rect
        className="drop-shadow-md"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
        x={0}
        y={0}
        width={width}
        height={height}
        strokeWidth={1}
        fill={"#000"}
        stroke={selectionColor || "transparent"}
      />
    )
}

export default HideLayer