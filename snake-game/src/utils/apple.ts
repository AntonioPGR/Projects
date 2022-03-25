import GameObject from "./gameObject";
export default class Apple extends GameObject implements AppleClass{

  constructor(appleInfo:AppleInformation){

    const gameInfo : GameObjectsInformation = {
      size: appleInfo.size,
      skin: appleInfo.skin,
      position: appleInfo.position,
      maxPosition: appleInfo.maxPosition,
    };

    super(gameInfo)

  }

  generateNewPosition(): ObjectPosition {
    return { x: 1, y: 1 }
  }

}