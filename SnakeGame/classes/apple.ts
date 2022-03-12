import { AppleInfo } from "../types/interfaces";
import { Color, MaxPosition, Position, Size } from "../types/types";
import { GameObjects } from "./gameObject";

export class Apple extends GameObjects{

  constructor(appleInfo:AppleInfo){

    const color = appleInfo.skin;
    const dimensions = appleInfo.size;
    const maxPosition = appleInfo.maxPosition;
    const position = appleInfo.position
    
    super({
      maxPosition: maxPosition,
      position: position,
      size: dimensions,
      skin: color,
    })
  }

}