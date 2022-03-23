import React, { useRef } from "react";
import { createGame } from "../gameControl";
import { GameCanvasContainer } from "../style/style"

export function GameContainer(){
  const canvasRef = useRef<HTMLCanvasElement>(null)

  if(canvasRef.current){
    console.log('game function called')
    createGame(canvasRef.current)
  }

  return(
    <GameCanvasContainer ref={canvasRef}>

      <p>
        Your browser can't load the game, please update it and retry!
      </p>

    </GameCanvasContainer>
  )

}