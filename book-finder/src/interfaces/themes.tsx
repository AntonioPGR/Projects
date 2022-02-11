export default interface Theme{
  themeName: string,

  colors: Colors,
  fonts: Fonts,

}

type Colors = {
  primary: string,
  secundary: string,
  text: string,
  background: string,

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