"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeGame = void 0;
class SnakeGame {
    constructor(gameInfo) {
        this._player = gameInfo.player;
        this._context = gameInfo.ctx;
        this._apple = gameInfo.apple;
        this._canvasSize = gameInfo.size;
        this._speed = gameInfo.speed;
        this._bgColor = gameInfo.bgColor;
        this.loadGame();
    }
    /**
     * carrega os items iniciais do canvas para o inicio do jogo
     */
    loadGame() {
        const player = this.getPlayer();
        this.drawGameObject(player);
        const apple = this.getApple();
        this.drawGameObject(apple);
    }
    /**
     * Desenha no canvas o elemento de desejo
     * @param element elemento a ser mostrado na tela
     */
    drawGameObject(element) {
        const ctx = this.getContext();
        const position = element.getPosition();
        const maxPosition = element.getMaxPosition();
        const dimension = element.getDimensions();
        let finalX = position.x;
        if (position.x >= maxPosition.maxX) {
            finalX = maxPosition.minX;
        }
        let finalY = position.y;
        if (position.y >= maxPosition.maxY) {
            finalY = maxPosition.minY;
        }
        const finalPositions = {
            x: finalX,
            y: finalY
        };
        ctx.rect(finalPositions.x, finalPositions.y, dimension.width, dimension.height);
    }
    /**
     * Altera a posição do player no canvas
     * @param x nova posição em x
     * @param y nova posição em y
     */
    changePlayerPosition(x, y) {
        const ctx = this.getContext();
        ctx.clearRect(0, 0, this.getCanvasSize().width, this.getCanvasSize().height);
    }
    // get and set methods
    getPlayer() {
        return this._player;
    }
    setPlayer(player) {
        this._player = player;
    }
    getApple() {
        return this._apple;
    }
    setApple(_apple) {
        this._apple = _apple;
    }
    getCanvasSize() {
        return this._canvasSize;
    }
    setCanvasSize(canvasSize) {
        this._canvasSize = canvasSize;
    }
    getSpeed() {
        return this._speed;
    }
    setSpeed(speed) {
        this._speed = speed;
    }
    getContext() {
        return this._context;
    }
    setContext(context) {
        this._context = context;
    }
    getBGColor() {
        return this._bgColor;
    }
    setBGColor(bgColor) {
        this._bgColor = bgColor;
    }
}
exports.SnakeGame = SnakeGame;
