import { useRef, useState } from "react";
import { Volume2, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  src: string;
}

export default function StoryAudioButton({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.currentTime = 0;
        await audioRef.current.play(); // 👈 REQUIRED
        setPlaying(true);
      }
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  return (
    <Button onClick={toggleAudio} variant="outline" size="icon">
      {playing ? <Pause className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
    </Button>
  );
}
