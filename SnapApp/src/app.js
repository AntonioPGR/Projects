import Header from './components/header/header.js';
import Main from './components/main/main.js';

import light from './assets/theme/light';
import dark from './assets/theme/dark';

import { ThemeProvider, createGlobalStyle }  from 'styled-components';

import { useState } from 'react';
import React from 'react';


const GlobalStyle = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      border: 0;
      background-color: transparent;
      box-sizing: content-box;

      font-family: ${props => props.theme.fonts.paragrafhs || "sans-serif" };
      color: ${props => props.theme.colors.textColor}
   }

   html{
      font-size: ${props => props.theme.sizes.paragrafhs || 16 + "px"};
      min-height: 100vh;
   }
   
   body{
      /* background-image: url(${props => props.theme.images.bgImageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center; */
      background-color: #0F0E0C;
      
      /* background-color: ${props => props.theme.colors.bgColor}; */
   }
`

function App(props){
   const [theme, setTheme] = useState(light);

   const changeTheme = () => {
      setTheme(theme === light? dark : light);
   }

   return(
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Header changeTheme={changeTheme} />
         <Main />

      </ThemeProvider>
   )
}

export default App;