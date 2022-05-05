import { View } from "./view.js";
export class QuestionView extends View {
    render(informations) {
        super.render(informations);
        document.querySelector("form.question").addEventListener('submit', (ev) => {
            ev.preventDefault();
            informations.onSubmit();
        });
    }
    template(model) {
        const question = model.question;
        const answers = [question.correct_answer, ...question.incorrect_answers];
        return `<form style="margin-bottom: 0;" class="quiz__form__topic question">

      <div class="quiz__form__topic">
        <h3 class="topic__title"> ${question.question} </h3>
        ${this.renderAnswers(answers)}
      </div>

      <button type="submit" class="start_button"/> Confirmar </button>

    </form>`;
    }
    renderAnswers(answer) {
        const shuffledQuestions = this.shuffleAnswer(answer);
        const answersArray = shuffledQuestions.map((answer, index) => {
            return `<div class="form__option">
        <input 
          type="radio" 
          name="answers" 
          class="question topic__option"
          value="${answer}"
          id="answer${index}"
        >
        <label class="option__text" for="answer${index}">${answer}</label>
      </div>`;
        });
        const answersFormated = answersArray.reduce((previous, current) => {
            return previous + current;
        });
        return answersFormated;
    }
    shuffleAnswer(question) {
        const shuffledQuestions = [...question.sort(() => Math.random() - 0.5)];
        return shuffledQuestions;
    }
}
