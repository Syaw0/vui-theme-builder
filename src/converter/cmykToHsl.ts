import cmykToRgb from "./cmykToRgb";
import rgbToHsl from "./rgbToHsl";

type Cmyk = { c: number; m: number; y: number; k: number };
const cmykToHsl = (cmyk: Cmyk) => {
  const rgb = cmykToRgb(cmyk);
  return rgbToHsl(rgb);
};

export default cmykToHsl;
