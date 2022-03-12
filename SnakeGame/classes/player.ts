import { PlayerInfo } from "../types/interfaces";
import { Position, MaxPosition, Size, Speed, Skin } from '../types/types'
import { GameObjects } from "./gameObject";

export class Player extends GameObjects{

  private _speed : Speed;
  
  /** 
   * @param startInfo um objeto contento as informações do jogador
  */
  constructor(startInfo:PlayerInfo){
    const playerStartInfo = startInfo

    super({
      maxPosition: playerStartInfo.maxPosition,
      position: playerStartInfo.position,
      size: playerStartInfo.size,
      skin:  playerStartInfo.skin
    })

    this._speed = playerStartInfo.speed;

  }

  // get and set methods
  public getSpeed(): Speed {
      return this._speed;
  }
  public setSpeed(speed: Speed): void {
      this._speed = speed;
  }

}