import { cmykToHsl, rgbToHsl, hexToHsl } from "dye-converter";

const hexRegex = /^#[a-f\d]{3}$|^#[a-f\d]{6}$/i;

const cmykRegex =
  /^cmyk\(\s*([\d]+)%*\s*,\s*([\d]+)%*\s*,\s*([\d]+)%*\s*,\s*([\d]+)%*\s*\)$/i;

const rgbRegex = /^rgb\(\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\)$/i;

const hslRegex =
  /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%*\s*,\s*(\d{1,3})%*\s*\)$/i;

const converter = (color: string) => {
  if (hexRegex.test(color)) {
    return hexToHsl(color);
  }
  if (cmykRegex.test(color)) {
    const split: any = color.match(cmykRegex);
    const cmyk = {
      c: Number(split[1]),
      m: Number(split[2]),
      y: Number(split[3]),
      k: Number(split[4]),
    };
    Object.keys(cmyk).forEach((c) => {
      const key = c as keyof typeof cmyk;
      if (cmyk[key] > 100 || cmyk[key] < 0) {
        throw new Error(`Cmyk colors must be in range 0 to 100.`);
      }
    });
    return cmykToHsl(cmyk);
  }
  if (rgbRegex.test(color)) {
    const split: any = color.match(rgbRegex);
    const rgb = {
      r: Number(split[1]),
      g: Number(split[2]),
      b: Number(split[3]),
    };
    Object.keys(rgb).forEach((c) => {
      const key = c as keyof typeof rgb;
      if (rgb[key] > 255) {
        throw new Error(`RGB colors must be in range 0 to 255.`);
      }
      if (rgb[key] < 0) {
        throw new Error(`RGB colors must be in range 0 to 255.`);
      }
    });
    return rgbToHsl(rgb);
  }
  if (hslRegex.test(color)) {
    const split: any = color.match(hslRegex);
    const hsl = {
      h: Number(split[1]),
      s: Number(split[2]),
      l: Number(split[3]),
    };
    if (hsl.h > 360 || hsl.h < 0) {
      throw new Error(`Hue of colors must be in range 0 to 360.`);
    }
    if (hsl.s < 0 || hsl.s > 100) {
      throw new Error(`Saturation of colors must be in range 0 to 100.`);
    }
    if (hsl.l < 0 || hsl.l > 100) {
      throw new Error(`Lightness of colors must be in range 0 to 100.`);
    }
    return hsl;
  }
  throw new Error(
    `No scheme match this ${color}\nplease use valid color scheme`
  );
};
export default converter;
