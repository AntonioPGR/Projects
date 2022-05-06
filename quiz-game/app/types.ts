import { GameDifficulty } from "./enums/gameDifficults"
import { GameThemes } from "./enums/gameThemes"

export type GameInfo = {
  difficulty: GameDifficulty,
  theme: GameThemes,
}

export type onQuizFormSubmit = (gameInfo:GameInfo) => void;
export type voidFunction = () => void;
export type QuestionsApiResponse = {
  response_code: number,
  results: Question[]
}
export type Question = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
}
export type QuestionInfo = {
  question: Question,
  onSubmit: voidFunction;
}
export type ResultsInfo = {
  score: number;
  onReset: voidFunction;
}