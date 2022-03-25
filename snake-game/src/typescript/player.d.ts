import GameObject from "../utils/gameObject";

/**
 * Para o player mostrado no jogo
*/
declare global{
  declare class PlayerClass{
  
    _bodyPieces: GameObject[];
    _direction: Direction;
  
    // Class Functions:
    constructor(playerInfo:PlayerInformation) : void;
  
    public update(): void;
    public move(object:GameObject) : void;
  
    // ---------- GETTERS AND SETTERS ----------
    public getBodyPieces(): GameObject[]
    public setBodyPieces(bodyPieces: GameObject[]): void
    public getDirection(): Direction
    public setDirection(direction: Direction): void
  
  }

}