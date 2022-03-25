import { GameClass } from "../typescript/game";
import Apple from "./apple";
import Player from "./player";
import Table from "./table";

export default class Game implements GameClass{
  
  _player: Player;
  _apple: Apple;
  _table: Table;
  _loop: NodeJS.Timer | undefined;
  _tickSpeed: number;
  _score:number;
  _speed: number;

  constructor(gameInfo:GameInformation){
    
    this._apple = gameInfo.apple;
    this._player = gameInfo.player;
    this._table = gameInfo.table;
    this._tickSpeed = gameInfo.tickStartSpeed;
    this._score = 0;
    this._loop = undefined;
    this._speed = gameInfo.startSpeed;
    
    // make the first update of the table
    this.loadTable();

  }

  /**
   * Load / re-load the game table with new info
   */
  loadTable(): void {
    
    const table = this.getTable()
    
    table.clean()

    const apple = this.getApple()
    table.draw(apple)
    
    // drawing the player
    const player = this.getPlayer()
    player.getBodyPieces().forEach(piece => {
      table.draw(piece);
    });

  }
  
  /**
   * creates the game loop
   */
  createLoop(){
    // reseta o looping
    this.setLoop(undefined);
    console.log(this.getTickSpeed());

    const tick = this.getTickSpeed();
    this.setLoop(setInterval(() => {

      this.update();

    }, tick));


  }

  /**
   * defines what the game does each tick
   */
   update():void{

    //Move the player
    const player = this.getPlayer();
    player.update();

    //increase the speed time of tick
    const speed = this.getSpeed();
    const score = this.getScore();
    const tickSpeed = this.getTickSpeed();

    console.log(speed, score, tickSpeed);
    console.log( tickSpeed + ( score + speed ) * 100 );
    
    this.setSpeed(speed + 1);

    //Update table
    this.loadTable();

  }


  // ---------- GETTERS AND SETTERS ----------
  public getApple(): Apple {
    return this._apple
  }
  public setApple(Apple: Apple): void {
    this._apple =  Apple
  }
  public getPlayer(): Player {
    return this._player
  }
  public setPlayer(Player: Player): void {
    this._player = Player 
  }
  public getTable(): Table {
    return this._table
  }
  public setTable(Table: Table): void {
    this._table = Table
  }
  public getTickSpeed(): number {
    return this._tickSpeed;
  }
  public setTickSpeed(tickSpeed: number): void {

    this._tickSpeed = tickSpeed;

    this.createLoop();

  }
  public getLoop(): NodeJS.Timer | undefined {
    return this._loop;
  }
  public setLoop(loop: NodeJS.Timer | undefined): void {
    this._loop = loop;
  }
  public getScore(): number {
    return this._score;
  }
  public setScore(score: number): void {
    this._score = score;
  }
  public getSpeed(): number {
    return this._speed;
  }
  public setSpeed(speed: number): void {
    this._score = speed;
  }

}