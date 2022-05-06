import { View } from "./view.js";
import { ResultsInfo } from "../types.js";

export class ResultsView extends View<ResultsInfo>{

  public render(informations: ResultsInfo): void {
    
    super.render(informations);

    document.querySelector("button#reset__button").addEventListener('submit', () => informations.onReset())

  }

  protected template(model: ResultsInfo): string {
    const score = model.score;

    return `
      <form class="quiz__form">

        <h3 class="topic_title"> Results </h3>

        <p> Score: ${score} </p>

        <button type="submit" class="start_button" id="reset__button"> Reset Game </button>

      </form>
    `
  }

}