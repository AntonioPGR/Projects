"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apple_1 = require("./classes/apple");
const game_1 = require("./classes/game");
const player_1 = require("./classes/player");
document.body.onload = (ev) => {
    const canvas = document.querySelector("canvas#snakeGameDisplay");
    if (!canvas || canvas === null) {
        window.alert("canvas can't be loaded");
        return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        window.alert("context can't be loaded");
        return;
    }
    console.log('loadingCreated');
    startGame(canvas, ctx);
};
/**
 * cria os objetos basicos para o inicio do jogo.
 */
function startGame(canvas, ctx) {
    const bgColor = canvas.style.backgroundColor || "#101010";
    const canvasSize = {
        width: canvas.width,
        height: canvas.height
    };
    const objectsSize = { width: 30, height: 30 };
    const player = createPlayer(canvasSize, objectsSize);
    const apple = createApple(canvasSize, objectsSize);
    const gameInfo = {
        ctx: ctx,
        speed: 1,
        bgColor: bgColor,
        size: canvasSize,
        apple: apple,
        player: player,
    };
    const game = new game_1.SnakeGame(gameInfo);
    console.log('gameCreated');
}
/**
 * cria e retorna o player usado no jogo
 * @param canvasSize tamanho do canvas
 * @param objectSize tamanho do player
 * @return retorna um elemento da classe player
 */
function createPlayer(canvasSize, objectSize) {
    const playerSize = objectSize;
    const x = canvasSize.width / 2 - playerSize.width / 2;
    const y = canvasSize.height / 2 - playerSize.height / 2;
    const playerPosition = {
        x: x,
        y: y
    };
    const playerInfo = {
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
    };
    return new player_1.Player(playerInfo);
}
/**
 * Cria um alemento Apple
 * @param canvasSize tamanho do canvas
 * @param objectSize tamanho da Apple
 * @returns um novo objeto Apple
 */
function createApple(canvasSize, objectSize) {
    const maxPosition = { minX: 0, maxX: canvasSize.width, minY: 0, maxY: canvasSize.height };
    const x = Math.floor(Math.random() * (maxPosition.maxX - maxPosition.minX)) + maxPosition.minX;
    const y = Math.floor(Math.random() * (maxPosition.maxY - maxPosition.minY)) + maxPosition.minY;
    const startApple = {
        skin: { color: "#C7372F" },
        maxPosition: maxPosition,
        size: objectSize,
        position: { x: x, y: y }
    };
    return new apple_1.Apple(startApple);
}
