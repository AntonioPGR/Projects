import { GameInfo } from "../types.js";
import { FormController } from "./form-controller.js";
import { GameController } from "./game-controller.js";

export class AppController{

  private renderElement : HTMLElement;
  private quizForm : FormController;
  private gameController : GameController;

  constructor(
    renderElement : string
  ){

    // checar se o elemento realmento existe
    this.renderElement = document.querySelector(renderElement);

    this.quizForm = new FormController(this.renderElement, this.onQuizFormSubmit)

    this.gameController = new GameController(this.renderElement);

  }

  private onQuizFormSubmit(gameInfo : GameInfo){

    console.log(this)

    this.gameController.createGame(gameInfo)

  }

}