import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";

type Hsl = { h: number; s: number; l: number };
const hslToHex = (hsl: Hsl) => {
  let rgb = hslToRgb(hsl);
  return rgbToHex(rgb);
};

export default hslToHex;
