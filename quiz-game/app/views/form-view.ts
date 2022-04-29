import { View } from "./view.js";

/**
 * Controla a vizualização do formulário inicial
 */
export class FormView extends View <string> {

  protected template(functions:string): string {
    return `
    <form id="quiz__form" onSubmit=${functions}>

      ${this.themes_template()}

      ${this.difficulty_template()}

      <button type="submit" class="start_button" id="start__button"> Start Quiz </button>

    </form>
    `
  }

  private themes_template(): string{
    return `
    <div class="quiz__form__topic" id="quiz__themes">

      <h3 class="topic__title">Themes:</h3>
        
      <div class="form__option">
        <input class="topic__option" type="radio" name="theme" id="soccer-theme" checked>
        <label class="option__text" for="soccer-theme">Soccer</label>
      </div>
  
      <div class="form__option">
        <input class="topic__option" type="radio" name="theme" id="computer-theme" >
        <label class="option__text" for="computer-theme">Computer</label>
      </div>
  
      <div class="form__option">
        <input class="topic__option" type="radio" name="theme" id="video-game-theme" >
        <label class="option__text" for="video-game-theme">Video games</label>
      </div>
        
    </div>
    `
  }

  private difficulty_template() : string{
    return `
    <div class="quiz__form__topic" id="quiz__difficulty">

        <h3 class="topic__title">Difficulty</h3>
        
        <div class="form__option">
          <input class="topic__option" type="radio" name="difficulty" id="easyOption" checked>
          <label class="option__text" for="easyOption">Easy</label>
        </div>

        <div class="form__option">
          <input class="topic__option" type="radio" name="difficulty" id="mediumOption" >
          <label class="option__text" for="mediumOption">Medium</label>
        </div>

        <div class="form__option">
          <input class="topic__option" type="radio" name="difficulty" id="hardOption" >
          <label class="option__text" for="hardOption">Hard</label>
        </div>

      </div>
    `
  }

}