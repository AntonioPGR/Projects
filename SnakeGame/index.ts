import { Apple } from "./classes/apple";
import { SnakeGame } from "./classes/game";
import { Player } from "./classes/player";
import { GameInfo, PlayerInfo, AppleInfo } from './types/interfaces'
import { MaxPosition, Position, Size } from "./types/types";

document.body.onload = (ev) => {

  const canvas = document.querySelector<HTMLCanvasElement>("canvas#snakeGameDisplay");
  if( !canvas || canvas === null ){
    window.alert("canvas can't be loaded")
    return
  }

  const ctx = canvas.getContext("2d");
  if(!ctx){
    window.alert("context can't be loaded")
    return
  }

  console.log('loadingCreated')

  startGame(canvas, ctx);
}

/**
 * cria os objetos basicos para o inicio do jogo.
 */
function startGame(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D){

  const bgColor : string = canvas.style.backgroundColor || "#101010";
  const canvasSize : Size = {
    width: canvas.width,
    height: canvas.height
  }

  const objectsSize : Size = {width:30, height:30 }
  const player = createPlayer(canvasSize, objectsSize);
  const apple = createApple(canvasSize, objectsSize);

  const gameInfo : GameInfo = {
    ctx: ctx,
    speed: 1,
    bgColor: bgColor,
    size: canvasSize,
    apple: apple,
    player: player,
  }

  const game = new SnakeGame(gameInfo);
  console.log('gameCreated')
}

/**
 * cria e retorna o player usado no jogo
 * @param canvasSize tamanho do canvas
 * @param objectSize tamanho do player
 * @return retorna um elemento da classe player 
 */
function createPlayer(canvasSize:Size, objectSize:Size) : Player{

  const playerSize = objectSize

  const x = canvasSize.width / 2 - playerSize.width / 2;
  const y = canvasSize.height /2 - playerSize.height / 2;
  const playerPosition : Position = {
    x: x,
    y: y
  }

  const playerInfo : PlayerInfo = {
    maxPosition: {
      minX: 0, 
      minY: 0,
      maxX: canvasSize.width,
      maxY: canvasSize.height,
    },
    position: playerPosition,
    size: playerSize,
    skin: {
      color: '#22BC22'
    },
    speed: 1,
  }

  return new Player(playerInfo);

}

/**
 * Cria um alemento Apple 
 * @param canvasSize tamanho do canvas
 * @param objectSize tamanho da Apple
 * @returns um novo objeto Apple
 */
function createApple(canvasSize : Size, objectSize : Size) : Apple{

  const maxPosition : MaxPosition = {minX: 0, maxX: canvasSize.width, minY: 0, maxY:canvasSize.height}
  const x = Math.floor(Math.random() * (maxPosition.maxX - maxPosition.minX)) + maxPosition.minX;
    const y = Math.floor(Math.random() * (maxPosition.maxY - maxPosition.minY)) + maxPosition.minY;
  const startApple : AppleInfo = {
    skin: { color: "#C7372F"},
    maxPosition: maxPosition,
    size: objectSize,
    position: {x: x, y: y}
  }

  return new Apple(startApple);

}