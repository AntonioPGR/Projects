export default class GameObject implements GameObjectClass{
  
  _position : ObjectPosition;
  _size : ObjectSize;
  _skin : ObjectSkin;

  constructor(gameInfo:GameInformation){
    
    this._position = gameInfo.postion;
    this._size = gameInfo.size;
    this._skin = gameInfo.skin;

  }

  public getObjectPosition(): ObjectPosition {
    return this._position;
  }
  public getObjectSize(): ObjectSize {
    return this._size
  }
  public getObjectSkin(): ObjectSkin {
    return this._skin
  }
  public setObjectPosition(newObjectPosition: ObjectPosition): void {
    this._position = newObjectPosition;
  }
  public setObjectSize(newObjectSize: ObjectSize): void {
    this._size = newObjectSize;
  }
  public setObjectSkin(newObjectSkin: ObjectSkin): void {
    this._skin = newObjectSkin;
  }
  

}