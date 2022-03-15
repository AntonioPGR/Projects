/**
 * Para o player mostrado no jogo
*/
declare class PlayerClass extends GameObjectClass{

  _speed: Speed;

  // Class Functions:
  constructor(playerInfo:PlayerInformation) : void;

  public move() : void;

}