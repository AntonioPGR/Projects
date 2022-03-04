import styled from "styled-components";

export const BarStyle = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`

export const SupBarDiv = styled(BarStyle)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  justify-items: center;
  align-content: space-between;
  align-items: center;
  line-height: 100%;

  width: 100%;
  height: 30px; // + 10 padding top e bottom: 40px
  font-size: 15px;
  padding: 6px 10px;

  *, * > *{
    line-height: 20px;
  }
`;

// a style for a possible footer
export const BottomBarDiv = styled(BarStyle)`
  text-align: center;
  
  a{
    color: white;
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  justify-items: center;
  align-content: space-between;
  align-items: center;
`