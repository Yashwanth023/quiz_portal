
import { Star, Trophy } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizResults = ({ score, totalQuestions, onRetry }: QuizResultsProps) => {
  const percentage = (score / totalQuestions) * 100;
  const achievements = [
    { threshold: 100, icon: Trophy, label: "Perfect Score!" },
    { threshold: 80, icon: Star, label: "Quiz Master" },
  ];

  const earnedAchievements = achievements.filter(
    (achievement) => percentage >= achievement.threshold
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-8 animate-scale-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">
        Quiz Complete!
      </h2>

      <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-white/20">
        <div className="text-center mb-6">
          <p className="text-7xl font-bold text-primary mb-2 animate-scale-in">
            {Math.round(percentage)}%
          </p>
          <p className="text-gray-600 animate-fade-in delay-200">
            You scored {score} out of {totalQuestions}
          </p>
        </div>

        {earnedAchievements.length > 0 && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-300">
              Achievements Unlocked
            </h3>
            <div className="flex flex-wrap gap-4">
              {earnedAchievements.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className="flex items-center bg-primary-light rounded-xl p-4
                           shadow-md hover:shadow-lg transition-all duration-300
                           border border-primary/20 animate-scale-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <Icon className="text-primary mr-2" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={onRetry}
          className="bg-primary text-white px-8 py-3 rounded-xl font-semibold
                   transform transition-all duration-300 hover:scale-105 hover:bg-primary-dark
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
                   shadow-lg hover:shadow-xl border border-primary/20 backdrop-blur-sm
                   animate-scale-in delay-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
