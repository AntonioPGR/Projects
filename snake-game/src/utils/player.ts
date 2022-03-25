import GameObject from "./gameObject";

export default class Player implements PlayerClass{

  _bodyPieces: GameObject[];
  _direction: Direction;

  constructor(playerInfo:PlayerInformation){

    this._bodyPieces = playerInfo.bodyPieces;
    this._direction = playerInfo.direction;

  }

  public update(): void {

    const bodyPices = this.getBodyPieces()
    bodyPices.map((piece, index, array) => {
      
      if(index === 0){
        this.move(piece);
      }
      else{
        this.move(piece, array[index - 1]);
      }

    })

  }

  public move(object:GameObject, previusObject?:GameObject): void {
    // ---------- CHANGE POSITION ----------
    const movePlayer = (newPosition:ObjectPosition) => {
      object.setPosition(newPosition);
    }
    
    // ---------- MOVEMENT ----------

    // caso haja um objeto anterior, o movimento será feito em relação a ele
    if(previusObject){
      console.log('previusObject')

      const objectPosition = previusObject.getPosition();
      const prevObjX = objectPosition.x;
      const prevObjY = objectPosition.y;

      const newPosition : ObjectPosition = {
        x: prevObjX,
        y: prevObjY
      }

      movePlayer(newPosition)

    } 
    // caso não haja um objeto anterior, o movimento será feito em relação ao objeto atual ( obj + size -> direction )
    else {
      console.log('no previus object')

      // guarda a antiga posição do objeto
      const objectPosition = object.getPosition();
      const newObjX = objectPosition.x;
      const newObjY = objectPosition.y;

      // guarda o tamanho do objeto
      const objectSize = object.getSize();
      const objWidth = objectSize.width;
      const objHeight = objectSize.height;

      // cria a nova posição do objeto
      const direction = this.getDirection();

      // caso haja um erro na direção, a direção padrão do objeto será UP
      let newPosition : ObjectPosition = {
        x: newObjX,
        y: newObjY - objHeight
      }
      if (direction.DOWN){
        newPosition = {
          x: newObjX,
          y: newObjY + objHeight
        }
      } else if(direction.LEFT){

        newPosition = {
          x: newObjX - objWidth,
          y: newObjY
        }

      } else if(direction.RIGHT){
        newPosition = {
          x: newObjX + objWidth,
          y: newObjY
        }
      }

      movePlayer(newPosition)

    }

  }

  // ---------- GETTERS AND SETTERS ----------
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