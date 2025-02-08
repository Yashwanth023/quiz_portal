
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizData } from "@/services/quizService";
import { QuizState } from "@/types/quiz";
import QuizStart from "@/components/QuizStart";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { useToast } from "@/hooks/use-toast";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    isComplete: false,
  });
  const [hasStarted, setHasStarted] = useState(false);

  const { data: quizData, isLoading, error } = useQuery({
    queryKey: ["quiz"],
    queryFn: fetchQuizData,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load quiz data. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = quizData?.questions[quizState.currentQuestion];
    const isCorrect = currentQuestion?.correctAnswer === answer;

    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: isCorrect
        ? "Great job! Keep going!"
        : `The correct answer was: ${currentQuestion?.correctAnswer}`,
      variant: isCorrect ? "default" : "destructive",
    });

    setQuizState((prev) => {
      const newState = {
        ...prev,
        answers: [...prev.answers, answer],
        score: isCorrect ? prev.score + 1 : prev.score,
      };

      if (prev.currentQuestion === (quizData?.questions.length || 0) - 1) {
        return {
          ...newState,
          isComplete: true,
        };
      }

      return {
        ...newState,
        currentQuestion: prev.currentQuestion + 1,
      };
    });
  };

  const handleRetry = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      score: 0,
      isComplete: false,
    });
    setHasStarted(false);
  };

  const handleLogin = () => {
    toast({
      title: "Login",
      description: "Login functionality coming soon!",
    });
  };

  const handleSignup = () => {
    toast({
      title: "Sign Up",
      description: "Sign up functionality coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/50 to-secondary-dark/50">
      {/* Header with auth buttons */}
      <header className="p-4 flex justify-between items-center animate-fade-in">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
          Tech Trivia Master
        </h1>
        <div className="flex gap-4">
          <Button
            onClick={handleLogin}
            variant="outline"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
          <Button
            onClick={handleSignup}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-4">
        {isLoading ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="animate-pulse text-xl text-gray-600 bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              Loading quiz...
            </div>
          </div>
        ) : !hasStarted ? (
          <QuizStart onStart={handleStart} />
        ) : quizState.isComplete ? (
          <QuizResults
            score={quizState.score}
            totalQuestions={quizData?.questions.length || 0}
            onRetry={handleRetry}
          />
        ) : (
          currentQuestion && (
            <QuizQuestion
              question={currentQuestion.question}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
              currentQuestion={quizState.currentQuestion}
              totalQuestions={quizData?.questions.length || 0}
            />
          )
        )}
      </main>
    </div>
  );
};

export default Index;
