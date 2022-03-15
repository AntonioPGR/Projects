declare class TableClass{

  _table: HTMLCanvasElement;
  _ctx:CanvasRenderingContext2D;

  constructor(gameCanvas:HTMLCanvasElement, context:CanvasRenderingContext2D) : void

  public getTableSize() : ObjectSize;

  public getTable() : HTMLCanvasElement
  public setTable(newTable : HTMLCanvasElement)

  public getContext() : CanvasRenderingContext2D
  public setContext(newContext : CanvasRenderingConterivate)

}