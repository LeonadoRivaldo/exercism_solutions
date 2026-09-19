type Colors = "black" 
  | "brown" 
  | "red" 
  | "orange"
  | "yellow"
  | "green" 
  | "blue"
  | "violet"
  | "grey" 
  | "white";
export const colorCodes: Record<Colors, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}


export function decodedValue(bandColors: Colors[]) {
  const colorA = colorCodes[bandColors[0]];
  const colorB = colorCodes[bandColors[1]];

  return parseInt(`${colorA}${colorB}`, 10);
}
