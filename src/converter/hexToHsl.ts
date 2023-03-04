import hexToRgb from "./hexToRgb";

const hexToHsl = (color: string) => {
  const rgbColor = hexToRgb(color);
  const hsl = { h: 0, s: 0, l: 0 };
  let { r, g, b } = rgbColor;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  hsl.l = (max + min) / 2;
  if (max == min) {
    hsl.s = 0;
    hsl.h = 0;
  } else {
    const delta = max - min;
    hsl.s = hsl.l > 0.5 ? delta / (2 - max - min) : delta / (max - min);
    switch (max) {
      case r:
        hsl.h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        hsl.h = (b - r) / delta + 2;
        break;
      case b:
        hsl.h = (r - g) / delta + 4;
        break;
    }
  }
  hsl.h = Math.round((hsl.h / 6) * 360);
  hsl.s = Math.round(hsl.s * 100);
  hsl.l = Math.round(hsl.l * 100);
  return hsl;
};

export default hexToHsl;
