
import { Check, X } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  options,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: QuizQuestionProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 animate-fade-in">
      <div className="mb-8">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-2 bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question}</h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full p-4 text-left rounded-lg border-2 border-gray-200
                     transition-all duration-200 hover:border-primary hover:bg-primary-light
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
