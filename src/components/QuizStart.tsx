
import { Trophy } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="relative w-full max-w-2xl mx-auto p-8 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl border border-white/40 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 z-0" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-primary mb-8 animate-bounce">
            <Trophy size={64} className="drop-shadow-xl" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 animate-scale-in bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Tech Trivia Master
          </h1>
          
          <p className="text-gray-700 mb-8 text-center max-w-md mx-auto animate-fade-in delay-200">
            Test your knowledge of technology, programming, and digital innovation. Are you ready to become a Tech Trivia Master?
          </p>
          
          <button
            onClick={onStart}
            className="bg-primary text-white px-8 py-3 rounded-xl font-semibold
                     transform transition-all duration-300 hover:scale-105 hover:bg-primary-dark
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
                     shadow-lg hover:shadow-2xl border border-primary/20 backdrop-blur-sm
                     animate-scale-in delay-300
                     relative overflow-hidden group"
          >
            <span className="relative z-10">Start Quiz</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
