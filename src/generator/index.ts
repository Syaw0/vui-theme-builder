import { writeFile } from "fs";
import converter from "../converter";
import generateNeutralColors from "./generateNeutralColors";
import generateRefColors from "./generateRefColors";

const generatorTheme = (color: string) => {
  const hsl = converter(color);
  const primary = generateRefColors(hsl, 0.5, "primary");
  let secColor = { h: hsl.h - 3, s: hsl.s - 30, l: hsl.l - 5 };
  const secondary = generateRefColors(secColor, 0.5, "secondary");
  let terColor = { h: hsl.h + 70, s: hsl.s + 10, l: hsl.l + 10 };
  const tertiary = generateRefColors(terColor, 0.5, "tertiary");

  const neutralColors = generateNeutralColors(hsl);

  return {
    primaryRef: primary,
    secondaryRef: secondary,
    tertiaryRef: tertiary,
    ...neutralColors,
  };
};

export default generatorTheme;
