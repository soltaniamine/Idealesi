import { useStorage } from '../../../liveblocks.config'
import React from 'react'
import { memo } from 'react'

const MapPreview = memo(({id}) => {
    const layer = useStorage((root) => root.layers.get(id))
  return (
    <foreignObject
      x={layer.x}
      y={layer.y}
      width={layer.width}
      height={layer.height}
      style={{
        backgroundColor: "#6495ED",
      }}
    ></foreignObject>
  )
})

export default MapPreview