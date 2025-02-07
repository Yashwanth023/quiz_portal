
import { Trophy } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="text-primary mb-8">
        <Trophy size={64} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Quiz!</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Test your knowledge and earn achievements. Are you ready to begin?
      </p>
      <button
        onClick={onStart}
        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold
                 transform transition-all duration-200 hover:scale-105 hover:bg-primary-dark
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
