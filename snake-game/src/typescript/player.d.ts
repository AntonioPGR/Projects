/**
 * Para o player mostrado no jogo
*/
declare class PlayerClass{

  _speed: Speed;
  _bodyPieces: [GameObject];

  // Class Functions:
  constructor(playerInfo:PlayerInformation) : void;

  public move() : void;

  // ---------- GETTERS AND SETTERS ----------
  public getSpeed() : Speed
  public setSpeed(Speed : Speed): void 

}