import Apple from "../utils/apple";
import Player from "../utils/player";
import Table from "../utils/table";

declare class GameClass {
  
  _player: Player;
  _apple: Apple;
  _table: Table;
  _loop: NodeJS.Timer |undefined;
  _tickSpeed: number;
  _score: number;

  constructor(gameInfo : GameInformation) :void;

  loadTable() : void;
  update() : void;
  createLoop() : NodeJS.Timer;

  // ---------- GETTERS AND SETTERS ----------
  public getPlayer(): Player;
  public setPlayer(Player: Player): void;
  public getApple(): Apple;
  public setApple(Apple: Apple): void;
  public getTable(): Table;
  public setTable(Table: Table): void;
  public getLoop(): NodeJS.Timer | undefined;
  public setLoop(Table: NodeJS.Timer): void; 
  public getTickSpeed(): number;
  public setTickSpeed(Table: number): void; 
  public getScore(): number;
  public setScore(Table: number): void; 

}