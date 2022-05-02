import { GameInfo } from "../types.js";
import { FormController } from "./form-controller.js";

export class AppController{

  private renderElement : HTMLElement;
  private quizForm : FormController;

  constructor(
    renderElement : string
  ){

    // checar se o elemento realmento existe
    this.renderElement = document.querySelector(renderElement);

    this.quizForm = new FormController(this.renderElement, this.onQuizFormSubmit)

  }

  private onQuizFormSubmit(gameInfo : GameInfo){

    console.log(gameInfo)

  }

}