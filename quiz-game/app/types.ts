import { GameDifficulty } from "./enums/gameDifficults"
import { GameThemes } from "./enums/gameThemes"

export type GameInfo = {
  difficulty: GameDifficulty,
  theme: GameThemes,
}

export type onQuizFormSubmit = (gameInfo:GameInfo) => void;
export type voidFunction = () => void;