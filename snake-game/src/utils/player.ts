import GameObject from "./gameObject";

export default class Player implements PlayerClass{

  _bodyPieces: GameObject[];
  _direction: Direction;

  constructor(playerInfo:PlayerInformation){

    this._bodyPieces = playerInfo.bodyPieces;
    this._direction = playerInfo.direction;

  }

  /**
   * faz a atualização da posição do jogador
   */
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

  /**
   * Faz a movimentação do jogador
   * @param object objeto a ser movido
   * @param previusObject objeto anterior ao objeto a ser movido
   */
  public move(object:GameObject, previusObject?:GameObject): void {
    // ---------- MOVEMENT ----------

    // Cria uma nova posição para o objeto
    // caso haja um objeto anterior, o movimento será feito em relação a ele
    let newPosition : ObjectPosition;
    if(previusObject){
      console.log('previusObject')

      const objectPosition = previusObject.getPosition();
      const prevObjX = objectPosition.x;
      const prevObjY = objectPosition.y;

      newPosition = {
        x: prevObjX,
        y: prevObjY
      }

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
      newPosition = {
        x: newObjX,
        y: newObjY
      }
      if(direction.UP){
        newPosition = {
          x: newObjX,
          y: newObjY - objHeight
        }
      } else if (direction.DOWN){
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

    }


    // Verifica se a nova posição do objeto é válida
    newPosition = this.checkPosition(newPosition, object.getMaxPosition());

    // muda a posição do objeto
    object.setPosition(newPosition);
    

  }

  /**
   * Verifica se a nova posição do objeto é válida
   * @param newPosition nova posição do objeto
   * @param maxPosition tamanho máximo do tabuleiro
   * @returns Nova posição valida para o novo objeto
   */
  public checkPosition(newPosition: ObjectPosition, maxPosition: MaxPosition): ObjectPosition {
    // verifica se a nova posição do objeto é válida
    const newX = newPosition.x;
    const newY = newPosition.y;
    const maxX = maxPosition.maxX;
    const maxY = maxPosition.maxY;
    const minX = maxPosition.minX;
    const minY = maxPosition.minY;

    console.log(`
      newX: ${newX},
      newY: ${newY},
      maxX: ${maxX},
      maxY: ${maxY},
      minX: ${minX},
      minY: ${minY}
    `)

    // caso a nova posição seja inválida, a nova posição será a posição oposta
    // Verifica a posição em X
    if(newX < minX){
      console.log('newX menor que minX')
      newPosition.x = maxX
    }
    else if(newX > maxX){
      console.log('newX maior que maxX')
      newPosition.x = minX
    }

    // Verifica a posição em Y
    if(newY < minY){
      newPosition.y = maxY
    }
    else if(newY > maxY){
      newPosition.y = minY
    }

    return newPosition;
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
  /**
   * @returns a posição do objeto principal
   */
  public getPosition(){
    return this._bodyPieces[0].getPosition();
  }

}