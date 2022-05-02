import { FormController } from "./form-controller.js";
import { GameController } from "./game-controller.js";
export class AppController {
    constructor(renderElement) {
        // checar se o elemento realmento existe
        this.renderElement = document.querySelector(renderElement);
        this.quizForm = new FormController(this.renderElement, this.onQuizFormSubmit);
        this.gameController = new GameController(this.renderElement);
    }
    onQuizFormSubmit(gameInfo) {
        console.log(this);
        this.gameController.createGame(gameInfo);
    }
}
