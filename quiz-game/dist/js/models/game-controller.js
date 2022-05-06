var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { QuestionView } from '../views/question-view.js';
export class GameController {
    constructor(renderElement, onGameFinish) {
        this.renderElement = renderElement;
        this.onGameFinish = onGameFinish;
        this.questionNumber = 1;
        this.score = 0;
        this.renderView = new QuestionView(this.renderElement);
    }
    createGame(gameInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.questions = yield this.getQuestions(gameInfo);
            this.startGame();
        });
    }
    getQuestions(gameInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://opentdb.com/api.php?amount=10&category=${gameInfo.theme}&difficulty=${gameInfo.difficulty}`;
            const request = yield fetch(url);
            const data = yield request.json();
            const questions = data.results;
            return questions;
        });
    }
    startGame() {
        this.resetProperties();
        this.updateQuestionView();
    }
    resetProperties() {
        this.questionNumber = 1;
        this.score = 0;
    }
    updateQuestionView() {
        const question = this.questions[this.questionNumber - 1];
        const questionInfo = {
            question: question,
            onSubmit: () => { this.makeSubmit(); }
        };
        this.renderView.render(questionInfo);
    }
    makeSubmit() {
        const isFinished = this.isGameQuestionsFinished();
        if (!isFinished) {
            if (this.checkAnswer()) {
                this.increaseScore();
            }
            this.updateQuestionView();
        }
        else {
            this.onGameFinish(this.score);
        }
    }
    checkAnswer() {
        const responseInput = document.querySelector("input.question:checked");
        const response = responseInput.value;
        const current_question = this.currentQuestion;
        const correct_answer = current_question.correct_answer;
        if (response === correct_answer) {
            return true;
        }
        else {
            return false;
        }
    }
    increaseScore() {
        this.score += 1;
    }
    isGameQuestionsFinished() {
        if (this.questions.length > this.questionNumber) {
            console.log("unfinished");
            this.increaseQuestionNumber();
            return false;
        }
        else {
            console.log("fininhed");
            return true;
        }
    }
    increaseQuestionNumber() {
        this.questionNumber += 1;
    }
    get currentQuestion() {
        return this.questions[this.questionNumber - 1];
    }
}
