import { useRef } from "react";
import { Volume2 } from "lucide-react";

interface Props {
  src?: string;
}

export default function StoryAudioButton({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  console.log("AUDIO SRC RECEIVED:", src);

  if (!src) return null;

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.play().catch(err => {
      console.error("Audio play error:", err);
    });
  };

  return (
    <>
      <button
        onClick={playAudio}
        className="p-2 rounded-full border border-primary text-primary"
      >
        <Volume2 size={20} />
      </button>

      <audio ref={audioRef} src={src} />
    </>
  );
}
