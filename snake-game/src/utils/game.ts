import { GameClass } from "../typescript/game";
import Apple from "./apple";
import Player from "./player";
import Table from "./table";

export default class Game implements GameClass{
  
  _player: Player;
  _apple: Apple;
  _table: Table;

  constructor(gameInfo:GameInformation){
    
    this._apple = gameInfo.apple;
    this._player = gameInfo.player;
    this._table = gameInfo.table;

    // make the first update of the table
    this.loadTable();

  }

  /**
   * Load / re-load the game table with new info
   */
  loadTable(): void {
    
    const table = this.getTable()
    
    table.clean()

    table.draw(this.getApple())

    // drawing the player
    this.getPlayer().getBodyPieces().forEach(piece => {
      table.draw(piece);
    });

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

}