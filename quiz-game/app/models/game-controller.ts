import { GameInfo } from "../types"

export class GameController{

  constructor(
    private renderElement : HTMLElement
  ){}

  public createGame(gameInfo : GameInfo){

    this.getQuestions(gameInfo)
    .then((res) => console.log(res))

  }

  private getQuestions(gameInfo:GameInfo):Promise<string>{

    const url = `https://opentdb.com/api.php?amount=10&category=${gameInfo.theme}&difficulty=${gameInfo.difficulty}`
    console.log(url)
    const request = fetch(url).then(
      (json) => JSON.parse(json.body.toString())
    )
    return request;

  }

}