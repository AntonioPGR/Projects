import GameObject from "../utils/gameObject";

/**
 * Para o player mostrado no jogo
*/
declare global{
  declare class PlayerClass{
  
    _speed: Speed;
    _bodyPieces: GameObject[];
  
    // Class Functions:
    constructor(playerInfo:PlayerInformation) : void;
  
    public update(): void;
    public move(object:GameObject) : void;
  
    // ---------- GETTERS AND SETTERS ----------
    public getSpeed() : Speed
    public setSpeed(Speed : Speed): void 
    public getBodyPieces(): GameObject[]
    public setBodyPieces(bodyPieces: GameObject[]): void
    public getDirection(): Direction
    public setDirection(direction: Direction): void
  
  }

}