import { GameInfo, ResultsInfo } from "../types.js";
import { FormController } from "./form-controller.js";
import { GameController } from "./game-controller.js";
import { ResultsView } from "../views/results-view.js";

export class AppController{

  private renderElement : HTMLElement;
  private quizForm : FormController;
  private gameController : GameController;
  private resultsView : ResultsView;

  constructor(
    renderElement : string
  ){

    // checar se o elemento realmento existe
    this.renderElement = document.querySelector(renderElement);

    this.quizForm = new FormController(this.renderElement, (gameInfo:GameInfo) => this.onQuizFormSubmit(gameInfo))
    this.reset();

    this.gameController = new GameController(this.renderElement, (score:number) => this.onGameFinish(score));

    this.resultsView = new ResultsView(this.renderElement);

  }

  private reset(){
    console.log('reseting')
    this.quizForm.renderForm()
  }

  private onQuizFormSubmit(gameInfo : GameInfo) : void{

    this.gameController.createGame(gameInfo)

  }

  private onGameFinish(score:number){  
    const resultsInfo : ResultsInfo = {
      onReset: () => this.reset(),
      score: score
    }
    this.resultsView.render(resultsInfo);

  }

}