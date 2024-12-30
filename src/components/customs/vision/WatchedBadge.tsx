import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WatchedBadgeProps {
  isWatched: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export function WatchedBadge({ isWatched, onClick, className }: WatchedBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all",
        isWatched ? "bg-primary text-primary-foreground" : "bg-background/80 text-foreground hover:bg-background",
        className
      )}
    >
      <CheckCircle2 className="w-5 h-5" />
      <span className="sr-only">{isWatched ? 'Mark as unwatched' : 'Mark as watched'}</span>
    </button>
  );
}