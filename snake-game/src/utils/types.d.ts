// GAME OBJECT TYPES:
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

// PLAYER TYPES:
declare type PlayerSpeed = {
  x: number,
  y: number,
}


// Interfaces: -------------------------------------------------

declare interface GameInformation{
  postion: ObjectPosition,
  size: ObjectSize,
  skin: ObjectSkin
}