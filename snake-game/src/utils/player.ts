import GameObject from "./gameObject";

export default class Player implements PlayerClass{

  _speed: number;
  _bodyPieces: [GameObject];

  constructor(playerInfo:PlayerInformation){

    this._speed = playerInfo.speed;
    this._bodyPieces = playerInfo.bodyPieces;

  }

  public move(): void {
    
  }

  // ---------- GETTERS AND SETTERS ----------
  public setSpeed(speed: Speed): void {
    this._speed =  speed;
  }
  public getSpeed(): Speed {
    return this._speed
  }
  public getBodyPieces(): [GameObject] {
    return this._bodyPieces
  }
  public setBodyPieces(bodyPieces: [GameObject]): void {
    this._bodyPieces = bodyPieces
  }

}