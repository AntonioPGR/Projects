import Apple from "../utils/apple";
import Player from "../utils/player";
import Table from "../utils/table";

declare class GameClass {
  
  _player: Player;
  _apple: Apple;
  _table: Table;
  _loop: NodeJS.Timer |undefined;
  _tickSpeed: number;
  _tickStartSpeed: number;
  _score: number;
  _speed: number;

  constructor(gameInfo : GameInformation) :void;

  loadTable() : void;
  update() : void;
  createLoop() : void;

  // ---------- GETTERS AND SETTERS ----------
  public getPlayer(): Player;
  public setPlayer(player: Player): void;
  public getApple(): Apple;
  public setApple(apple: Apple): void;
  public getTable(): Table;
  public setTable(table: Table): void;
  public getLoop(): NodeJS.Timer | undefined;
  public setLoop(loop: NodeJS.Timer): void; 
  public getTickSpeed(): number;
  public setTickSpeed(tickSpeed: number): void; 
  public getScore(): number;
  public setScore(score : number): void; 
  public getSpeed(): number;
  public setSpeed(speed : number): void;

}