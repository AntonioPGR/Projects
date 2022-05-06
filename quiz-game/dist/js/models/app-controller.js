import { FormController } from "./form-controller.js";
import { GameController } from "./game-controller.js";
import { ResultsView } from "../views/results-view.js";
export class AppController {
    constructor(renderElement) {
        // checar se o elemento realmento existe
        this.renderElement = document.querySelector(renderElement);
        this.quizForm = new FormController(this.renderElement, (gameInfo) => this.onQuizFormSubmit(gameInfo));
        this.reset();
        this.gameController = new GameController(this.renderElement, (score) => this.onGameFinish(score));
        this.resultsView = new ResultsView(this.renderElement);
    }
    reset() {
        console.log('reseting');
        this.quizForm.renderForm();
    }
    onQuizFormSubmit(gameInfo) {
        this.gameController.createGame(gameInfo);
    }
    onGameFinish(score) {
        const resultsInfo = {
            onReset: () => this.reset(),
            score: score
        };
        this.resultsView.render(resultsInfo);
    }
}
