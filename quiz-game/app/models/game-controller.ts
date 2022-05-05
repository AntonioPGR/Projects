import { GameInfo, QuestionsApiResponse, Question, QuestionInfo } from "../types.js"
import { QuestionView } from '../views/question-view.js';

export class GameController{

  private questions : Question[];
  private renderView : QuestionView;
  private questionNumber : number = 1;
  private score : number = 0

  constructor(
    private renderElement : HTMLElement
  ){

    this.renderView = new QuestionView(this.renderElement)

  }

  public async createGame(gameInfo : GameInfo){

    this.questions = await this.getQuestions(gameInfo)
    this.startGame();

  }

  private async getQuestions(gameInfo:GameInfo) : Promise<Question[]>{

    const url = `https://opentdb.com/api.php?amount=10&category=${gameInfo.theme}&difficulty=${gameInfo.difficulty}`
    const request = await fetch(url)
    const data : QuestionsApiResponse = await request.json()
    const questions = data.results
    return questions;

  }

  private startGame() : void{

    this.resetProperties();

    this.updateQuestionView();

  }

  private resetProperties() : void{

    this.questionNumber = 1;
    this.score = 0;

  }

  private updateQuestionView() : void{
    
    const question = this.questions[this.questionNumber - 1];
    const questionInfo : QuestionInfo = {
      question: question,
      onSubmit: () => {this.makeSubmit()}
    } 
    this.renderView.render(questionInfo)

  }

  private makeSubmit() : void{

    if(!this.checkAnswer()){
      window.alert("Unaccept answer!")
      return
    }

    this.changeQuestion();

  }

  private checkAnswer() : boolean{
    
    const responseInput : HTMLInputElement = document.querySelector("input.question:checked")
    const response = responseInput.value;
    const current_question : Question = this.currentQuestion;
    const correct_answer = current_question.correct_answer;
    
    // check if the response is accept
    if(!response || typeof response !== 'string'){
      return false;
    } 

    console.log(correct_answer)
    console.log(response)

    if(response === correct_answer){
      console.log('correct')
    } else {
      console.log('uncorrect')
    }

    return true;

  }

  private changeQuestion() : void{

  }

  private get currentQuestion() : Question{
    return this.questions[this.questionNumber];
  }

}