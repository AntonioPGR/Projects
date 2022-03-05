import { PlayerPosition, PlayerSkin, PlayerInfo, TableBorders, PlayerSize, PlayerSpeed } from "../types/player";

export class Player{

  private position : PlayerPosition;
  private playerSize : PlayerSize;
  private speed : PlayerSpeed;
  private skin : PlayerSkin;
  private tableBorders : TableBorders;
  
  /** 
   * @param startPosition posição inicial o player no canvas
   * @param playerSize comprimento e altura inicial do player
   * @param speed velocidade padrão do jogador
   * @param skin cor do player e se desejar a url de uma imagem para ser mostrada no local da cor
   * 
   * @returns A player
  */
  constructor(startPosition:PlayerPosition, playerSize:PlayerSize, speed:PlayerSpeed, skin:PlayerSkin){

    this.position = startPosition;
    this.playerSize = playerSize;
    this.speed = speed;
    this.skin = skin;

  }

  // get and set methods
  public getPlayerSize(): PlayerSize {
      return this.playerSize;
  }
  public setPlayerSize(size: PlayerSize): void {
      this.playerSize = size;
  }

  public getSpeed(): PlayerSpeed {
      return this.speed;
  }
  public setSpeed(speed: PlayerSpeed): void {
      this.speed = speed;
  }

  public getSkin(): PlayerSkin {
    return this.skin;
  }
  public setSkin(skin: PlayerSkin): void {
    this.skin = skin;
  }

  public getTableBorders(): TableBorders {
    return this.tableBorders;
  }
  public setTableBorders(tableBorders: TableBorders): void {
    this.tableBorders = tableBorders;
  }

  public getPosition(): PlayerPosition {
    return this.position;
  }
  public setPosition(position: PlayerPosition): void {
    this.position = position;
  }

}