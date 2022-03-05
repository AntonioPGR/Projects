import React from "react"
import { BottomBarDiv } from "../assets/css/BarStyle"

export function Footer(){
  return(
    <BottomBarDiv>
      Created By
      <a 
        href="https://www.github.com/AntonioPGR"
        target="_blank"
        rel="noreferrer noopener"
      >
        Antonio Pacheco
      </a>
    </BottomBarDiv>
  )
}