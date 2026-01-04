import { Play, Pause, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  audioSrc: string | undefined;
  className?: string;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ audioSrc, className }: AudioPlayerProps) {
  const {
    isPlaying,
    currentTime,
    duration,
    isLoading,
    error,
    toggle,
    seek,
  } = useAudioPlayer(audioSrc);

  if (!audioSrc) {
    return null;
  }

  if (error) {
    return (
      <div className={cn("flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border", className)}>
        <Volume2 className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Audio not available</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        disabled={isLoading}
        className="flex-shrink-0"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </Button>

      <div className="flex-1 flex items-center gap-3">
        <span className="text-xs text-muted-foreground w-10 text-right">
          {formatTime(currentTime)}
        </span>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={1}
          onValueChange={([value]) => seek(value)}
          className="flex-1"
        />
        <span className="text-xs text-muted-foreground w-10">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}
