import { Loader } from 'lucide-react'

import { Skeleton } from "./ui/skeleton"
import { InfoSkeleton } from './Info'
import { ParticipantsSkeleton } from './Participants'
import { ToolbarSkeleton } from './Toolbar'
import { QuestSkeleton } from './Quest'
import { AdvancedbarSkeleton } from './Advancedbar'

const Loading = () => {
  return (
    <main className='h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center'>
        <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
        <InfoSkeleton />
        <ParticipantsSkeleton />
        <ToolbarSkeleton />
        <QuestSkeleton />
        <AdvancedbarSkeleton />
    </main>
  )
}

export default Loading
