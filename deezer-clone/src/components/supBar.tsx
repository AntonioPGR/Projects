import React from "react";
import styled from 'styled-components';

const SupBarDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 2vh;
`

export function SupBar(){
  return(
    <SupBarDiv>
      <p id="appName" > Deezer </p>

      <div id="options" > 
        <div>op1</div>
        <div>op1</div>
        <div>op1</div>
      </div>
      
    </SupBarDiv>
  )
}