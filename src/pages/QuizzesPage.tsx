import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/i18n";
import { BackButton } from "@/components/BackButton";
import { cn } from "@/lib/utils";
import { quizQuestions, getRandomQuestions, QuizQuestion } from "@/data/quizQuestions";
import { saveQuizState, loadQuizState, clearQuizState } from "@/hooks/useStateRestore";

type Difficulty = "easy" | "medium" | "hard";

export default function QuizzesPage() {
  const { t, language } = useLanguage();
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    const savedState = loadQuizState();
    if (savedState?.difficulty && savedState.questionIds.length > 0) {
      const restoredQuestions = savedState.questionIds
        .map(id => quizQuestions.find(q => q.id === id))
        .filter(Boolean) as QuizQuestion[];

      if (restoredQuestions.length > 0) {
        setDifficulty(savedState.difficulty);
        setQuestions(restoredQuestions);
        setCurrentQuestion(savedState.currentQuestion);
        setScore(savedState.score);
        setIsAnswered(savedState.isAnswered);
        setSelectedAnswer(savedState.selectedAnswer);
        setQuizComplete(savedState.quizComplete);
      }
    }
  }, []);

  useEffect(() => {
    if (difficulty && questions.length > 0) {
      saveQuizState({
        difficulty,
        currentQuestion,
        score,
        questionIds: questions.map(q => q.id),
        isAnswered,
        selectedAnswer,
        quizComplete
      });
    }
  }, [difficulty, currentQuestion, score, isAnswered, selectedAnswer, quizComplete, questions]);

  const startQuiz = (diff: Difficulty) => {
    clearQuizState();
    setDifficulty(diff);
    setQuestions(getRandomQuestions(diff, 5));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getQuestion = (q: QuizQuestion) =>
    language === "hindi" ? q.questionHindi :
    language === "telugu" ? q.questionTelugu :
    q.question;

  const getOptions = (q: QuizQuestion) =>
    language === "hindi" ? q.optionsHindi :
    language === "telugu" ? q.optionsTelugu :
    q.options;

  const getExplanation = (q: QuizQuestion) =>
    language === "hindi" ? q.explanationHindi :
    language === "telugu" ? q.explanationTelugu :
    q.explanation;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    clearQuizState();
    setDifficulty(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  /* ---------------- Difficulty Selection ---------------- */
  if (!difficulty) {
    return (
      <div className="min-h-screen" key={language}>
        <BackButton />

        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-lg w-full"
          >
            <h1 className="font-display text-3xl text-foreground mb-2">
              {t.quiz.testKnowledge}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t.quiz.challengeYourself}
            </p>

            <div className="space-y-4">
              {(["easy", "medium", "hard"] as Difficulty[]).map(diff => (
                <Button
                  key={diff}
                  variant="outline"
                  size="lg"
                  onClick={() => startQuiz(diff)}
                  className={cn(
                    "w-full justify-between",
                    diff === "easy" && "border-green-500/30 hover:bg-green-500/10",
                    diff === "medium" && "border-yellow-500/30 hover:bg-yellow-500/10",
                    diff === "hard" && "border-red-500/30 hover:bg-red-500/10"
                  )}
                >
                  <span>
                    {diff === "easy" ? t.quiz.easy :
                     diff === "medium" ? t.quiz.medium :
                     t.quiz.hard}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    5 {t.quiz.question}s
                  </span>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;

  /* ---------------- Quiz Complete ---------------- */
  if (quizComplete) {
    return (
      <div className="min-h-screen" key={language}>
        <BackButton />

        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-8 rounded-2xl bg-card border border-border max-w-md w-full"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-primary" />
            </div>

            <h1 className="font-display text-3xl text-foreground mb-2">
              {t.quiz.quizComplete}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t.quiz.youScored} {score} {t.quiz.outOf} {questions.length}
            </p>

            <Button
              variant="gold"
              size="lg"
              onClick={restartQuiz}
              className="w-full"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t.quiz.tryAgain}
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ---------------- Quiz Questions ---------------- */
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + (isAnswered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen" key={language}>
      <BackButton />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              {t.quiz.question} {currentQuestion + 1} {t.quiz.of} {questions.length}
            </span>
            <span>
              {t.quiz.score}: {score}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-6">
              {getQuestion(question)}
            </h2>

            <div className="space-y-3 mb-6">
              {getOptions(question).map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full p-4 rounded-xl text-left transition-all duration-300 border",
                    !isAnswered && "hover:border-primary/50 hover:bg-muted/50 border-border bg-background",
                    isAnswered && index === question.correct && "bg-green-500/10 border-green-500/50 text-green-400",
                    isAnswered && index === selectedAnswer && index !== question.correct && "bg-red-500/10 border-red-500/50 text-red-400",
                    isAnswered && index !== selectedAnswer && index !== question.correct && "opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && index === question.correct && (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    )}
                    {isAnswered && index === selectedAnswer && index !== question.correct && (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {isAnswered && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">
                      {t.quiz.explanation}:
                    </span>{" "}
                    {getExplanation(question)}
                  </p>
                </motion.div>

                <Button variant="gold" onClick={nextQuestion} className="w-full">
                  {currentQuestion < questions.length - 1
                    ? t.quiz.nextQuestion
                    : t.quiz.seeResults}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
