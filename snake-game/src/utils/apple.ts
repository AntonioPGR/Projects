import GameObject from "./gameObject";

export default class Apple extends GameObject implements AppleClass{

  _maxPosition: MaxPosition;

  constructor(appleInfo:AppleInformation){

    const gameInfo : GameObjectsInformation = {
      size: appleInfo.size,
      skin: appleInfo.skin,
      position: appleInfo.position
    };

    super(gameInfo)

    this._maxPosition = appleInfo.maxPosition

  }

  generateNewPosition(): ObjectPosition {
    return { x: 1, y: 1 }
  }

}