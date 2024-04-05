import { useStorage } from '../../liveblocks.config'
import React from 'react'
import { memo } from 'react'
import { LayerType, Shapes } from '../../types/canvas'
import { Rectangle } from './Rectangle'
import Circle from './Circle'
import Text from './Text'
import { Note } from './Note'
import HideLayer from './HideLayer'

const LayerPreview = memo(({id, onLayerPointerDown, selectionColor, hide}) => {
  const layer = useStorage((root) => root.layers.get(id))

  if(!layer) return null
  if(hide){
    return <HideLayer layer={layer} selectionColor={selectionColor}/>
  }
  switch(layer.type){
    case LayerType.Note:
        return(
            <Note 
              id={id}
              layer={layer}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
            />
        )
    case LayerType.Text:
        return(
            <Text 
              id={id}
              layer={layer}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
            />
        )
    case Shapes.Rectangle:
        return(
            <Rectangle 
              id={id}
              layer={layer}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
            />
        )
    case Shapes.Circle:
        return(
            <Circle 
              id={id}
              layer={layer}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
            />
        )
    default:
        console.warn("Unknown layer type")
  }
})

export default LayerPreview

LayerPreview.displayName = "LayerPreview"