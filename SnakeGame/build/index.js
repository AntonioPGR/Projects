"use strict";
document.body.onload = (ev) => {
    const canvas = document.querySelector("canvas#gameCanvas");
    if (!canvas) {
        window.alert("não foi possivel carregar o jogo!");
    }
};
