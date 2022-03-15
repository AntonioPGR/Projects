import GameObject from "./gameObject";

export default class Player extends GameObject implements PlayerClass{

  _speed: number;

  constructor(playerInfo:PlayerInformation){

    const gameInfo : GameInformation = {
      position: playerInfo.position,
      size: playerInfo.size,
      skin: playerInfo.skin,
    };

    super(gameInfo);

    this._speed = playerInfo.speed;

  }

  public move(): void {
    
  }

}