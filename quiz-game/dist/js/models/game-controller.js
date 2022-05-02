export class GameController {
    constructor(renderElement) {
        this.renderElement = renderElement;
    }
    createGame(gameInfo) {
        this.getQuestions(gameInfo)
            .then((res) => console.log(res));
    }
    getQuestions(gameInfo) {
        const url = `https://opentdb.com/api.php?amount=10&category=${gameInfo.theme}&difficulty=${gameInfo.difficulty}`;
        console.log(url);
        const request = fetch(url).then((json) => JSON.parse(json.body.toString()));
        return request;
    }
}
