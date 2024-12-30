import { ScrollArea } from "@/components/ui/scroll-area"
import VideoCard from './VideoCard'

const courseVideos = [
  { id: 1, title: 'Introducción a la Programación en Java', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '12:45', session: '1', instructor: 'Prof. López', url: '/videos/1' },
  { id: 2, title: 'Estructuras de Datos en Java', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '15:30', session: '2', instructor: 'Prof. Pérez', url: '/videos/2' },
  { id: 3, title: 'Programación Orientada a Objetos', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '10:00', session: '3', instructor: 'Prof. Gómez', url: '/videos/3' },
  { id: 4, title: 'Desarrollo Web con Java', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '20:15', session: '4', instructor: 'Prof. López', url: '/videos/4' },
  { id: 5, title: 'Bases de Datos en Java', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '18:00', session: '5', instructor: 'Prof. Martínez', url: '/videos/5' },
  { id: 6, title: 'Frameworks de Java', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', duration: '22:30', session: '6', instructor: 'Prof. Rodríguez', url: '/videos/6' }
];
interface RightSidebarProps {
    setCurrentVideoUrl: (url: string) => void
    setCurrentVideoInfo: (info: {
      title: string
      description: string
      categories: string[]
      type: string
    }) => void
  }

const RightSidebar: React.FC<RightSidebarProps> = ({ setCurrentVideoUrl, setCurrentVideoInfo }) => {
    const handleVideoClick = (video: { id: number; title: string; thumbnail: string; duration: string; url: string }) => {
      setCurrentVideoUrl(video.url)
      setCurrentVideoInfo({
        title: video.title,
        description: `Descripción del video ${video.title}`,
        categories: ['Ejemplo'],
        type: 'Video'
      })
    }
  
    return (
      <aside className="flex flex-col space-y-4 p-4">
        <h2 className="text-xl font-bold mb-4">Videos del Curso</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {courseVideos.map((video) => (
            <VideoCard
              key={video.id}
              {...video}
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </ScrollArea>
      </aside>
    )
  }
  

export default RightSidebar
