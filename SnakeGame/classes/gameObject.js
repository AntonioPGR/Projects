"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObjects = void 0;
class GameObjects {
    constructor(gameInfo) {
        this._skin = gameInfo.skin;
        this._dimensions = gameInfo.size;
        this._maxPosition = gameInfo.maxPosition;
        this._position = gameInfo.position;
    }
    getColor() {
        return this._skin;
    }
    setColor(_skin) {
        this._skin = _skin;
    }
    getPosition() {
        return this._position;
    }
    setPosition(_position) {
        this._position = _position;
    }
    getMaxPosition() {
        return this._maxPosition;
    }
    setMaxPosition(_maxPosition) {
        this._maxPosition = _maxPosition;
    }
    getDimensions() {
        return this._dimensions;
    }
    setDimensions(_dimensions) {
        this._dimensions = _dimensions;
    }
}
exports.GameObjects = GameObjects;
