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

// PLAYER TYPES: -------------------------------------------------
declare type Speed = number;

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

declare interface GameInformation{
  position: ObjectPosition[],
  size: ObjectSize,
  skin: ObjectSkin,
}

declare interface PlayerInformation extends GameInformation{
  speed: Speed;
}

declare interface AppleInformation extends GameInformation{
  maxPosition: MaxPosition,
}