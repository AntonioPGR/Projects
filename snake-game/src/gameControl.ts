import { appendFile } from "fs";
import Apple from "./utils/apple";
import Player from "./utils/player"
import Game from "./utils/game";
import Table from "./utils/table";

/**
 * Função que cria o jogo
 * @param gameCanvas 
 */
export function createGame(gameCanvas:HTMLCanvasElement) : void {

  // ---------- TABLE CREATION ----------
  const game = gameCanvas;
  const ctx = gameCanvas.getContext('2d');
  if(!ctx){ 
    console.log('not canvas yet');
    return;
  }
  const table = new Table(game, ctx);

  // ---------- GAMEOBJECTS CREATION ----------
  const objectSize : ObjectSize = {
    height: 20,
    width: 20
  }

  // ---------- PLAYER CREATION ----------
  const startPosition : ObjectPosition = {
    x: table.getTableSize().width / 2,
    y: table.getTableSize().height / 2
  }
  const skin : ObjectSkin = {
    color: '#51C81D',
  }
  const playerInfo : PlayerInformation = {
    position: [startPosition],
    size: objectSize,
    skin: skin,
    speed: 1,
  }
  const player = new Player(playerInfo);


  //---------- APPLE CREATION ----------
  const maxApplePosition : MaxPosition = {
    maxX: table.getTableSize().width,
    minX: 0,
    maxY: table.getTableSize().height,
    minY: 0,
  };
  const appleSkin : ObjectSkin = {
    color: "#ff0000"
  }
  const startRandomPosition = Math.floor(Math.random() * (max - min) ) + min;
  const appleInfo : AppleInformation = {
    position: startRandomPosition;
    maxPosition: maxApplePosition,
    size: objectSize,
    skin: appleSkin,
  }
  const apple = new Apple(appleInfo);

}