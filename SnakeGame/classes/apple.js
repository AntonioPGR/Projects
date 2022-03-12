"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apple = void 0;
const gameObject_1 = require("./gameObject");
class Apple extends gameObject_1.GameObjects {
    constructor(appleInfo) {
        const color = appleInfo.skin;
        const dimensions = appleInfo.size;
        const maxPosition = appleInfo.maxPosition;
        const position = appleInfo.position;
        super({
            maxPosition: maxPosition,
            position: position,
            size: dimensions,
            skin: color,
        });
    }
}
exports.Apple = Apple;
