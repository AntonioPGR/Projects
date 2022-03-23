import { TableClass } from "../typescript/table";
import gameObject from "./gameObject";

export default class Table implements TableClass{

  _table: HTMLCanvasElement;
  _ctx:CanvasRenderingContext2D;

  constructor(gameCanvas:HTMLCanvasElement, context:CanvasRenderingContext2D){

    this._table = gameCanvas;
    this._ctx = context;

  }

  /**
   * @returns the size of the canvas 
   */
  public getTableSize(): ObjectSize {
    const table = this.getTable();
    const ctx = this.getContext();

    const height = table.height;
    const width = table.width;

    const size : ObjectSize = {
      height: height,
      width: width
    }

    return size;

  }

  /**
   * Clean the canvas for redraw
   */
  public clean() : void{

    const ctx = this.getContext();
    const canvasSize = this.getTableSize()

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

  }

  /**
   * Draws an gameObject in the game table
   */
  public draw(object: gameObject): void {
    const obj = object;
    const ctx = this.getContext();
    
    ctx.fillStyle = obj.getSkin().color

    const position = obj.getPosition();
    const size = obj.getSize();
    const finalPostiton : ObjectFinalPosition = {
      xStart: position.x,
      xEnd: position.x + size.width,
      yStart: position.y,
      yEnd: position.y + size.height
    }
    console.log(finalPostiton);
    ctx.fillRect(finalPostiton.xStart, finalPostiton.yStart, finalPostiton.xEnd, finalPostiton.yEnd)

  }

  // ---------- GETTERS AND SETTERS ----------
  public getContext(): CanvasRenderingContext2D {
    return this._ctx;
  }
  public setContext(newContext: CanvasRenderingContext2D) {
    this._ctx = newContext;
  }

  public getTable(): HTMLCanvasElement {
    return this._table;
  }
  public setTable(newTable: HTMLCanvasElement) {
    this._table = newTable;
  }


}