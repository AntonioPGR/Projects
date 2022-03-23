export default class GameObject implements GameObjectClass{
  
  _position: ObjectPosition;
  _size: ObjectSize;
  _skin: ObjectSkin;

  constructor(gameInfo:GameObjectsInformation){

    this._position = gameInfo.position;
    this._size = gameInfo.size;
    this._skin = gameInfo.skin;

  }

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

}