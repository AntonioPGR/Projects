import Apple from "../utils/apple"
import Player from "../utils/player"
import Table from "../utils/table"

declare global{
  
  // GAME OBJECT TYPES: -------------------------------------------------
  declare type ObjectPosition = {
    x: number,
    y: number,
    z?: number
  }
  
  declare type ObjectSize = {
    width: number,
    height: number,
    depth?: number,
  }
  
  declare type ObjectSkin = {
    color: string,
    image?: string[]
  }

  declare type ObjectFinalPosition = {
    xStart: number,
    xEnd: number,
    yStart: number,
    yEnd: number
  }
  
  // PLAYER TYPES: -------------------------------------------------
  declare type Speed = number;
  declare type Direction = {
    UP: boolean,
    DOWN: boolean,
    LEFT: boolean,
    RIGHT: boolean
  };
  
  // APPLE TYPES: -------------------------------------------------
  declare type MaxPosition = {
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    minZ?: number,
    maxZ?: number,
  }
  
  // INTERFACES: -------------------------------------------------
    declare interface GameObjectsInformation{
    position: ObjectPosition,
    size: ObjectSize,
    skin: ObjectSkin,
  }
  
  declare interface PlayerInformation{
    bodyPieces: GameObject[],
    speed: Speed,
    direction: Direction
  }
  
  declare interface AppleInformation extends GameObjectsInformation{
    maxPosition: MaxPosition,
  }
  
  declare interface GameInformation{
    player: Player,
    apple: Apple,
    table: Table,
    tickStartSpeed: number,
    score: number
  }

}
