import { Apple } from '../classes/apple'
import { Player } from '../classes/player'
import { MaxPosition, Position, Size, Speed, Skin, Color } from './types'

export interface GameObjectInfo {
  position: Position,
  size: Size,
  maxPosition: MaxPosition,
  skin: Skin,
}

export interface PlayerInfo extends GameObjectInfo {
  speed: Speed,
}

export interface AppleInfo extends GameObjectInfo{
  
}

export interface GameInfo{
  ctx: CanvasRenderingContext2D;
  player: Player,
  apple: Apple,
  size: Size,
  speed: Speed,
  bgColor: Color;
}