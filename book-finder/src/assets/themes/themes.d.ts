import "styled-components";

declare module 'styled-components'{

  export interface DefaultTheme{
    themeName: string,

    colors: Colors,
    fonts: Fonts,
    sizes: Sizes,

  }

  type Sizes = {
    defaultSize: string,
  }

  type Colors = {
    primary: string,
    secundary: string,
    third: string,
    text: string,
    background: string,
    background2: string,

    darkRed?: string,
    red?: string,
    lightRed?: string,
    orange?: string,
    yellow?: string,
    lightGreen?: string,
    green?: string,
    ciano?: string,
    blue?: string,
    darkBlue?: string,
    purple?: string,
    pink?: string,
    white?: string,
    black?: string,
  }

  type Fonts = {
    titles: string,
    paragrafhs: string,
    emphasis?: string,

    sansSerif?: string,
    serif?: string,
    monospace?: string,
    cursive?: string,
    fantasy?: string,

  }
}


