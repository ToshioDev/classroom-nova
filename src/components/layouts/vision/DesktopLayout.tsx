import { Button } from '@/components/ui/button'
import { Minimize2 } from 'lucide-react'
import Navbar from '@/components/modules/Navbar'
import VideoPlayer from '@/components/customs/vision/VideoPlayer'
import VideoInfo from '@/components/customs/vision/VideoInfo'
import CommentSection from '@/components/customs/vision/CommentSection'
import RightSidebar from '@/components/customs/vision/RightSidebar'

interface DesktopLayoutProps {
  currentVideoUrl: string
  currentVideoInfo: {
    title: string
    description: string
    categories: string[]
    type: string
  }
  setCurrentVideoUrl: (url: string) => void
  setCurrentVideoInfo: (info: {
    title: string
    description: string
    categories: string[]
    type: string
  }) => void
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  currentVideoUrl,
  currentVideoInfo,
  setCurrentVideoUrl,
  setCurrentVideoInfo
}) => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-y-auto">
      <Navbar/>
      <div className="flex flex-1 gap-6 p-6 overflow-y-auto">
        <main className="flex-1 min-w-0">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video"> 
              <VideoPlayer videoUrl={currentVideoUrl} />
            </div>
            <div className="space-y-6">
              <VideoInfo {...currentVideoInfo} />
              <CommentSection />
            </div>
          </div>
        </main>
        <aside className="w-[400px]">
          <RightSidebar 
            setCurrentVideoUrl={setCurrentVideoUrl}
            setCurrentVideoInfo={setCurrentVideoInfo}
          />
        </aside>
      </div>
    </div>
  )
}

export default DesktopLayout
