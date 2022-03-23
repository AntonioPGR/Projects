import Apple from "../utils/apple";
import Player from "../utils/player";
import Table from "../utils/table";

declare class GameClass {
  
  _player: Player;
  _apple: Apple;
  _table: Table;

  constructor(gameInfo : GameInformation) :void

  loadTable() : void

  // ---------- GETTERS AND SETTERS ----------
  public getPlayer(): Player
  public setPlayer(Player: Player): void 
  public getApple(): Apple
  public setApple(Apple: Apple): void 
  public getTable(): Table
  public setTable(Table: Table): void 

}