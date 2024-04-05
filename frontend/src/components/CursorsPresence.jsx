import React from 'react'
import { memo } from 'react'
import { useOthersConnectionIds } from '../../liveblocks.config'
import Cursor from './Cursor'

const Cursors = () => {
    const ids = useOthersConnectionIds()

    return(
        <>
            {ids.map((connectionId) => (
                <Cursor 
                   key={connectionId}
                   connectionId={connectionId}
                />
            ))}
        </>
    )
}

const CursorsPresence = memo(() => {
  return (
    <>
        {/* TODO: Draft pencil (what other users are drawing)*/}
        <Cursors />
    </>
  )
})

export default CursorsPresence

//CursorsPresence.displayName = "CursorsPresence"