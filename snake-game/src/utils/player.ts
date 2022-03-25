import GameObject from "./gameObject";

export default class Player implements PlayerClass{

  _speed: number;
  _bodyPieces: GameObject[];
  _direction: Direction;

  constructor(playerInfo:PlayerInformation){

    this._speed = playerInfo.speed;
    this._bodyPieces = playerInfo.bodyPieces;
    this._direction = playerInfo.direction;

  }

  public update(): void {

    const bodyPices = this.getBodyPieces()
    bodyPices.forEach(piece => {
      this.move(piece);
    });

  }

  public move(object:GameObject): void {
    
    const position = object.getPosition();
    const objx = position.x;
    const objy = position.y;
    const speed = this.getSpeed();
    const direction = this.getDirection();
    if(direction.UP){
      object.setPosition({x: objx, y: objy - speed});
    }
    if(direction.DOWN){
      object.setPosition({x: objx, y: objy + speed});
    }
    if(direction.LEFT){
      object.setPosition({x: objx - speed, y: objy});
    }
    if(direction.RIGHT){
      object.setPosition({x: objx + speed, y: objy});
    }

  }

  // ---------- GETTERS AND SETTERS ----------
  public setSpeed(speed: Speed): void {
    this._speed =  speed;
  }
  public getSpeed(): Speed {
    return this._speed
  }
  public getBodyPieces(): GameObject[] {
    return this._bodyPieces
  }
  public setBodyPieces(bodyPieces: GameObject[]): void {
    this._bodyPieces = bodyPieces
  }
  public getDirection(): Direction {
    return this._direction
  }
  public setDirection(direction: Direction): void {
    this._direction = direction
  }

}