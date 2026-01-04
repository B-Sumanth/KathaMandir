import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTE_STORAGE_KEY = "kathamandir_last_route";

export interface QuizState {
  difficulty: "easy" | "medium" | "hard" | null;
  currentQuestion: number;
  score: number;
  questionIds: number[];
  isAnswered: boolean;
  selectedAnswer: number | null;
  quizComplete: boolean;
}

const QUIZ_STATE_KEY = "kathamandir_quiz_state";

export function useRouteRestore() {
  const location = useLocation();
  const navigate = useNavigate();

  // Save current route
  useEffect(() => {
    const pathsToSave = ["/", "/ramayana", "/mahabharata", "/quizzes"];
    const shouldSave = pathsToSave.some(p =>
      location.pathname === p || location.pathname.startsWith("/ramayana/") || location.pathname.startsWith("/mahabharata/")
    );

    if (shouldSave) {
      localStorage.setItem(ROUTE_STORAGE_KEY, location.pathname);
    }
  }, [location.pathname]);

  // Restore route on mount (only on initial page load)
  useEffect(() => {
    const isInitialLoad = sessionStorage.getItem("kathamandir_loaded") !== "true";

    if (isInitialLoad && location.pathname === "/") {
      const savedRoute = localStorage.getItem(ROUTE_STORAGE_KEY);
      if (savedRoute && savedRoute !== "/") {
        navigate(savedRoute, { replace: true });
      }
    }

    sessionStorage.setItem("kathamandir_loaded", "true");
  }, []);
}

export function saveQuizState(state: QuizState) {
  try {
    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Error saving quiz state:", e);
  }
}

export function loadQuizState(): QuizState | null {
  try {
    const stored = localStorage.getItem(QUIZ_STATE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error loading quiz state:", e);
  }
  return null;
}

export function clearQuizState() {
  localStorage.removeItem(QUIZ_STATE_KEY);
}

// Reading progress storage
const READING_PROGRESS_KEY = "kathamandir_reading_progress";

export interface ReadingProgress {
  [storyId: string]: {
    scrollPosition: number;
    lastRead: number;
    completed: boolean;
  };
}

export function saveReadingProgress(storyId: string, scrollPosition: number, completed: boolean = false) {
  try {
    const existing = loadAllReadingProgress();
    existing[storyId] = {
      scrollPosition,
      lastRead: Date.now(),
      completed,
    };
    localStorage.setItem(READING_PROGRESS_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error("Error saving reading progress:", e);
  }
}

export function loadReadingProgress(storyId: string): { scrollPosition: number; completed: boolean } | null {
  try {
    const existing = loadAllReadingProgress();
    return existing[storyId] || null;
  } catch (e) {
    console.error("Error loading reading progress:", e);
  }
  return null;
}

export function loadAllReadingProgress(): ReadingProgress {
  try {
    const stored = localStorage.getItem(READING_PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error loading reading progress:", e);
  }
  return {};
}
