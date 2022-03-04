import { Player } from "./player";
import { Apple } from "./apple"

export class SnakeGame{
  private _player : Player;
  private _apple : Apple;

  constructor( ){

    const startPlayer = new Player();
    this._player = startPlayer;

    const startApple = new Apple();
    this._apple = startApple;

  }

}