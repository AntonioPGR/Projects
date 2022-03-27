import React, { useRef } from "react";
import { controlGame } from "../gameControl";
import { GameCanvasContainer } from "../style/style"

export function GameContainer(){
  const canvasRef = useRef<HTMLCanvasElement>(null)

  if(canvasRef.current){
    controlGame(canvasRef.current)
  }

  return(
    <div>

      <div id="gameCanvas">
        <GameCanvasContainer ref={canvasRef}>
          <p>
            Your browser can't load the game, please update it and retry!
          </p>
        </GameCanvasContainer>
      </div>

      <div id="buttons">
        <button onClick={() => { if(canvasRef.current){controlGame(canvasRef.current)}} } >Restart</button>
      </div>

    </div>
  )

}