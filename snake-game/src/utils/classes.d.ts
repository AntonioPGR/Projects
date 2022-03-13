/**
 * Para cada elemento mostrado no canvas.
*/
declare class GameObjectClass{

  //Class Variables;
  _position: ObjectPosition;
  _size: ObjectSize;
  _skin: ObjectSkin;
  
  // Class Functions;
  constructor(gameInfo:GameInformation) : void;

  // Getter And Setters;
  public getObjectPosition(): ObjectPosition
  public setObjectPosition(newObjectPosition: ObjectPosition): void

  public getObjectSize(): ObjectSize
  public setObjectSize(newObjectSize:ObjectSize): void 

  public getObjectSkin(): ObjectSkin
  public setObjectSkin(newObjectSkin: ObjectSkin): void
  
}

/**
 * Para o player mostrado no jogo
*/
declare class Player extends GameObjectClass{

  _speed: PlayerSpeed;
  _direction: PlayerDirection;

  // Class Functions:
  constructor(playereInfo:PlayerInformation) : void;

  public changePosition() :void;  

}