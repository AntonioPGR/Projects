import { FormController } from "./form-controller.js";
export class AppController {
    constructor(renderElement) {
        // checar se o elemento realmento existe
        this.renderElement = document.querySelector(renderElement);
        this.quizForm = new FormController(this.renderElement, this.onQuizFormSubmit);
    }
    onQuizFormSubmit(gameInfo) {
        console.log(gameInfo);
    }
}
