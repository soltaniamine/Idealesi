import React, { useCallback, useMemo, useState } from 'react'
import Info from './Info'
import Participants from './Participants'
import Toolbar from './Toolbar'
import Quest from './Quest'
import Advancedbar from './Advancedbar'
import { useMutation, useCanRedo, useCanUndo, useHistory, useStorage, useOthers, useOthersMapped, useSelf } from '../../liveblocks.config'
import { CanvasMode, LayerType } from '../../types/canvas'
import CursorsPresence from './CursorsPresence'
import { connectionIdToColor, findIntersectingLayersWithRectangle, pointerEventToCanvasPoint, resizeBounds } from '@/constants'
import { nanoid } from 'nanoid'
import { LiveObject } from '@liveblocks/client'
import LayerPreview from './LayerPreview'
import SelectionBox from './SelectionBox'
import SelectionTools from './SelectionTools'
import LockTools from './LockTools'
import HideLayer from './HideLayer'

const MAX_LAYERS = 100

const Canvas = ({boardId}) => {

  const layerIds = useStorage((root) => root.layerIds)//we use layers to know where and what to display in our canvas

  const selection = useSelf((me) => me.presence.selection)

  const [ canvasState, setCanvasState ] = useState({mode: CanvasMode.None})
  const [ camera, setCamera ] = useState({ x: 0, y: 0 })
  const [ lastUsedColor, setLastUsedColor ] = useState({r: 255,g : 255, b: 255})

  const locking = useMutation(({ storage }) => {
    const liveLayers = storage.get('layers')
    return liveLayers.get(selection[0])?.get("lock")

  }, [selection])

  const hiding = useMutation(({ storage }, layerId) => {
    const liveLayers = storage.get('layers')
    return liveLayers.get(layerId)?.get("hide")

  }, [selection])

  let lockme = locking()
  let hide = hiding()

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const insertLayer = useMutation((
    { storage, setMyPresence },
    LayerType,
    position
  ) => {
    const liveLayers = storage.get('layers')
    if(liveLayers.size >= MAX_LAYERS){
      return
    }

    const liveLayerIds = storage.get('layerIds')
    const layerId = nanoid()
    const layer = new LiveObject({
      type: LayerType,
      x: position.x,
      y: position.y,
      height: 100,//We can later change the height and the width of the layer depending on its type
      width: 100,
      fill: lastUsedColor,
      lock: false,
      hide: false
    })

    liveLayerIds.push(layerId)
    liveLayers.set(layerId, layer)

    setMyPresence({ selection: [layerId] }, { addToHistory: true })
    setCanvasState({ mode: CanvasMode.None })

  }, [lastUsedColor])

  const translateSelectedLayers = useMutation(({ storage, self }, point) => {
    if (canvasState.mode !== CanvasMode.Translating) {
      return
    }

    const offset = {
      x: point.x - canvasState.current.x,
      y: point.y - canvasState.current.y,
    }

    const liveLayers = storage.get("layers")

    for (const id of self.presence.selection) {
      const layer = liveLayers.get(id)

      if (layer) {
        layer.update({
          x: layer.get("x") + offset.x,
          y: layer.get("y") + offset.y,
        })
      }
    }

    setCanvasState({ mode: CanvasMode.Translating, current: point })
  }, [canvasState,])

  const unselectLayers = useMutation(({ self, setMyPresence }) => {
    if (self.presence.selection.length > 0) {
      setMyPresence({ selection: [] }, { addToHistory: true })
    }
  }, [])

  const updateSelectionNet = useMutation(({ storage, setMyPresence },current, origin) => {
    const layers = storage.get("layers").toImmutable();
    setCanvasState({
      mode: CanvasMode.SelectionNet,
      origin,
      current,
    });

    const ids = findIntersectingLayersWithRectangle(
      layerIds,
      layers,
      origin,
      current,
    );

    setMyPresence({ selection: ids });
  }, [layerIds]);

  const startMultiSelection = useCallback((current, origin) => {
    if (
      Math.abs(current.x - origin.x) + Math.abs(current.y - origin.y) > 5
    ) {
      setCanvasState({
        mode: CanvasMode.SelectionNet,
        origin,
        current,
      })
    }
  }, [])

  const resizeSelectedLayer = useMutation(({ storage, self }, point) => {
    if (canvasState.mode !== CanvasMode.Resizing) {
      return
    }

    const bounds = resizeBounds(
      canvasState.initialBounds,
      canvasState.corner,
      point,
    )

    const liveLayers = storage.get("layers")
    const layer = liveLayers.get(self.presence.selection[0])

    if (layer) {
      layer.update(bounds)
    }
  }, [canvasState])

  const onResizeHandlePointerDown = useCallback(( corner, initialBounds ) => {
    history.pause()
    setCanvasState({
      mode: CanvasMode.Resizing,
      initialBounds,
      corner,
    })
  }, [history])

  const onWheel = useCallback((e) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }))
  }, [])

  const onPointerMove = useMutation(({ setMyPresence }, e) => {
    e.preventDefault()

    const current = pointerEventToCanvasPoint(e, camera)

    if (canvasState.mode === CanvasMode.Pressing) {
      startMultiSelection(current, canvasState.origin)
    } else if (canvasState.mode === CanvasMode.SelectionNet) {
      updateSelectionNet(current, canvasState.origin);
    } else if(canvasState.mode === CanvasMode.Translating){
      translateSelectedLayers(current)
    } else if (canvasState.mode === CanvasMode.Resizing){
      resizeSelectedLayer(current)
    }

    setMyPresence({ cursor: current })
  }, [camera, canvasState, resizeSelectedLayer, translateSelectedLayers])

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null })
  }, [])

  const onPointerDown = useCallback((e) => {
    const point = pointerEventToCanvasPoint(e, camera)

    if (canvasState.mode === CanvasMode.Inserting) {
      return
    }

    setCanvasState({ origin: point, mode: CanvasMode.Pressing })
  }, [camera, canvasState.mode, setCanvasState])

  const onPointerUp = useMutation(({}, e) => {
    const point = pointerEventToCanvasPoint(e, camera)
    
    if ( canvasState.mode === CanvasMode.None || canvasState.mode === CanvasMode.Pressing ) {
      unselectLayers()
      setCanvasState({ mode: CanvasMode.None, })
    } else if(canvasState.mode === CanvasMode.Inserting){
      insertLayer(canvasState.LayerType, point)
    } else{
      setCanvasState({ mode: CanvasMode.None })
    }

    history.resume()
  }, [ camera, canvasState, history, insertLayer, unselectLayers,])

  const selections = useOthersMapped((other) => other.presence.selection)

  const onLayerPointerDown = useMutation(({self, setMyPresence}, e, layerId) => {
    if( canvasState.mode === CanvasMode.Inserting ){
      return 
    }
    history.pause()
    e.stopPropagation()

    const point = pointerEventToCanvasPoint(e, camera)
    
    if(!self.presence.selection.includes(layerId)){
      setMyPresence({ selection: [layerId] }, { addToHistory: true })
    }
    setCanvasState({ mode: CanvasMode.Translating, current: point })
  }, [setCanvasState, camera, history, canvasState.mode])

  const layerIdsToColorSelection = useMemo(() => {
    const layerIdsToColorSelection = {}

    for(const user of selections){
      const [connectionId, selection] = user
      for(const layerId of selection){
        layerIdsToColorSelection[layerId] = connectionIdToColor(connectionId)
      }
    }

    return layerIdsToColorSelection
  }, [selections])

  return (
    <main className='h-full w-full relative bg-neutral-100 touch-none'>
        <Info 
          boardId={boardId}
          canRedo={canRedo}
          canUndo={canUndo}
          undo={history.undo}
          redo={history.redo}
        />
        <Participants />
        <Toolbar 
          canvasState={canvasState}
          setCanvasState={setCanvasState}
        />
        <Quest />
        <Advancedbar />
        { lockme ? 
          <LockTools 
          camera={camera}
          />
          :
          <SelectionTools 
          camera={camera}
          setLastUsedColor={setLastUsedColor}
          lastUsedColor={lastUsedColor}
          />
        }
        <svg 
          className='h-[100vh] w-[100vw]'
          onWheel={onWheel}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <g
            style={{ transform: `translate(${camera.x}px, ${camera.y}px)`}}
          >
            {layerIds.map((layerId) => (
             hiding(layerId) === true ?
                <HideLayer key={layerId} id={layerId} selectionColor={layerIdsToColorSelection[layerId]}/>
              :
                 <LayerPreview 
                  key={layerId}
                  id={layerId}
                  onLayerPointerDown={onLayerPointerDown}
                  selectionColor={layerIdsToColorSelection[layerId]}//to know when a user has selected an element and the color will match their color Id
                  hide={hide}
                  /> 
            ))}
            <SelectionBox 
              onResizeHandlePointerDown={onResizeHandlePointerDown}
            />
            {canvasState.mode === CanvasMode.SelectionNet && canvasState.current != null && (
            <rect
              className="fill-blue-500/5 stroke-blue-500 stroke-1"
              x={Math.min(canvasState.origin.x, canvasState.current.x)}
              y={Math.min(canvasState.origin.y, canvasState.current.y)}
              width={Math.abs(canvasState.origin.x - canvasState.current.x)}
              height={Math.abs(canvasState.origin.y - canvasState.current.y)}
            />
          )}
            <CursorsPresence />
          </g>
        </svg>
    </main>
  )
}


export default Canvas