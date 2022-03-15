export default class GameObject implements GameObjectClass{
  
  _position: ObjectPosition[];
  _size: ObjectSize;
  _skin: ObjectSkin;

  constructor(gameInfo:GameInformation){

    this._position = gameInfo.position;
    this._size = gameInfo.size;
    this._skin = gameInfo.skin;

  }

  public getObjectPosition(): ObjectPosition[] {
    return this._position;
  }
  public setObjectPosition(newObjectPosition: ObjectPosition[]): void {
    this._position = newObjectPosition;
  }

  public getObjectSize(): ObjectSize {
    return this._size;
  }
  public setObjectSize(newObjectSize: ObjectSize): void {
    this._size = newObjectSize;
  }

  public getObjectSkin(): ObjectSkin {
    return this._skin;
  }
  public setObjectSkin(newObjectSkin: ObjectSkin): void {
    this._skin = newObjectSkin;
  }

}