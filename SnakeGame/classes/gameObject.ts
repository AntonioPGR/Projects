import { GameObjectInfo } from "../types/interfaces";
import { MaxPosition, Position, Size, Skin } from "../types/types";

export class GameObjects{

  private _skin : Skin;
  private _position : Position;
  private _maxPosition : MaxPosition;
  private _dimensions : Size;

  constructor(gameInfo:GameObjectInfo){

    this._skin = gameInfo.skin;
    this._dimensions = gameInfo.size;
    this._maxPosition = gameInfo.maxPosition;
    this._position = gameInfo.position;

  }

  public getColor(): Skin {
    return this._skin;
  }
  public setColor(_skin: Skin): void {
    this._skin = _skin;
  }

  public getPosition(): Position {
    return this._position;
  }
  public setPosition(_position: Position): void {
    this._position = _position;
  }

  public getMaxPosition(): MaxPosition {
    return this._maxPosition;
  }
  public setMaxPosition(_maxPosition: MaxPosition): void {
    this._maxPosition = _maxPosition;
  }

  public getDimensions(): Size {
    return this._dimensions;
  }
  public setDimensions(_dimensions: Size): void {
    this._dimensions = _dimensions;
  }
}