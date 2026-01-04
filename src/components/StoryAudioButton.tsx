import { useRef } from "react";
import { Volume2, Pause } from "lucide-react";

interface Props {
  src?: string;
}

export default function StoryAudioButton({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!src) return null;

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <button
        onClick={toggleAudio}
        className="p-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        title="Play narration"
      >
        <Volume2 size={20} />
      </button>

      <audio ref={audioRef} src={src} preload="none" />
    </>
  );
}
