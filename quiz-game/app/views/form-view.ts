import { View } from "./view.js";
import { voidFunction } from "../types.js";
import { GameDifficulty } from "../enums/gameDifficults.js";
import { GameThemes } from "../enums/gameThemes.js";

/**
 * Controla a vizualização do formulário inicial
 */
export class FormView extends View <voidFunction> {

  /**
   * Método re-escrito de View, adicionando evento de submit ao formulário
   * @param onSubmit função a ser executada ao submeter o formulário
   */
  public render(onSubmit:voidFunction): void {

    super.render(onSubmit);
    const form = document.querySelector("form.quiz__form");
    form.addEventListener("submit", (ev) => {
      ev.preventDefault()

      onSubmit()

    })

  }

  protected template(functions : voidFunction): string {
    return `
    <form class="quiz__form">

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
        <input 
          class="topic__option" 
          type="radio" 
          name="theme" 
          id="sports-theme" 
          value=${GameThemes.sports}
          checked>
        <label class="option__text" for="sports-theme">Sports</label>
      </div>
  
      <div class="form__option">
        <input 
          class="topic__option" 
          type="radio" 
          name="theme" 
          id="computer-theme" 
          value=${GameThemes.computer}>
        <label class="option__text" for="computer-theme">Computer</label>
      </div>
  
      <div class="form__option">
        <input 
          class="topic__option" 
          type="radio" 
          name="theme" 
          id="video-game-theme" 
          value=${GameThemes.videoGames}>
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
          <input 
            class="topic__option" 
            type="radio" 
            name="difficulty" 
            id="easyOption" 
            value=${GameDifficulty.easy}
            checked>
          <label class="option__text" for="easyOption">Easy</label>
        </div>

        <div class="form__option">
          <input 
            class="topic__option" 
            type="radio" 
            name="difficulty" 
            id="mediumOption" 
            value=${GameDifficulty.medium}>
          <label class="option__text" for="mediumOption">Medium</label>
        </div>

        <div class="form__option">
          <input 
            class="topic__option" 
            type="radio" 
            name="difficulty" 
            id="hardOption" 
            value=${GameDifficulty.hard}>
          <label class="option__text" for="hardOption">Hard</label>
        </div>

      </div>
    `
  }

}