import { useStorage } from '../../../liveblocks.config'
import React from 'react'
import { memo } from 'react'
import { LayerType } from '../../types/canvas'
import { Rectangle } from './Rectangle'
import { Note } from './Note'
import HideLayer from './HideLayer'
import { Square } from './Square'
import { Text } from './Text'
import  Circle  from './Circle'
import { Sharpsquare } from './Sharpsquare'
import { Triangle } from './Triangle'
import { Combin } from './Combin'
import { IdeasRectRaffin } from './IdeasRectRaffin'
import { RaffinementColumns }from './RaffinementColumns'
import { RoundedRect } from './RoundedRect'
import { IdeasRectCombin } from './IdeasRectCombin'
import { PriorityMoscow } from './PriorityMoscow'
import { IdeasRectMoscow } from './IdeasRectMoscow'

const LayerPreview = memo(({id, onLayerPointerDown, selectionColor, hide, triggerVote}) => {
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
          triggerVote={triggerVote}
        />
      )
    case LayerType.Rectangle:
      return(
        <Rectangle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Square:
      return(
        <Square 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Circle:
      return(
        <Circle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Sharpsquare:
      return(
        <Sharpsquare 
          id={id}
          layer={layer} 
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Triangle:
      return(
        <Triangle 
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
      case LayerType.Combin:
        return(
          <Combin 
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        )
      case LayerType.IdeasRectRaffin:
        return(
          <IdeasRectRaffin 
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        )
      case LayerType.IdeasRectCombin:
        return(
          <IdeasRectCombin 
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        )
      case LayerType.RaffinementColumns:
        return(
          <RaffinementColumns
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
          />
        )
      case LayerType.RoundedRect:
        return(
          <RoundedRect
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
          />
        )
      case LayerType.PriorityMoscow:
        return(
          <PriorityMoscow
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
          />
        )
      case LayerType.IdeasRectMoscow:
        return(
          <IdeasRectMoscow
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
          />
        )
    default:
      console.warn("Unknown layer type")
  }
})

export default LayerPreview

