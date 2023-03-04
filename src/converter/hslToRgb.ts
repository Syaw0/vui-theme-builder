type Hsl = { h: number; s: number; l: number };
const hslToRgb = (hsl: Hsl) => {
  let { h, l, s } = hsl;
  l /= 100;
  s /= 100;
  let rgb = { r: 0, g: 0, b: 0 };
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = Math.abs(l - c / 2);

  if (h >= 0 && h < 60) {
    rgb.r = c;
    rgb.g = x;
    rgb.b = 0;
  } else if (h >= 60 && h < 120) {
    rgb.r = x;
    rgb.g = c;
    rgb.b = 0;
  } else if (h >= 120 && h < 180) {
    rgb.r = 0;
    rgb.g = c;
    rgb.b = x;
  } else if (h >= 180 && h < 240) {
    rgb.r = 0;
    rgb.g = x;
    rgb.b = c;
  } else if (h >= 240 && h < 300) {
    rgb.r = x;
    rgb.g = 0;
    rgb.b = c;
  } else if (h >= 300 && h < 360) {
    rgb.r = c;
    rgb.g = 0;
    rgb.b = x;
  }
  Object.keys(rgb).forEach((c) => {
    let key = c as keyof typeof rgb;
    rgb[key] = Math.round((rgb[key] + m) * 255);
  });

  return rgb;
};

export default hslToRgb;
