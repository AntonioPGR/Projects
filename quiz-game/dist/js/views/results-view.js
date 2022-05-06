import { View } from "./view.js";
export class ResultsView extends View {
    render(informations) {
        super.render(informations);
        document.querySelector("form.quiz__form").addEventListener('submit', (ev) => {
            ev.preventDefault();
            informations.onReset();
        });
    }
    template(model) {
        const score = model.score;
        return `
      <form class="quiz__form">

        <h3 class="topic__title"> Results </h3>

        <p class="score"> Score: ${score} </p>

        <button type="submit" class="start_button" id="reset__button"> Reset Game </button>

      </form>
    `;
    }
}
