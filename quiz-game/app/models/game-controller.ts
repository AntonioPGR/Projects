import { GameInfo, QuestionsApiResponse, Question, QuestionInfo, voidFunction } from "../types.js"
import { QuestionView } from '../views/question-view.js';

export class GameController{

  private questions : Question[];
  private renderView : QuestionView;
  private questionNumber : number = 1;
  private score : number = 0

  constructor(
    private renderElement : HTMLElement,
    private onGameFinish : Function
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

    const isFinished = this.isGameQuestionsFinished();

    if(!isFinished){

      if(this.checkAnswer()){
  
        this.increaseScore();
  
      }

      this.updateQuestionView();

    } else {

      this.onGameFinish(this.score)

    }


  }

  private checkAnswer() : boolean{
    
    const responseInput : HTMLInputElement = document.querySelector("input.question:checked")
    const response = responseInput.value;
    const current_question : Question = this.currentQuestion;
    const correct_answer = current_question.correct_answer;

    if(response === correct_answer){
      
      return true

    } else {

      return false

    }

  }

  private increaseScore() : void{
    this.score += 1
  }

  private isGameQuestionsFinished() : boolean{
    
    if(this.questions.length > this.questionNumber){
      console.log("unfinished");
      this.increaseQuestionNumber()
      return false
    } else {
      console.log("fininhed");
      return true
    }

  }

  private increaseQuestionNumber(){
    this.questionNumber += 1
  }

  private get currentQuestion() : Question{
    return this.questions[this.questionNumber - 1];
  }

}