export class Player{

  private position : { x:number, y:number };
  private size : number;
  private speed : number;
  private skin : { color: string, image?: string};
  private tableBorders : { top:number, right:number, bottom:number, left:number }
  
  constructor(){
    
  }
  
  public getSize(): number {
      return this.size;
  }
  public setSize(size: number): void {
      this.size = size;
  }

  public getSpeed(): number {
      return this.speed;
  }
  public setSpeed(speed: number): void {
      this.speed = speed;
  }

}