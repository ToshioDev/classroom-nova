import { Badge } from '@/components/ui/badge'

interface VideoInfoProps {
  title: string
  description: string
  categories: string[]
  type: string
}

const VideoInfo: React.FC<VideoInfoProps> = ({ title, description, categories, type }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="secondary">{category}</Badge>
        ))}
        <Badge variant="outline">{type}</Badge>
      </div>
    </div>
  )
}

export default VideoInfo
