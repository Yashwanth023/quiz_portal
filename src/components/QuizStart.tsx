
import { Trophy } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in bg-gradient-to-br from-secondary to-secondary-dark p-8 rounded-2xl shadow-lg">
      <div className="text-primary mb-8 animate-bounce">
        <Trophy size={64} className="drop-shadow-lg" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-scale-in text-gradient-primary">
        Welcome to the Quiz!
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md animate-fade-in delay-200">
        Test your knowledge and earn achievements. Are you ready to begin?
      </p>
      <button
        onClick={onStart}
        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold
                 transform transition-all duration-300 hover:scale-105 hover:bg-primary-dark
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
                 shadow-lg hover:shadow-xl border border-primary/20 backdrop-blur-sm
                 animate-scale-in delay-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
