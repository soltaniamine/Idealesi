import { ClientSideSuspense } from '@liveblocks/react/dist'
import React from 'react'
import { CommentsOverlay } from './CommentsOverlay'

export const Comments = () => {
  return (
    <ClientSideSuspense fallback={null}>
        {() => <CommentsOverlay />}
    </ClientSideSuspense>
  )
}

