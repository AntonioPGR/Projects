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

    this.quizForm = new FormController(this.renderElement, (gameInfo:GameInfo) => this.onQuizFormSubmit(gameInfo))

    this.gameController = new GameController(this.renderElement);

  }

  private onQuizFormSubmit(gameInfo : GameInfo) : void{

    this.gameController.createGame(gameInfo)

  }

}