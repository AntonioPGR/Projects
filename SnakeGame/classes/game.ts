import { Player } from "./player";
import { Apple } from "./apple";
import { Color, Position, Size, Speed } from "../types/types";
import { GameInfo, GameObjectInfo } from "../types/interfaces";
import { GameObjects } from "./gameObject";

export class SnakeGame{
  private _player : Player;
  private _apple : Apple;
  private _canvasSize :  Size;
  private _speed : Speed;
  private _bgColor : Color
  private _context : CanvasRenderingContext2D;

  constructor(gameInfo:GameInfo){

    this._player = gameInfo.player;
    this._context = gameInfo.ctx
    this._apple = gameInfo.apple;
    this._canvasSize = gameInfo.size;
    this._speed = gameInfo.speed;
    this._bgColor = gameInfo.bgColor;

    this.loadGame();

  }

  /**
   * carrega os items iniciais do canvas para o inicio do jogo
   */
  loadGame() {
    const player = this.getPlayer();
    this.drawGameObject(player)

    const apple = this.getApple();
    this.drawGameObject(apple)

  }

  /**
   * Desenha no canvas o elemento de desejo
   * @param element elemento a ser mostrado na tela 
   */
  drawGameObject(element : GameObjects) : void{

    const ctx = this.getContext()
    const position = element.getPosition();
    const maxPosition = element.getMaxPosition();
    const dimension = element.getDimensions();

    let finalX = position.x;
    if(position.x >= maxPosition.maxX){ finalX = maxPosition.minX}

    let finalY = position.y;
    if(position.y >= maxPosition.maxY){ finalY = maxPosition.minY}

    const finalPositions : Position = {
      x: finalX,
      y: finalY
    }

    ctx.rect(finalPositions.x, finalPositions.y, dimension.width, dimension.height)
  }

  /**
   * Altera a posição do player no canvas
   * @param x nova posição em x
   * @param y nova posição em y
   */
  changePlayerPosition(x:number, y:number){

    const ctx = this.getContext();
    ctx.clearRect(0, 0, this.getCanvasSize().width, this.getCanvasSize().height)

  }

  // get and set methods
  public getPlayer(): Player {
    return this._player;
  }
  public setPlayer(player: Player): void {
    this._player = player;
  }

  public getApple(): Apple {
    return this._apple;
  }
  public setApple(_apple: Apple): void {
    this._apple = _apple;
  }

  public getCanvasSize(): Size {
    return this._canvasSize;
  }
  public setCanvasSize(canvasSize: Size): void {
    this._canvasSize = canvasSize;
  }

  public getSpeed(): Speed {
    return this._speed;
  }
  public setSpeed(speed: Speed): void {
    this._speed = speed;
  }

  public getContext(): CanvasRenderingContext2D {
    return this._context;
  }
  public setContext(context: CanvasRenderingContext2D): void {
    this._context = context;
  }

  public getBGColor(): Color {
    return this._bgColor;
  }
  public setBGColor(bgColor: Color): void {
    this._bgColor = bgColor;
  }

}