export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;
export type Color = typeof COLORS[number];
export const colorCodes: Record<Color, number> = {
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
};

export const colorCode = (colorName: Color) => {
  if(!COLORS.includes(colorName)){
    throw new Error("unknwon color name");
  }

  return colorCodes[colorName];
};

