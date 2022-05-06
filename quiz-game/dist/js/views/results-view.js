import { View } from "./view.js";
export class ResultsView extends View {
    render(informations) {
        super.render(informations);
        document.querySelector("button#reset__button").addEventListener('submit', () => informations.onReset());
    }
    template(model) {
        const score = model.score;
        return `
      <form class="quiz__form">

        <h3 class="topic_title"> Results </h3>

        <p> Score: ${score} </p>

        <button type="submit" class="start_button" id="reset__button"> Reset Game </button>

      </form>
    `;
    }
}
