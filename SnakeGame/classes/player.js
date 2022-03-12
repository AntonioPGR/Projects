"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const gameObject_1 = require("./gameObject");
class Player extends gameObject_1.GameObjects {
    /**
     * @param startInfo um objeto contento as informações do jogador
    */
    constructor(startInfo) {
        const playerStartInfo = startInfo;
        super({
            maxPosition: playerStartInfo.maxPosition,
            position: playerStartInfo.position,
            size: playerStartInfo.size,
            skin: playerStartInfo.skin
        });
        this._speed = playerStartInfo.speed;
    }
    // get and set methods
    getSpeed() {
        return this._speed;
    }
    setSpeed(speed) {
        this._speed = speed;
    }
}
exports.Player = Player;
