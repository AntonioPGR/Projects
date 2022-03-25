/**
 * Para cada elemento mostrado no canvas.
*/
declare class GameObjectClass{

  //Class Variables;
  _position: ObjectPosition;
  _size: ObjectSize;
  _skin: ObjectSkin;
  _maxPosition: MaxPosition;
  
  // Class Functions;
  constructor(gameInfo:GameInformation) : void;

  // Getter And Setters;
  public getPosition(): ObjectPosition;
  public setPosition(newObjectPosition: ObjectPosition): void;
  public getSize(): ObjectSize;
  public setSize(newObjectSize:ObjectSize): void;
  public getSkin(): ObjectSkin;
  public setSkin(newObjectSkin: ObjectSkin): void;
  public getMaxPosition(): MaxPosition
  public setMaxPosition(maxPosition: MaxPosition): void
  
}

