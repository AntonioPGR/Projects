import React, { useRef } from "react";
import { GameCanvasContainer } from "../style/style"

export function Game(){
  const canvasRef = useRef<HTMLCanvasElement>(null)

  

  const GameCanvas = GameCanvasContainer;

  return(
    <GameCanvas ref={canvasRef}>

        <p>
          Your browser can't load the game, please update it and retry!
        </p>

    </GameCanvas>
  )

}