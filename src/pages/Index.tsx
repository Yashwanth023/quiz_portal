
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizData } from "@/services/quizService";
import { QuizState } from "@/types/quiz";
import QuizStart from "@/components/QuizStart";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { useToast } from "@/hooks/use-toast";

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600">Loading quiz...</div>
      </div>
    );
  }

  if (!hasStarted) {
    return <QuizStart onStart={handleStart} />;
  }

  if (quizState.isComplete) {
    return (
      <QuizResults
        score={quizState.score}
        totalQuestions={quizData?.questions.length || 0}
        onRetry={handleRetry}
      />
    );
  }

  const currentQuestion = quizData?.questions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
          currentQuestion={quizState.currentQuestion}
          totalQuestions={quizData?.questions.length || 0}
        />
      )}
    </div>
  );
};

export default Index;
