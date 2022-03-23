import GameObject from "../utils/gameObject";

declare class TableClass{

  _table: HTMLCanvasElement;
  _ctx:CanvasRenderingContext2D;

  constructor(gameCanvas:HTMLCanvasElement, context:CanvasRenderingContext2D) : void

  public getTableSize() : ObjectSize;
  public clean() : void;
  public draw(object : GameObject) : void;

  // ---------- GETTERS AND SETTERS ----------
  public getTable() : HTMLCanvasElement
  public setTable(newTable : HTMLCanvasElement)
  public getContext() : CanvasRenderingContext2D
  public setContext(newContext : CanvasRenderingConterivate)

}