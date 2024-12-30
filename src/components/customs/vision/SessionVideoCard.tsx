import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { WatchedBadge } from "./WatchedBadge";
import { Session } from "@/types/Course";
import { cn } from "@/lib/utils";

interface VideoCardProps extends Session {
  isWatched: boolean;
  onToggleWatched: (id: number) => void;
}

export function SessionVideoCard({ 
  id,
  title, 
  thumbnail, 
  duration, 
  sessionNumber,
  isWatched,
  onToggleWatched
}: VideoCardProps) {
  const handleWatchedClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWatched(id);
  };

  return (
    <Card className={cn(
      "overflow-hidden group cursor-pointer transition-all outline-none outline-offset-1 hover:outline-borderNav",
      isWatched && "ring-1 ring-primary/30"
    )}>
      <CardContent className="p-0 relative">
        <WatchedBadge
          isWatched={isWatched}
          onClick={handleWatchedClick}
        />
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-transform group-hover:scale-105",
              isWatched && "opacity-80"
            )}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
            {duration}
          </span>
        </div>
        <div className="p-4">
          <div className="text-sm text-muted-foreground mb-1">Session {sessionNumber}</div>
          <h3 className="font-medium line-clamp-2">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
}