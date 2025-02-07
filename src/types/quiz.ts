
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizData {
  questions: QuizQuestion[];
}

export interface QuizState {
  currentQuestion: number;
  answers: string[];
  score: number;
  isComplete: boolean;
}
