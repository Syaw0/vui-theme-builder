import { cmykToHsl } from "dye-converter";
import { hexToHsl } from "dye-converter";

const hexRegex = /^#[a-f\d]{3}$|^#[a-f\d]{6}$/i;
const cmykRegex =
  /^cmyk\(\s*([\d]+)%\s*,\s*([\d]+)%\s*,\s*([\d]+)%\s*,\s*([\d]+)%\s*\)$/;

const converter = (color: string) => {
  if (hexRegex.test(color)) {
    return hexToHsl(color);
  }
  if (cmykRegex.test(color)) {
    const split: any = color.match(cmykRegex);

    return cmykToHsl({
      c: Number(split[1]),
      m: Number(split[2]),
      y: Number(split[3]),
      k: Number(split[4]),
    });
  }
  throw new Error(
    `No scheme match this ${color}\nplease use valid color scheme`
  );
};
export default converter;

console.log(converter("cmyk(0%,0%,0%,0%)"));
