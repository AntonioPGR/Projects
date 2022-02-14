import { DefaultTheme } from "styled-components";

const LightTheme : DefaultTheme = {
  themeName: 'light',

  colors: {
    primary: '#6290C3',
    secundary: '#BAFF29',
    third: '#b7f7e9c3',
    text: '#1A1B41',
    background: '#C2E7DA',
    background2: '#c6fff1c3',
  },

  fonts: {
    titles: 'Arial, Helvetica, sans-serif',
    paragrafhs: 'Times',
  },

  sizes: {
    defaultSize: '16px',
  }
}

export { LightTheme }