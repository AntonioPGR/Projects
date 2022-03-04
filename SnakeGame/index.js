"use strict";
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
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
};
