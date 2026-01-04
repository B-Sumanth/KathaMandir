import { useRef, useState, useEffect, useCallback } from "react";

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
  error: string | null;
}

export function useAudioPlayer(audioSrc: string | undefined) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isLoading: false,
    error: null,
  });

  // Initialize audio element
  useEffect(() => {
    if (!audioSrc) {
      setState(prev => ({ ...prev, error: null, isPlaying: false }));
      return;
    }

    // Stop previous audio if exists
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    setState(prev => ({ ...prev, isLoading: true, error: null, isPlaying: false }));

    const handleLoadedMetadata = () => {
      setState(prev => ({
        ...prev,
        duration: audio.duration,
        isLoading: false,
      }));
    };

    const handleTimeUpdate = () => {
      setState(prev => ({
        ...prev,
        currentTime: audio.currentTime,
      }));
    };

    const handleEnded = () => {
      setState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
      }));
    };

    const handleError = () => {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Failed to load audio",
        isPlaying: false,
      }));
    };

    const handleCanPlay = () => {
      setState(prev => ({ ...prev, isLoading: false }));
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, [audioSrc]);

  const play = useCallback(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.play().catch(err => {
        console.error("Play error:", err);
        setState(prev => ({ ...prev, error: "Failed to play audio" }));
      });
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  }, [audioSrc]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  const toggle = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setState(prev => ({ ...prev, currentTime: time }));
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setState(prev => ({ ...prev, isPlaying: false, currentTime: 0 }));
    }
  }, []);

  return {
    ...state,
    play,
    pause,
    toggle,
    seek,
    stop,
    audioRef,
  };
}
