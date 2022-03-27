import Apple from "./utils/apple";
import Player from "./utils/player"
import Game from "./utils/game";
import Table from "./utils/table";
import GameObject from "./utils/gameObject";

//Jogo inicializado
let game : Game;

/**
 * Create and control the phases of the game
 * @param gamesCanvas canvas onde o jogo será exibido
 */
export function controlGame(gamesCanvas:HTMLCanvasElement){

  if(!game){

    game = createGame(gamesCanvas);
    game.createLoop();
    
  }

}

/**
 * Cria a classe de controle para o jogo
 * @param gameCanvas canvas onde o jogo será exibido
 * @returns classe de controle do jogo
 */
function createGame(gameCanvas:HTMLCanvasElement) : Game{

  // ---------- CANVAS RENDERING ----------
  const canvas = gameCanvas;
  const ctx = gameCanvas.getContext('2d');
  if(!ctx){ 
    console.log('not canvas yet');
    throw new Error('not canvas yet');
  }

  // ---------- GAME OBJECTS CREATION ----------
  const table = new Table(canvas, ctx);
  const apple = createApple(table);
  const player = createPlayer(table);
  
  //---------- GAME CREATION ---------- 
  const gameInfo : GameInformation = {
    apple: apple,
    player: player,
    table: table,
    tickStartSpeed: 500,
    score: 0,
    startSpeed: 1,
  }
  const game = new Game(gameInfo);
  
  return game;
  
}

// ---------- GAMEOBJECTS INFO CREATION ----------
// informações de tamanho do jogador e da maçã
const objectSize : ObjectSize = {
  height: 10,
  width: 15
}

// PLAYER CREATION 
/**
 * Cria o jogador do jogo
 * @param table tabuleiro onde o player será exibido
 * @returns player
 */
function createPlayer(table : Table) : Player {
  const startPosition : ObjectPosition = {
    x: table.getTableSize().width / 2,
    y: table.getTableSize().height / 2
  }

  const maxPos: MaxPosition = {
    maxX: table.getTableSize().width - objectSize.width,
    minX: 0,
    maxY: table.getTableSize().height - objectSize.height,
    minY: 0,
  };
  console.log(maxPos);

  const skin : ObjectSkin = {
    color: '#51C81D',
  }

  const firstPlayer = new GameObject({
    position: startPosition,
    size: objectSize,
    skin: skin,
    maxPosition: maxPos,
  });

  const playerDirection : Direction = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
  }

  const playerInfo : PlayerInformation = {
    bodyPieces: [firstPlayer],
    speed: 10,
    direction: playerDirection
  }

  const player = new Player(playerInfo);

  return player;
}

// APPLE CREATION
/**
 * Cria a maçã do jogo
 * @param table tabuleiro onde o apple será exibido
 * @returns apple
 */
function createApple(table : Table) : Apple {
  const maxPos: MaxPosition = {
    maxX: table.getTableSize().width - objectSize.width,
    minX: 0,
    maxY: table.getTableSize().height - objectSize.height,
    minY: 0,
  };
  
  const appleSkin : ObjectSkin = {
    color: "#ff0000"
  }
  
  const randomX = Math.floor(Math.random() * (maxPos.maxX - maxPos.minX) ) + maxPos.minX;
  const randomY = Math.floor(Math.random() * (maxPos.maxY - maxPos.minY)) + maxPos.minY;
  const startRandomPosition : ObjectPosition = {
    x: randomX,
    y: randomY
  }
  
  const appleInfo : AppleInformation = {
    position: startRandomPosition,
    maxPosition: maxPos,
    size: objectSize,
    skin: appleSkin,
  }
  
  const apple = new Apple(appleInfo);
  
  return apple
}