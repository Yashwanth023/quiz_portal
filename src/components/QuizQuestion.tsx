
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
    <div className="w-full max-w-2xl mx-auto p-8 animate-fade-in bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
      <div className="mb-8">
        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 shadow-lg"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-scale-in">{question}</h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full p-4 text-left rounded-xl border-2 border-gray-200
                     transition-all duration-300 hover:border-primary hover:bg-primary-light
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
                     bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md
                     transform hover:scale-[1.02] hover:translate-x-1
                     animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
