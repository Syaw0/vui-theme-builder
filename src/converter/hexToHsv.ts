import hexToRgb from "./hexToRgb";

const hexToHsv = (hex: string) => {
  const rgbColor = hexToRgb(hex);
  const hsv = { h: 0, s: 0, v: 0 };
  let { r, g, b } = rgbColor;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  hsv.v = max;
  if (max == min) {
    hsv.s = 0;
    hsv.h = 0;
  } else {
    const delta = max - min;
    hsv.s = delta / max;
    switch (max) {
      case r:
        hsv.h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        hsv.h = (b - r) / delta + 2;
        break;
      case b:
        hsv.h = (r - g) / delta + 4;
        break;
    }
  }
  hsv.h = Math.round((hsv.h / 6) * 360);
  hsv.s = Math.round(hsv.s * 100);
  hsv.v = Math.round(hsv.v * 100);

  return hsv;
};
export default hexToHsv;
