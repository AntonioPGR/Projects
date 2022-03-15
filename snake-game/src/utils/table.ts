export default class Table implements TableClass{

  _table: HTMLCanvasElement;
  _ctx:CanvasRenderingContext2D;

  constructor(gameCanvas:HTMLCanvasElement, context:CanvasRenderingContext2D){

    this._table = gameCanvas;
    this._ctx = context;

  }

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