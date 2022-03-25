export default class GameObject implements GameObjectClass{
  
  _position: ObjectPosition;
  _maxPosition: MaxPosition;
  _size: ObjectSize;
  _skin: ObjectSkin;

  constructor(gameInfo:GameObjectsInformation){

    this._position = gameInfo.position;
    this._maxPosition = gameInfo.maxPosition
    this._size = gameInfo.size;
    this._skin = gameInfo.skin;

  }

  // Getter And Setters;
  public getPosition(): ObjectPosition {
    return this._position;
  }
  public setPosition(newObjectPosition: ObjectPosition): void {
    this._position = newObjectPosition;
  }
  public getSize(): ObjectSize {
    return this._size;
  }
  public setSize(newObjectSize: ObjectSize): void {
    this._size = newObjectSize;
  }
  public getSkin(): ObjectSkin {
    return this._skin;
  }
  public setSkin(newObjectSkin: ObjectSkin): void {
    this._skin = newObjectSkin;
  }
  public getMaxPosition(): MaxPosition {
    return this._maxPosition;
  }
  public setMaxPosition(maxPosition: MaxPosition): void {
    this._maxPosition = maxPosition;
  }

}