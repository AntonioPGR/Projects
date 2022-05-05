import { onQuizFormSubmit, GameInfo } from "../types.js";
import { FormView } from "../views/form-view.js";
import { GameDifficulty } from "../enums/gameDifficults.js";
import { GameThemes } from "../enums/gameThemes.js";

export class FormController{

  private formView : FormView;

  constructor(
    private renderElement : HTMLElement, 
    private onSubmit : onQuizFormSubmit
  ){

    this.formView = new FormView(this.renderElement)
    this.formView.render(() => this.onFormSubmit())

  }

  private onFormSubmit(){

    const difficulty = FormController.getGameDifficulty()
    const theme = FormController.getGameTheme()
    
    const gameConfig : GameInfo = {
      difficulty: difficulty,
      theme: theme,
    }
    
    this.onSubmit(gameConfig)
    
  }
  
  public static getGameDifficulty() : GameDifficulty{
  
    const difficultyInput : HTMLInputElement = document.querySelector("input.topic__option[name=difficulty]:checked");
    const difficultyValue = difficultyInput.value;
  
    let difficulty;
    if(difficultyValue === GameDifficulty.easy){
      difficulty = GameDifficulty.easy;
    } else if(difficultyValue === GameDifficulty.medium){
      difficulty = GameDifficulty.medium;
    } else if(difficultyValue === GameDifficulty.hard){
      difficulty = GameDifficulty.hard
    } else {
      console.log("Default game difficulty")
      difficulty = GameDifficulty.default
    }
  
    return difficulty;
  }
  
  private static getGameTheme() : GameThemes{
  
    const themeInput : HTMLInputElement = document.querySelector("input.topic__option[name=theme]:checked");
    const themeValue = Number(themeInput.value);
  
    let theme;
    if(themeValue === GameThemes.computer){
      theme = GameThemes.computer;
    } else if(themeValue === GameThemes.sports){
      theme = GameThemes.sports;
    } else if(themeValue === GameThemes.videoGames){
      theme = GameThemes.videoGames;
    } else {
      console.log("Default game theme")
      theme = GameThemes.default
    }
  
    return theme
  }
  
  
}